import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Shield, Clock } from "lucide-react";

const CTA = () => {
  const benefits = [
    { icon: Shield, text: "No credit card required" },
    { icon: Clock, text: "2-day free trial" },
    { icon: Star, text: "Cancel anytime" }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="secondary" className="inline-flex items-center gap-2 text-base px-6 py-2">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            Join 300+ Happy Users
          </Badge>
          
          <div className="space-y-6 animate-scale-in">
            <h2 className="text-3xl md:text-6xl font-bold leading-tight">
              Ready to transform{" "}
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                your WhatsApp communication?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join 300+ businesses already using Lead Wave Desktop to
              automate their WhatsApp workflows and boost productivity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="https://getleadwave.in/LeadWave.exe">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="group" asChild>
              <a href="https://wa.me/917261902348?text=Hi! I would like to schedule a demo of Lead Wave.">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center text-muted-foreground animate-scale-in" style={{ animationDelay: '0.5s' }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <benefit.icon className="w-5 h-5 text-primary" />
                <span className="text-base">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;