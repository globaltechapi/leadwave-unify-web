import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, MessageSquare, Bot, Users, Phone, FileText, Star, Download, Key, ShoppingCart, ExternalLink, Crown, Shield, Sparkles } from "lucide-react";

const Pricing = () => {
  const mainProduct = {
    name: "LeadWave Desktop Application",
    subtitle: "Complete WhatsApp Marketing Solution",
    price: "₹8,999",
    originalPrice: "₹12,999",
    savings: "Save ₹4,000",
    includes: "Application + Key Generator",
    description: "One-time purchase with lifetime access to the desktop application and key generation system"
  };

  const subscriptionPlans = [
    {
      name: "Quick Start",
      description: "Perfect for testing",
      price: "₹399",
      duration: "1 Month Access",
      savings: null,
      popular: false
    },
    {
      name: "Growth Accelerator", 
      description: "Build momentum",
      price: "₹1,099",
      duration: "3 Months Access",
      savings: "Save ₹98",
      popular: false
    },
    {
      name: "Business Booster",
      description: "Scale your success",
      price: "₹2,199",
      duration: "6 Months Access",
      savings: "Save ₹195",
      popular: true
    },
    {
      name: "Enterprise Champion",
      description: "Maximum value",
      price: "₹3,999",
      duration: "12 Months Access",
      savings: "Save ₹789",
      popular: false
    }
  ];

  const handleCodeCanyonClick = () => {
    window.open("https://codecanyon.net/item/lead-wave-wa-marketing-desktop-app/59485045", "_blank");
  };

  const handleWhatsAppPurchase = () => {
    const message = "Hi! I'm interested in purchasing LeadWave Desktop Application (₹8,999) with Key Generator. Please provide purchase details.";
    window.open(`https://wa.me/917261902348?text=${encodeURIComponent(message)}`, "_blank");
  };

  const features = [
    { icon: MessageSquare, text: "Unlimited WhatsApp messaging", description: "Send unlimited messages to any WhatsApp number without restrictions" },
    { icon: Zap, text: "Bulk message campaigns", description: "Send mass messages to multiple contacts simultaneously with smart scheduling" },
    { icon: Bot, text: "AI-powered auto-reply", description: "Intelligent automated responses based on message content and context" },
    { icon: Bot, text: "Advanced chatbot builder", description: "Create custom chatbots with conditional logic and branching conversations" },
    { icon: Users, text: "Multi-user collaboration", description: "Team access with role-based permissions and shared contact management" },
    { icon: Phone, text: "Multi-device sync", description: "Access your WhatsApp from multiple devices with real-time synchronization" },
    { icon: FileText, text: "Message templates library", description: "Pre-built templates for common business scenarios and quick responses" },
    { icon: Check, text: "Advanced contact management", description: "Organize contacts with tags, groups, and custom fields for better targeting" }
  ];

  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Product - Desktop Application */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge className="mb-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 px-4 py-2">
              <Crown className="w-4 h-4 mr-2" />
              Premium Desktop Application
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Complete WhatsApp Marketing Solution</h3>
            <p className="text-muted-foreground">One-time purchase, lifetime access</p>
          </div>

          {/* Full Width Stunning Layout */}
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 rounded-3xl blur-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-transparent"></div>
            
            <Card className="relative max-w-7xl mx-auto shadow-2xl border-2 border-primary/20 bg-gradient-to-br from-background via-background to-primary/5 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
              
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Product Info */}
                <div className="p-8 lg:p-12 space-y-8">
                  <div className="space-y-4">
                    <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {mainProduct.name}
                    </CardTitle>
                    <CardDescription className="text-xl text-muted-foreground">
                      {mainProduct.subtitle}
                    </CardDescription>
                  </div>

                  {/* Pricing Display */}
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-4">
                      <span className="text-2xl text-muted-foreground line-through opacity-60">{mainProduct.originalPrice}</span>
                      <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {mainProduct.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-green-500 text-white px-4 py-2 text-base">
                        <Sparkles className="w-4 h-4 mr-2" />
                        {mainProduct.savings}
                      </Badge>
                      <span className="text-lg text-muted-foreground">{mainProduct.includes}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <Button 
                      onClick={handleWhatsAppPurchase}
                      size="lg" 
                      className="w-full bg-green-500 hover:bg-green-600 text-white group text-xl py-6 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                    >
                      <MessageSquare className="w-5 h-5 mr-3" />
                      Purchase via WhatsApp
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <Button 
                      onClick={handleCodeCanyonClick}
                      variant="outline" 
                      size="lg"
                      className="w-full group text-xl py-6 border-2 border-primary/20 hover:border-primary/40 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <ShoppingCart className="w-5 h-5 mr-3" />
                      Buy on CodeCanyon
                      <ExternalLink className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <div className="flex items-center justify-center gap-6 text-base text-muted-foreground pt-2">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span>4.9/5 Rating</span>
                      </div>
                      <span>•</span>
                      <span>300+ Sales</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Features Grid */}
                <div className="bg-gradient-to-br from-muted/30 to-muted/10 p-8 lg:p-12 border-l border-border/20">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-center mb-8">What's Included:</h4>
                    
                    <div className="grid gap-4">
                      {[
                        { icon: Download, text: "Complete Desktop Application", desc: "Full-featured WhatsApp marketing software with all premium features", color: "blue" },
                        { icon: Key, text: "Key Generator System", desc: "Generate unlimited license keys for your customers", color: "purple" },
                        { icon: Shield, text: "Lifetime License", desc: "No recurring fees or subscriptions - pay once, use forever", color: "green" },
                        { icon: Bot, text: "Advanced AI Automation", desc: "AI-powered messaging, auto-replies, and intelligent chatbots", color: "orange" },
                        { icon: Users, text: "Multi-User Access", desc: "Team collaboration with role-based permissions", color: "indigo" },
                        { icon: Phone, text: "Multi-Device Support", desc: "Sync across multiple devices with cloud integration", color: "cyan" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-background/60 border border-border/30 hover:border-primary/20 hover:shadow-md transition-all duration-300 group">
                          <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-900/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <item.icon className={`w-6 h-6 text-${item.color}-500`} />
                          </div>
                          <div className="space-y-1">
                            <span className="font-semibold text-base text-foreground">{item.text}</span>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
                      <div className="flex items-center justify-center gap-8 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">300+</div>
                          <div className="text-muted-foreground">Happy Customers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">4.9★</div>
                          <div className="text-muted-foreground">Average Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">∞</div>
                          <div className="text-muted-foreground">Lifetime Access</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Alternative: Subscription Plans
            </Badge>
            <h3 className="text-2xl font-bold mb-2">Subscription Plans are also available</h3>
            <p className="text-muted-foreground">For those who prefer monthly commitments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptionPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 shadow-card ${
                  plan.popular 
                    ? 'gradient-hero border-2 border-primary/50 scale-105' 
                    : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 gradient-primary text-white border-0">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.duration}</div>
                    {plan.savings && (
                      <Badge variant="secondary" className="text-green-600 bg-green-50 dark:bg-green-900/20">
                        {plan.savings}
                      </Badge>
                    )}
                  </div>
                  
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features List */}
        <Card className="max-w-4xl mx-auto shadow-card border-0 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">All Plans Include</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-background/50 border border-border/50 hover:bg-background/80 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">{feature.text}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                View all features and detailed comparison →
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;