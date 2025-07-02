import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Mail, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";

const SignUpSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSuccess(true);
    setIsSubmitting(false);
    
    toast({
      title: "Application Submitted Successfully!",
      description: "You're one step closer to transforming your career with IPNIA.",
      duration: 5000,
    });

    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ fullName: "", email: "", phone: "" });
    }, 3000);
  };

  const handleSocialSignIn = (provider: string) => {
    toast({
      title: `${provider} Sign-In`,
      description: "Social authentication will be implemented soon!",
      duration: 3000,
    });
  };

  if (isSuccess) {
    return (
      <section id="signup" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center p-8 bg-green-500/10 border-green-500/20">
            <CardContent className="space-y-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-500">Success!</h3>
              <p className="text-lg text-muted-foreground">
                You're one step closer to transforming your career with IPNIA.
              </p>
              <p className="text-sm text-muted-foreground">
                Our team will contact you within 24 hours to discuss your AI learning journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your <span className="hero-gradient">AI Journey</span> Today
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of professionals transforming their careers with AI
          </p>
        </div>

        <Card className="card-hover">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Apply Now</CardTitle>
            <CardDescription>
              Choose your preferred sign-up method below
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Authentication Buttons */}
            <div className="space-y-3">
              <Link to="/signup">
                <Button
                  variant="default"
                  className="w-full h-12 text-base glow-effect"
                >
                  Create Account
                </Button>
              </Link>
              
              <Link to="/login">
                <Button
                  variant="outline"
                  className="w-full h-12 text-base"
                >
                  Already have an account? Sign In
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with quick form
                </span>
              </div>
            </div>

            {/* Quick Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="h-12"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base glow-effect"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Start Learning Today"}
              </Button>
            </form>

            <p className="text-xs text-center text-muted-foreground">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SignUpSection;
