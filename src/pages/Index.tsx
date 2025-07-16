import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCircle, Globe, Brain, Building, Users, Star, TrendingUp, MapPin, Calendar, Book, Award, Target, Zap } from "lucide-react";
import SignUpSection from "@/components/SignUpSection";
import StickyCTA from "@/components/StickyCTA";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ExecutionJourneyCarousel from "@/components/ExecutionJourneyCarousel";

const ProgressBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      const bar = document.getElementById('progress-bar');
      if (bar) bar.style.width = `${progress}%`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div id="progress-bar" className="progress-bar" style={{width: 0}} />;
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("month1");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [showMentorForm, setShowMentorForm] = useState(false);
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

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

  // Function to scroll to course cards section
  const scrollToCourses = () => {
    const courseSection = document.getElementById('courses');
    if (courseSection) {
      courseSection.scrollIntoView({ 
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
        "Internships at Reputed Companies",
        "Personalized Training",
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
        "Visa & logistics support provided",
        "International Internships at Reputed Companies",
        "Enhanced Personalized Training"
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

  // Helper to generate payment route slug from plan name
  const getPaymentRoute = (planName: string) => {
    if (planName.toLowerCase().includes("online")) return "ai-course";
    if (planName.toLowerCase().includes("india")) return "ml-course";
    if (planName.toLowerCase().includes("global")) return "global-course";
    return "ai-course";
  };

  return (
    <div className="min-h-screen gradient-bg">
      <ProgressBar />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-lg rounded-b-xl px-6 py-1 m-0 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-14">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-gradient2 bg-clip-text text-transparent tracking-tight rounded px-2 py-1">IPNIA</div>
          <div className="flex-1 flex items-center justify-end gap-4 md:gap-8">
            <a href="#courses" className="hidden md:inline text-base font-semibold text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4">Choose Your Track</a>
            <a href="#contact" className="hidden md:inline text-base font-semibold text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4">Contact</a>
            <Button 
              variant="outline" 
              onClick={() => setShowMentorForm(true)}
              className="hidden md:flex"
            >
              Find a Mentor
            </Button>
            <Button className="glow-effect" onClick={scrollToCourses}>Apply Now</Button>
            {/* Auth Buttons/Profile */}
            {!loading && !user && (
              <>
                <Link to="/signup">
                  <Button variant="outline" className="ml-2">Sign Up</Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="ml-2">Sign In</Button>
                </Link>
              </>
            )}
            {!loading && user && (
              <div className="flex items-center space-x-2 ml-2">
                <Avatar>
                  <AvatarFallback>{user.user_metadata?.full_name?.[0] || user.email[0]}</AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm text-foreground">{user.user_metadata?.full_name || user.email}</span>
                <Button variant="ghost" size="sm" onClick={signOut}>Sign Out</Button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none animate-pulse" style={{background: 'radial-gradient(circle at 60% 40%, #764ba2 0%, transparent 70%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 fade-in-up">
              <span className="hero-gradient">Learn, Earn, Execute, Explore</span>
              <br />
              <span className="text-foreground">In Just Three Months</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto fade-in-up stagger-2">
              Choose your path: Indian Industry Immersion or Global Exposure with on-site internships, 
              accommodation & meals, plus lifetime access to your AI Course.
            </p>
            <Button size="lg" className="mb-12 pulse-glow fade-in-up stagger-3" onClick={scrollToCourses}>
              Start Learning Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="card-hover fade-in-up stagger-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-2 animate-bounce" />
                  Core Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 animate-bounce" />
                  <span>Access to General AI & Domain Courses</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 animate-bounce" />
                  <span>Community and Career Support</span>
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover fade-in-up stagger-5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-400 mr-2 animate-spin" />
                  Premium Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 animate-bounce" />
                  <span>On-site internship with stay + meals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 animate-bounce" />
                  <span>Domestic or International Tour</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
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
            <div className="text-center fade-in-up stagger-5">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm font-medium">Internships at Reputed Companies</p>
            </div>
            <div className="text-center fade-in-up stagger-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                <Book className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm font-medium">Personalized Training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards Section - moved above Skills Crisis */}
      <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
              Ipnia Execution Program
            </h2>
            <p className="text-2xl text-primary font-bold fade-in-up stagger-1">
              Now Starting from ₹999
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Online Immersion Program */}
            <Card className="card-hover relative fade-in-up stagger-1 ring-2 ring-primary">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">Online Immersion Program</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">₹999</div>
                <CardDescription>2-month program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">General AI Tools (Month 1)</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">Online internship (1 month)</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">Free lifetime course access</span></div>
                <Button className="w-full mt-6" onClick={() => {
                  const paymentPath = "/payment/ai-course";
                  navigate(paymentPath);
                }}>Apply Now</Button>
              </CardContent>
            </Card>
            {/* India Immersion Program */}
            <Card className="card-hover relative fade-in-up stagger-2">
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">India Immersion Program</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">₹9,999</div>
                <CardDescription>Complete 3-month AI training</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">General AI Tools (Month 1)</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">Domain-specific training (Month 2)</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">On-site internship with accommodation & meals</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">Free lifetime course access</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">Industry mentorship & evaluation</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">Certificate + Letter of Recommendation</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">Internships at Reputed Companies</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">Personalized Training</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">Delhi industry immersion final week</span></div>
                <Button className="w-full mt-6" variant="outline" onClick={() => {
                  const paymentPath = "/payment/ml-course";
                  navigate(paymentPath);
                }}>Apply Now</Button>
              </CardContent>
            </Card>
            {/* Global Industry Exposure */}
            <Card className="card-hover relative fade-in-up stagger-3">
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">Global Industry Exposure</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">₹24,999</div>
                <CardDescription>All India Program features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">All India Program features</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">7-day International Learning Trip</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">Choose from Vietnam/UAE/Oman</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">Global startup visits + cultural immersion</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">Global networking & mentorship</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">Visa & logistics support provided</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">International Internships at Reputed Companies</span></div>
                <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-sm">Enhanced Personalized Training</span></div>
                <Button className="w-full mt-6" variant="outline" onClick={() => {
                  const paymentPath = "/payment/global-course";
                  navigate(paymentPath);
                }}>Apply Now</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="inline-block p-6 fade-in-up">
              <h3 className="text-xl font-bold text-yellow-500 mb-2">Scholarship Opportunities Available</h3>
              <p className="text-muted-foreground">(For ₹9,999 & ₹24,999 programs)</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Execution Journey Multi-Step Flow Section */}
      <ExecutionJourneyCarousel />

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

      {/* Essential Industry Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
              Master the 80+ Essential Industry Tools
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {/* Row 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Python">🐍</span></div>
              <span className="text-base font-semibold">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Pandas">📊</span></div>
              <span className="text-base font-semibold">Pandas</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Sklearn">🔬</span></div>
              <span className="text-base font-semibold">Sklearn</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Statsmodels">📈</span></div>
              <span className="text-base font-semibold">Statsmodels</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="MySQL">🗄️</span></div>
              <span className="text-base font-semibold">MySQL</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="AWS">☁️</span></div>
              <span className="text-base font-semibold">AWS</span>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="GCP">🔵</span></div>
              <span className="text-base font-semibold">GCP</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Azure">🔷</span></div>
              <span className="text-base font-semibold">Azure</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="PySpark">🔥</span></div>
              <span className="text-base font-semibold">PySpark</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="PyTorch">🧠</span></div>
              <span className="text-base font-semibold">PyTorch</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Keras">🟥</span></div>
              <span className="text-base font-semibold">Keras</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="OpenAI">🔓</span></div>
              <span className="text-base font-semibold">OpenAI</span>
            </div>
            {/* Row 3 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="GPT">🤖</span></div>
              <span className="text-base font-semibold">GPT</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="LlamaIndex">🦙</span></div>
              <span className="text-base font-semibold">LlamaIndex</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Claude">🌟</span></div>
              <span className="text-base font-semibold">Claude</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="CrewAI">👥</span></div>
              <span className="text-base font-semibold">CrewAI</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="LangGraph">🔗</span></div>
              <span className="text-base font-semibold">LangGraph</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Autogen">⚙️</span></div>
              <span className="text-base font-semibold">Autogen</span>
            </div>
            {/* Row 4 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Power BI">📊</span></div>
              <span className="text-base font-semibold">Power BI</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Tableau">📈</span></div>
              <span className="text-base font-semibold">Tableau</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="MongoDB">🍃</span></div>
              <span className="text-base font-semibold">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Docker">🐳</span></div>
              <span className="text-base font-semibold">Docker</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Kubernetes">☸️</span></div>
              <span className="text-base font-semibold">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Streamlit">💡</span></div>
              <span className="text-base font-semibold">Streamlit</span>
            </div>
            {/* Row 5 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Airflow">🌀</span></div>
              <span className="text-base font-semibold">Airflow</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="MLFlow">🔁</span></div>
              <span className="text-base font-semibold">MLFlow</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2 text-4xl"><span role="img" aria-label="Kafka">🦒</span></div>
              <span className="text-base font-semibold">Kafka</span>
            </div>
          </div>
        </div>
      </section>

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
      <footer id="contact" className="bg-card py-16 px-4 sm:px-6 lg:px-8">
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
                <p>Email: Info@Ipnia.com</p>
                <p>Phone: 01145534440</p>
                <p>Address: A199 Gujranwala Town Part 01 Delhi 110009</p>
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

      {/* Social & Payment Section */}
      <div className="bg-card py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="font-semibold mb-2">Follow us on:</div>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-primary/10 transition">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-primary/10 transition">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-primary/10 transition">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 2.47a.75.75 0 0 1 1.06 1.06l-5.22 5.22 3.44 3.44 5.22-5.22a.75.75 0 1 1 1.06 1.06l-5.22 5.22 5.22 5.22a.75.75 0 1 1-1.06 1.06l-5.22-5.22-3.44 3.44 5.22 5.22a.75.75 0 1 1-1.06 1.06l-5.22-5.22-5.22 5.22a.75.75 0 1 1-1.06-1.06l5.22-5.22-3.44-3.44-5.22 5.22a.75.75 0 1 1-1.06-1.06l5.22-5.22-5.22-5.22a.75.75 0 1 1 1.06-1.06l5.22 5.22 3.44-3.44-5.22-5.22a.75.75 0 1 1 1.06-1.06l5.22 5.22 3.44-3.44-5.22-5.22a.75.75 0 1 1 1.06-1.06l5.22 5.22z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-primary/10 transition">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/></svg>
              </a>
            </div>
          </div>

          {/* Industry Partnerships Section */}
          <div className="flex flex-col items-center flex-1 md:mx-8">
            <div className="font-semibold text-base mb-2 text-center">Industry Partnerships</div>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {/* Apple logo (replaces CFF, Tripify, and Intel logos) */}
              <img src="/apple-logo.svg" alt="Apple Logo" className="h-10 w-auto" />
              <img src="/apple-logo.svg" alt="Apple Logo" className="h-10 w-auto" />
              {/* Google logo (SVG) */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" className="h-10 w-auto" />
              {/* Microsoft logo (SVG) */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft Logo" className="h-10 w-auto" />
              {/* Amazon logo (SVG) */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" className="h-10 w-auto" />
              <img src="/apple-logo.svg" alt="Apple Logo" className="h-10 w-auto" />
            </div>
          </div>

          <div>
            <div className="font-semibold mb-2">Payment & Security</div>
            <div className="flex gap-3">
              <img src="/visa.svg" alt="Visa" className="h-8 w-auto" />
              <img src="/mastercard.svg" alt="MasterCard" className="h-8 w-auto" />
              <img src="/rupay.svg" alt="RuPay" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
