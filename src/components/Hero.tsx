import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Using provided Frame image URL from user attachments
const heroBg = "https://cdn.builder.io/api/v1/image/assets%2Fcb8e479c60404215aabbf36ee0d73e89%2Fe179cb12a0aa4eccb15d5ac9e9bbbdd2?format=webp&width=1600";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 min-h-[calc(100vh-64px)]">
          {/* Left: Text */}
          <div className="relative z-10 py-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-primary">Build Smarter ERPs</span>
              <span className="block"><span className="text-primary">with Integrinn</span> <span className="text-foreground">Workday</span></span>
              <span className="block text-foreground">Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              We design ERP systems that simplify workflows, integrate finance and HR, and scale with your business growth.
            </p>

            <Button size="lg" className="bg-primary text-white px-6 py-3 rounded-md shadow-glow font-semibold">
              Get a Quote
            </Button>
          </div>

          {/* Right: Image (50% space) */}
          <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center">
            <div className="w-[70%] h-full flex items-center justify-center">
              <img src={heroBg} alt="banner" className="w-full h-full object-contain object-center" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};
