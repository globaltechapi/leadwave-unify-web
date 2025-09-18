import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, MessageSquare, Bot, Users, Phone, FileText } from "lucide-react";

const Pricing = () => {
  const plans = [
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

  const features = [
    { icon: MessageSquare, text: "Unlimited WhatsApp" },
    { icon: Zap, text: "Bulk Messages" },
    { icon: Bot, text: "Auto Reply" },
    { icon: Bot, text: "Chatbot" },
    { icon: Users, text: "Live Chat" },
    { icon: FileText, text: "And Much More" }
  ];

  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Duration-Based{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your commitment level and save more with longer plans
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
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

        {/* Features List */}
        <Card className="max-w-4xl mx-auto shadow-card border-0 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">All Plans Include</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature.text}</span>
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