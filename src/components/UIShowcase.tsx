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

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-1 space-y-8">
            <div className="rounded-3xl overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(193,100%,50%/0.3)] group animate-slide-up bg-card/30 backdrop-blur-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={showcase1} 
                  alt="Team collaboration on modern interface" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-3xl overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(193,100%,50%/0.3)] group animate-slide-up bg-card/30 backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={showcase2} 
                  alt="Professional analytics dashboard interface" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(193,100%,50%/0.3)] group animate-slide-up bg-card/30 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={showcase3} 
                  alt="Mobile application design showcase" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
