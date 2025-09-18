import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle, Clock, Lightbulb, ArrowRight, X } from "lucide-react";
import videoThumbnail from "@/assets/video-thumbnail.png";
import { useState } from "react";

const VideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const benefits = [
    {
      icon: CheckCircle,
      title: "Step-by-Step Guide",
      description: "Complete walkthrough from installation to advanced features"
    },
    {
      icon: Clock,
      title: "Quick Setup",
      description: "Get started in minutes with our easy setup process"
    },
    {
      icon: Lightbulb,
      title: "Pro Tips",
      description: "Learn advanced techniques to maximize your results"
    }
  ];

  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Watch.Learn.Done{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Simply.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See LeadWave in action! Watch our comprehensive tutorial and discover how easy it is to automate your WhatsApp business communication.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <div className="relative animate-scale-in">
            <Card className="overflow-hidden shadow-glow border-0">
              <CardContent className="p-0">
                {!isVideoPlaying ? (
                  <div 
                    className="relative aspect-video group cursor-pointer"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <img 
                      src={videoThumbnail} 
                      alt="LeadWave Features Overview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/-IawA-meopM?autoplay=1"
                      title="LeadWave Tutorial"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button
                      onClick={() => setIsVideoPlaying(false)}
                      className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div className="space-y-8 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 group animate-scale-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
            
            <div className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Download LeadWave now and start automating your WhatsApp business communication
              </p>
              <Button variant="hero" size="lg" className="group">
                Download LeadWave Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;