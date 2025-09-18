import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  MessageSquare, 
  Bot, 
  FileText, 
  Users, 
  Phone,
  ArrowRight,
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Multi-Device Support",
      description: "Connect and manage multiple WhatsApp accounts from a single desktop application with seamless synchronization.",
      highlight: true
    },
    {
      icon: MessageSquare,
      title: "Bulk Messaging",
      description: "Send personalized messages to multiple contacts simultaneously with smart scheduling and delivery optimization.",
      highlight: true
    },
    {
      icon: Bot,
      title: "Chatbot",
      description: "Intelligent automated responses powered by advanced AI to handle customer inquiries 24/7 with human-like interactions.",
      highlight: true
    },
    {
      icon: FileText,
      title: "Message Templates",
      description: "Create and manage reusable message templates for consistent communication."
    },
    {
      icon: Users,
      title: "Contact Management",
      description: "Import, organize, and manage your contacts with advanced filtering and grouping."
    },
    {
      icon: Phone,
      title: "Call Automation",
      description: "Automated call responses and scheduling to streamline your communication workflow."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="inline-flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Powerful Features
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              automate WhatsApp
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to streamline your WhatsApp communication and boost your business productivity with cutting-edge automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 shadow-card ${
                feature.highlight ? 'gradient-hero border border-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-lg mb-4 flex items-center justify-center transition-smooth group-hover:scale-110 ${
                  feature.highlight ? 'gradient-primary' : 'bg-primary/10'
                }`}>
                  <feature.icon className={`w-7 h-7 ${feature.highlight ? 'text-white' : 'text-primary'}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
                {feature.highlight && (
                  <Button variant="ghost" size="sm" className="mt-4 p-0 h-auto text-primary hover:text-primary/80">
                    Learn more
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" className="group">
            Explore All Features
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;