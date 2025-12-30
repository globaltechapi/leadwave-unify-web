import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Wrench, Plus, Rocket, CheckCircle, Zap } from "lucide-react";

const VersionHighlights = () => {
  const enhanced = [
    "Revamped Dashboard UI for a smoother experience",
    "Support Button with official company information",
    "Removed unnecessary device socket reconnection reloads",
    "Device recognition enabled across all modules",
    "Label Export in Group Grabber (Experimental)",
    "Improved Number Filtering accuracy"
  ];

  const fixed = [
    "Fixed Contact Group Name Editing issue",
    "Resolved Campaign Pause issue"
  ];

  const added = [
    "Live Chat Module with basic CRM features",
    "Cloud-Based Licensing System for enhanced security",
    "Device restrictions during license generation",
    "Option to disable licenses when required"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 px-6 py-2 text-base">
            <Rocket className="w-4 h-4 mr-2" />
            Latest Release
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            What's New in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Version 3.0.0
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've packed this release with powerful new features, improvements, and fixes to supercharge your WhatsApp marketing workflow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Enhanced Section */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Enhanced</h3>
                  <p className="text-sm text-muted-foreground">{enhanced.length} improvements</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {enhanced.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Fixed Section */}
          <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Fixed</h3>
                  <p className="text-sm text-muted-foreground">{fixed.length} bug fixes</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {fixed.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Extra visual for fixed section since it has fewer items */}
              <div className="mt-8 p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                <p className="text-sm text-muted-foreground text-center">
                  ✅ All critical issues resolved
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Added Section */}
          <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Plus className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Added</h3>
                  <p className="text-sm text-muted-foreground">{added.length} new features</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {added.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Plus className="w-3 h-3 text-accent-foreground" />
                    </div>
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-muted/50 px-6 py-3 rounded-full text-muted-foreground">
            <Rocket className="w-5 h-5 text-primary" />
            <span>Experience the new Lead Wave 3.0.0 today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersionHighlights;