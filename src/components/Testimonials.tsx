import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Director",
      company: "TechCorp",
      initials: "SM",
      content: "Lead Wave has transformed our customer communication. We can now handle 10x more inquiries with the same team size. The chatbot is incredibly smart!",
      rating: 5
    },
    {
      name: "James Davis",
      role: "CEO",
      company: "Growth Solutions",
      initials: "JD",
      content: "The bulk messaging feature saved us countless hours. We can now reach our entire customer base with personalized messages in minutes, not hours.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Founder",
      company: "Digital Agency Pro",
      initials: "LR",
      content: "Multi-device support is a game-changer. I can manage all my business WhatsApp accounts from one place. Highly recommended for any business owner.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="inline-flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            Trusted by thousands of businesses
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            See what our customers say about{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lead Wave Desktop
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 shadow-card relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-lg leading-relaxed mb-6 text-foreground">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 gradient-primary">
                    <AvatarFallback className="bg-transparent text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-lg font-semibold text-primary animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            🚀 Join 300+ Happy Users
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;