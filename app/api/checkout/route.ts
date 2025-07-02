import { NextResponse, type NextRequest } from "next/server"
// The Vercel-provided Stripe integration will automatically set the STRIPE_SECRET_KEY environment variable.
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

// Define products available for purchase
const products: Record<string, { name: string; price: number }> = {
  "landing-page": { name: "Offre Spéciale: Landing Page", price: 37900 }, // 379.00 EUR
  starter: { name: "Pack Starter", price: 199700 }, // 1997.00 EUR
  "growth-pro": { name: "Pack Growth Pro", price: 499700 }, // 4997.00 EUR
}

export async function POST(req: NextRequest) {
  const { productId } = await req.json()

  if (!productId || !products[productId]) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 })
  }

  const product = products[productId]
  const origin = req.headers.get("origin") || "http://localhost:3000"

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "link"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: product.name,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/paiement/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/paiement/annule`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Error creating checkout session" }, { status: 500 })
  }
}
