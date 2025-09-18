import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Flame, Clock, ArrowRight } from "lucide-react";

const LimitedOffer = () => {
  const features = [
    "Unlimited WhatsApp accounts",
    "Bulk messaging & automation", 
    "Chatbot & Templates",
    "5-language support with RTL"
  ];

  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge className="inline-flex items-center gap-2 bg-red-500 text-white border-0 text-base px-6 py-2 animate-glow">
              <Flame className="w-5 h-5" />
              LIMITED TIME OFFER
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Launch Special!
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Get LeadWave at an unbeatable price
            </p>
          </div>

          <Card className="relative overflow-hidden shadow-glow border-0 animate-scale-in">
            <div className="absolute inset-0 gradient-primary opacity-5" />
            
            <CardHeader className="text-center pb-6 relative z-10">
              <div className="space-y-4">
                <Badge className="bg-red-500 text-white text-2xl px-8 py-3 border-0 animate-glow">
                  50% OFF
                </Badge>
                
                <CardTitle className="text-xl text-muted-foreground">
                  1 Year License
                </CardTitle>
                
                <div className="flex items-center justify-center gap-4">
                  <span className="text-3xl text-muted-foreground line-through">₹3,999</span>
                  <span className="text-5xl font-bold text-primary">₹1,999</span>
                </div>
                
                <Badge className="bg-green-500 text-white text-lg px-6 py-2 border-0">
                  Save ₹2,000 instantly!
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8 relative z-10">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">What you get:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center space-y-6">
                <Button variant="success" size="xl" className="group w-full sm:w-auto text-lg px-12">
                  🚀 Claim Offer Now - ₹1,999
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  Maybe later
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-sm text-red-600 dark:text-red-400">
                  <Clock className="w-4 h-4" />
                  <span>⏰ Limited time offer • While stocks last</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;