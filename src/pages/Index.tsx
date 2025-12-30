import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VersionHighlights from "@/components/VersionHighlights";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import Pricing from "@/components/Pricing";
import DemoSection from "@/components/DemoSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <VersionHighlights />
        <div id="features">
          <Features />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="video">
          <VideoSection />
        </div>
        <div id="demo">
          <DemoSection />
        </div>
        <CTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
