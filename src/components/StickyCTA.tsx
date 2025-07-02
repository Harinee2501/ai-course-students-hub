
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StickyCTA = () => {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    if (signupSection) {
      signupSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border p-4 md:hidden">
      <Button
        onClick={scrollToSignup}
        className="w-full h-12 text-base pulse-glow"
        size="lg"
      >
        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default StickyCTA;
