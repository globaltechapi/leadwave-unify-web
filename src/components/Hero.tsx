import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-app.jpg";
import { ArrowRight, Play, Star, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-scale-in">
            <div className="space-y-2">
              <Badge variant="secondary" className="inline-flex items-center gap-2 text-sm font-medium">
                <Zap className="w-4 h-4" />
                New: Multi-Account Management
              </Badge>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Lead Wave{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  WhatsApp Desktop
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                Transform Your Business Communication
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Automate messages, and manage contacts with AI-powered intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="https://getleadwave.in/LeadWave.exe">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="group" asChild>
                <a href="#features">
                  <Play className="mr-2 h-5 w-5" />
                  View Features
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>2-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <span>•</span>
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Lead Wave WhatsApp Desktop Application Loading Screen"
                className="w-full h-auto animate-float rounded-xl"
                style={{ animationDelay: '1s' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-6 rounded-xl shadow-card animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="text-2xl font-bold text-primary">300+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white dark:bg-card p-6 rounded-xl shadow-card animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-2xl font-bold text-secondary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;