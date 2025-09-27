import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

interface BackToHomeProps {
  textColor?: string; // e.g. "text-gray-600 hover:text-black"
}

function BackToHome({ textColor }: BackToHomeProps) {
  // Guard clause: fallback to default color if not provided
  const colorClasses = textColor || "text-gray-600 hover:text-black";

  return (
    <div className="flex items-center space-x-4">
      <Link to="/" className={`flex items-center space-x-2 ${colorClasses}`}>
        <Button
          asChild
          variant="ghost"
          className={`flex items-center space-x-2 ${colorClasses}`}
        >
          <span className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </span>
        </Button>
      </Link>
    </div>
  )
}

export default BackToHome