import React, { useRef } from 'react';
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    subTitle: "Project 1 Body Copy Goes Here",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "Project 2",
    subTitle: "Project 2 Body Copy Goes Here",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "Project 3",
    subTitle: "Project 3 Body Copy Goes Here",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "Project 4",
    subTitle: "Project 4 Body Copy Goes Here",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#",
  },
];

export default function Services() {
  const scrollContainerRef = useRef(null);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.project-card').offsetWidth;
      scrollContainerRef.current.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 md:px-6 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16 gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-foreground">We have done </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">good</span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent ms-4">things</span>
            </h2>
          </div>
          <div className="lg:w-1/2 max-w-xl">
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Integrinn helps to cover HIPPA, GDPR and other major
              regulations you might need for building telemedicine app.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              All third-party software will also be compliant. We
              document all process.
            </p>
          </div>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="project-card flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[380px] snap-start"
              >
                <Card className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden h-full transition-all duration-300 hover:border-zinc-700 group">
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    {/* Arrow icon */}
                    <a 
                      href={project.link}
                      className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 z-10"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>

                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full bg-zinc-800/80 text-gray-400 mb-3">
                        {project.category}
                      </span>
                      <CardTitle className="text-2xl font-semibold mb-2 text-white">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500">
                        {project.subTitle}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Button */}
          <Button 
            onClick={scrollNext}
            variant="ghost"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -right-6 bg-white text-black rounded-full w-14 h-14 hidden lg:flex items-center justify-center shadow-2xl hover:bg-gray-100 transition-all duration-300 z-20"
            aria-label="Scroll Next"
          >
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
