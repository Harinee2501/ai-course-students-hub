
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCircle, Globe, Brain, Building, Users, Star, TrendingUp, MapPin, Calendar, Book, Award, Target, Zap } from "lucide-react";
import SignUpSection from "@/components/SignUpSection";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  const [activeTab, setActiveTab] = useState("month1");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [showMentorForm, setShowMentorForm] = useState(false);

  // Function to scroll to signup section
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    if (signupSection) {
      signupSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const domains = [
    { name: "Law", email: "law@ipnia.com", phone: "+91 98765 43210" },
    { name: "Technology", email: "tech@ipnia.com", phone: "+91 98765 43211" },
    { name: "Medicine", email: "med@ipnia.com", phone: "+91 98765 43212" },
    { name: "Finance", email: "finance@ipnia.com", phone: "+91 98765 43213" },
    { name: "HR", email: "hr@ipnia.com", phone: "+91 98765 43214" },
    { name: "Business", email: "business@ipnia.com", phone: "+91 98765 43215" },
    { name: "Architecture", email: "arch@ipnia.com", phone: "+91 98765 43216" }
  ];

  const statistics = [
    { number: "75%", label: "Skills Gap Crisis", desc: "Employers can't find qualified AI professionals" },
    { number: "5M", label: "Jobs Available", desc: "New AI-enhanced positions created globally" },
    { number: "27%", label: "Salary Premium", desc: "Higher earnings for AI professionals" },
    { number: "3-5x", label: "Productivity Boost", desc: "Performance improvement with AI skills" },
    { number: "2-6", label: "Weeks to Hire", desc: "vs 6-12 months for traditional roles" },
    { number: "85%", label: "Job Satisfaction", desc: "Higher satisfaction in AI careers" }
  ];

  const pricingPlans = [
    {
      name: "Online Immersion Program",
      price: "₹999",
      duration: "2-month program",
      features: [
        "General AI Tools (Month 1)",
        "Online internship (1 month)",
        "Free lifetime course access"
      ],
      popular: true
    },
    {
      name: "India Immersion Program",
      price: "₹9,999",
      duration: "Complete 3-month AI training",
      features: [
        "General AI Tools (Month 1)",
        "Domain-specific training (Month 2)",
        "On-site internship with accommodation & meals",
        "Free lifetime course access",
        "Industry mentorship & evaluation",
        "Certificate + Letter of Recommendation",
        "Delhi industry immersion final week"
      ],
      popular: false
    },
    {
      name: "Global Industry Exposure",
      price: "₹24,999",
      duration: "All India Program features",
      features: [
        "All India Program features",
        "7-day International Learning Trip",
        "Choose from Vietnam/UAE/Oman",
        "Global startup visits + cultural immersion",
        "Global networking & mentorship",
        "Visa & logistics support provided"
      ],
      popular: false
    }
  ];

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold hero-gradient">IPNIA</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#program" className="text-muted-foreground hover:text-primary transition-colors">3 Month Program</a>
              <a href="#learning" className="text-muted-foreground hover:text-primary transition-colors">Learning</a>
              <a href="#internship" className="text-muted-foreground hover:text-primary transition-colors">On-site Internship</a>
              <a href="#tracks" className="text-muted-foreground hover:text-primary transition-colors">Choose Your Track</a>
              <a href="#success" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => setShowMentorForm(true)}
                className="hidden md:flex"
              >
                Find a Mentor
              </Button>
              <Button className="glow-effect" onClick={scrollToSignup}>Apply Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
              <span className="hero-gradient">Learn, Earn, Execute, Explore</span>
              <br />
              <span className="text-foreground">In Just Three Months</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto fade-in-up stagger-1">
              Choose your path: Indian Industry Immersion or Global Exposure with on-site internships, 
              accommodation & meals, plus lifetime access to your AI Course.
            </p>
            <Button size="lg" className="mb-12 pulse-glow fade-in-up stagger-2" onClick={scrollToSignup}>
              Start Learning Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="card-hover fade-in-up stagger-3">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  Core Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Access to General AI & Domain Courses</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Community and Career Support</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover fade-in-up stagger-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  Premium Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>On-site internship with stay + meals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Domestic or International Tour</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center fade-in-up stagger-1">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm font-medium">Stay Included</p>
            </div>
            <div className="text-center fade-in-up stagger-2">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm font-medium">Meals Provided</p>
            </div>
            <div className="text-center fade-in-up stagger-3">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm font-medium">Industry Projects</p>
            </div>
            <div className="text-center fade-in-up stagger-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm font-medium">Certificate + LOR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Crisis Section */}
      <section id="crisis" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
              The Skills Crisis is <span className="text-red-500">Real</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto fade-in-up stagger-1">
              While AI creates millions of high-paying jobs, 75% of positions remain unfilled due to the skills gap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {statistics.map((stat, index) => (
              <Card key={index} className={`card-hover text-center fade-in-up stagger-${index % 4 + 1}`}>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary mb-2">{stat.number}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover fade-in-up stagger-1">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-lg">Rapid Career Advancement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">AI professionals promoted in 6-12 months vs 2-5 years</p>
              </CardContent>
            </Card>

            <Card className="card-hover fade-in-up stagger-2">
              <CardHeader>
                <Building className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-lg">Industry Demand</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Every sector from law to hospitality needs AI specialists</p>
              </CardContent>
            </Card>

            <Card className="card-hover fade-in-up stagger-3">
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle className="text-lg">Competitive Advantage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Early adopters secure highest-paying positions</p>
              </CardContent>
            </Card>

            <Card className="card-hover fade-in-up stagger-4">
              <CardHeader>
                <Globe className="h-8 w-8 text-purple-500 mb-2" />
                <CardTitle className="text-lg">Future-Proof Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">AI expertise becomes increasingly valuable</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section id="program" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
              Same comprehensive program for <span className="text-primary">all tracks</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto fade-in-up stagger-1">
              From AI foundations to real-world industry experience, structured program prepares you for future workforce in 2-3 months
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover fade-in-up stagger-1">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">1</div>
                  <div>
                    <CardTitle className="text-xl">Month 1</CardTitle>
                    <CardDescription>General AI Tools Training</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-500 mb-2">Master Tools:</h4>
                  <p className="text-sm text-muted-foreground">ChatGPT, Claude, Canva AI, Notion AI</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-500 mb-2">Skills Gained:</h4>
                  <p className="text-sm text-muted-foreground">Prompt Engineering, Productivity, Communication, Automation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-500 mb-2">Format:</h4>
                  <p className="text-sm text-muted-foreground">Self-paced online modules with guided mentor sessions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover fade-in-up stagger-2">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">2</div>
                  <div>
                    <CardTitle className="text-xl">Month 2</CardTitle>
                    <CardDescription>Domain-Specific AI Training</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-500 mb-2">Specialized Tools:</h4>
                  <p className="text-sm text-muted-foreground">FinGPT, BioGPT, Legal AI, AutoCAD AI, Excel Copilot</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-500 mb-2">Professional Apps:</h4>
                  <p className="text-sm text-muted-foreground">Harvey (Legal), CaseMine, MedPalm, Marketing AI</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-500 mb-2">Skills Gained:</h4>
                  <p className="text-sm text-muted-foreground">Domain Expertise, Specialized Tools, Industry Applications</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover fade-in-up stagger-3">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">3</div>
                  <div>
                    <CardTitle className="text-xl">Month 3</CardTitle>
                    <CardDescription>On-Site Industry Internship</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-500 mb-2">Experience:</h4>
                  <p className="text-sm text-muted-foreground">Live Projects, Industry Mentorship, Work Experience</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-500 mb-2">Outcome:</h4>
                  <p className="text-sm text-muted-foreground">Professional Experience, Networking, Career Readiness</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-500 mb-2">Certificate:</h4>
                  <p className="text-sm text-muted-foreground">Industry Certificate + Letter of Recommendation</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 fade-in-up">Final Week Options</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-hover fade-in-up stagger-1">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl">🇮🇳 Delhi Industry Immersion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Top startup visits, professional networking, mentorship sessions</p>
                </CardContent>
              </Card>

              <Card className="card-hover fade-in-up stagger-2">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl">🌍 International Exposure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Global tours in Vietnam, UAE, or Oman with cultural immersion</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tracks" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
              IPNIA's ₹5,00,000 Career Transformation Program
            </h2>
            <p className="text-2xl text-primary font-bold fade-in-up stagger-1">
              Now Starting from ₹999
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`card-hover relative fade-in-up stagger-${index + 1} ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                  <CardDescription>{plan.duration}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className="w-full mt-6" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={scrollToSignup}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="inline-block p-6 fade-in-up">
              <h3 className="text-xl font-bold text-yellow-500 mb-2">Scholarship Opportunities Available</h3>
              <p className="text-muted-foreground">(For ₹9,999 & ₹24,999 programs)</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sign-Up Section */}
      <SignUpSection />

      {/* Mentor Finder Modal */}
      {showMentorForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Find a Mentor</CardTitle>
              <CardDescription>Select your domain to connect with industry experts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {domains.map((domain) => (
                  <Button
                    key={domain.name}
                    variant={selectedDomain === domain.name ? "default" : "outline"}
                    onClick={() => setSelectedDomain(domain.name)}
                    className="text-sm"
                  >
                    {domain.name}
                  </Button>
                ))}
              </div>
              
              {selectedDomain && (
                <div className="space-y-2 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold">{selectedDomain} Mentor Contact:</h4>
                  <p className="text-sm">Email: {domains.find(d => d.name === selectedDomain)?.email}</p>
                  <p className="text-sm">Phone: {domains.find(d => d.name === selectedDomain)?.phone}</p>
                </div>
              )}
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setShowMentorForm(false)}
                  className="flex-1"
                >
                  Close
                </Button>
                <Button 
                  disabled={!selectedDomain}
                  className="flex-1"
                >
                  Contact Mentor
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Sticky CTA for Mobile */}
      <StickyCTA />

      {/* Footer */}
      <footer className="bg-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 hero-gradient">IPNIA</h3>
              <p className="text-muted-foreground text-sm">
                Indian Platform for Next-Gen Industry-AI. Transforming careers through comprehensive AI education.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Email: hello@domain-ai.education</p>
                <p>Phone: +91 98765 43210</p>
                <p>Support: 24/7 Student Support</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Program Links</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Legal AI | Tech AI | Finance AI</p>
                <p>Medical AI | Business AI</p>
                <p>All Programs</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Career Guide | Free Tools</p>
                <p>Community | Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Domain-AI Education Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
