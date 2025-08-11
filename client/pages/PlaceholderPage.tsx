import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-petcare-50 to-warm-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-petcare-100 rounded-full mb-6">
            <Construction className="h-12 w-12 text-petcare-600" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-muted-foreground mb-8">
            This page is currently under construction. Please check back soon or
            contact us for more information.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            asChild
            className="w-full bg-petcare-600 hover:bg-petcare-700"
          >
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
