import uiMock1 from "@/assets/ui-mock-1.jpg";
import uiMock2 from "@/assets/ui-mock-2.jpg";
import uiMock3 from "@/assets/ui-mock-3.jpg";
import uiMock4 from "@/assets/ui-mock-4.jpg";
import uiMock5 from "@/assets/ui-mock-5.jpg";
import uiMock6 from "@/assets/ui-mock-6.jpg";
import uiMock7 from "@/assets/ui-mock-7.jpg";
import uiMock8 from "@/assets/ui-mock-8.jpg";

const showcaseItems = [
  { image: uiMock1, position: "top-8 left-8", size: "w-48 h-64", rotation: "-rotate-6" },
  { image: uiMock2, position: "top-16 left-1/4", size: "w-56 h-40", rotation: "rotate-3" },
  { image: uiMock3, position: "top-12 right-8", size: "w-52 h-48", rotation: "rotate-6" },
  { image: uiMock4, position: "top-1/2 right-1/4", size: "w-48 h-52", rotation: "-rotate-3" },
  { image: uiMock5, position: "bottom-1/4 left-12", size: "w-44 h-48", rotation: "rotate-6" },
  { image: uiMock6, position: "bottom-16 left-1/3", size: "w-60 h-48", rotation: "-rotate-6" },
  { image: uiMock7, position: "bottom-8 right-1/4", size: "w-56 h-44", rotation: "rotate-3" },
  { image: uiMock8, position: "top-1/2 right-12", size: "w-44 h-44", rotation: "-rotate-12" },
];

export const UIShowcase = () => {
  return (
    <section className="py-32 px-4 md:px-6 relative overflow-hidden bg-background min-h-screen flex items-center">
      <div className="container relative">
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center max-w-2xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
              Beautiful &
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-text bg-clip-text text-transparent mb-6">
              functional UI
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              A digital product without proper UX and compelling design has lower chances for success. Our design process are tailored to make your app simple, enchanting and easy to use.
            </p>
          </div>
        </div>

        {/* Floating UI mockups */}
        <div className="relative w-full max-w-6xl mx-auto" style={{ height: '700px' }}>
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.position} ${item.size} ${item.rotation} opacity-0 animate-fade-in group cursor-pointer`}
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl border border-border/50 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/50 hover:rotate-0 hover:z-30">
                <img
                  src={item.image}
                  alt={`UI showcase ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
