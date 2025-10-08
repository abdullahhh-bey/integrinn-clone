import { useState } from "react";
import { Card } from "@/components/ui/card";
import showcase1 from "@/assets/ui-showcase-1.jpg";
import showcase2 from "@/assets/ui-showcase-2.jpg";
import showcase3 from "@/assets/ui-showcase-3.jpg";
import { Sparkles, Zap, Layers } from "lucide-react";

const showcaseItems = [
  {
    image: showcase1,
    title: "Intuitive Design",
    description: "User-centered interfaces that feel natural",
    icon: Sparkles,
  },
  {
    image: showcase2,
    title: "Powerful Analytics",
    description: "Data visualization that drives decisions",
    icon: Zap,
  },
  {
    image: showcase3,
    title: "Responsive Layout",
    description: "Perfect on every device and screen size",
    icon: Layers,
  },
];

export const UIShowcase = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Beautiful &{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              functional UI
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting intuitive interfaces that users love, combining aesthetic excellence with seamless functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {showcaseItems.map((item, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 bg-card/30 backdrop-blur-sm cursor-pointer transition-all duration-500 animate-slide-up ${
                activeCard === index ? "translate-x-4" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                setActiveCard(index);
                setTimeout(() => setActiveCard(null), 300);
              }}
            >
              {/* Image container with overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Icon badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2 bg-gradient-text bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 shadow-[inset_0_0_40px_hsl(193,100%,50%/0.2)]" />
              </div>

              {/* Border glow effect */}
              <div className="absolute -inset-[1px] bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
