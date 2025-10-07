import showcase1 from "@/assets/ui-showcase-1.jpg";
import showcase2 from "@/assets/ui-showcase-2.jpg";
import showcase3 from "@/assets/ui-showcase-3.jpg";

export const UIShowcase = () => {
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

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(193,100%,50%/0.2)] group animate-slide-up">
              <img 
                src={showcase1} 
                alt="Team collaboration" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(193,100%,50%/0.2)] group animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <img 
                src={showcase2} 
                alt="Dashboard interface" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(193,100%,50%/0.2)] group animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src={showcase3} 
                alt="Mobile applications" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
