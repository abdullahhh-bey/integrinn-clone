import React from 'react';

const showcaseItems = [
  { 
    image: "https://www.mindinventory.com/blog/wp-content/uploads/2022/08/mobile-app-usage-statistics.webp", 
    position: "top-10 left-4 lg:left-40", 
    size: "w-52 h-40 lg:w-64 lg:h-48", 
    rotation: "-rotate-6" 
  },
  { 
    image: "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg", 
    position: "top-20 right-4 lg:right-40", 
    size: "w-48 h-36 lg:w-56 lg:h-44", 
    rotation: "rotate-6" 
  },
  { 
    image: "https://cdn.pixabay.com/photo/2019/01/31/20/52/web-3967926_1280.jpg", 
    position: "top-[40%] left-2 lg:left-1", 
    size: "w-52 h-44 lg:w-60 lg:h-52", 
    rotation: "rotate-3" 
  },
  { 
    image: "https://cdn.pixabay.com/photo/2025/09/09/08/52/design-9824072_1280.jpg", 
    position: "bottom-10 left-8 lg:left-40", 
    size: "w-56 h-40 lg:w-64 lg:h-48", 
    rotation: "-rotate-3" 
  },
  { 
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    position: "bottom-0 right-5 lg:right-40", 
    size: "w-52 h-40 lg:w-60 lg:h-48", 
    rotation: "rotate-6" 
  },
  { 
    image: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    position: "top-[35%] -translate-y-1/2 right-2 lg:right-6", 
    size: "w-48 h-44 lg:w-56 lg:h-52", 
    rotation: "-rotate-12" 
  },
];

export default function UIShowcase() {
  return (
    <section className="py-14 px-4 md:px-6 relative bg-black min-h-screen flex items-center overflow-hidden">
      <div className="container relative mx-auto">
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="text-center max-w-3xl text-white px-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight">
              Beautiful &
            </h2>
            <h3 
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent mb-6 leading-tight" 
              style={{ backgroundImage: 'linear-gradient(90deg, #007cf0, #00dfd8)' }}
            >
              functional UI
            </h3>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A digital product without proper UX and compelling design has lower chances for success. 
              Our design process are tailored to make your app simple, enchanting and easy to use.
            </p>
          </div>
        </div>

        {/* Floating UI mockups */}
        <div className="relative w-full max-w-7xl mx-auto" style={{ height: '800px' }}>
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.position} ${item.size} ${item.rotation} opacity-0 animate-fade-in group cursor-pointer z-10`}
              style={{ 
                animationDelay: `${index * 0.2}s`, 
                animationFillMode: 'forwards',
                animation: 'fadeIn 0.8s ease-out forwards'
              }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl border border-gray-800 shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-cyan-500/20 hover:shadow-2xl hover:border-cyan-400/50 hover:rotate-0 hover:z-50">
                <img
                  src={item.image}
                  alt={`UI showcase ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}