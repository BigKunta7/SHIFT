import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export function Chatbot() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button size="icon" className="rounded-full w-16 h-16 bg-secondary hover:bg-secondary/90 shadow-lg">
        <MessageSquare className="h-8 w-8" />
        <span className="sr-only">Open Chat</span>
      </Button>
    </div>
  )
}
