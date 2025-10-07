import { Building2, Cpu, GraduationCap, Heart, Scale, ShoppingBag } from "lucide-react";

const industries = [
  { icon: Heart, name: "Health Care", description: "HIPAA-compliant solutions for healthcare providers" },
  { icon: ShoppingBag, name: "Retail", description: "Omnichannel retail management systems" },
  { icon: GraduationCap, name: "Education", description: "Student information and learning management" },
  { icon: Building2, name: "Real Estate", description: "Property management and CRM solutions" },
  { icon: Scale, name: "Legal", description: "Case management and billing systems" },
  { icon: Cpu, name: "Technology", description: "Custom solutions for tech companies" },
];

export const Industries = () => {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Industries{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                we work with
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Delivering specialized solutions across diverse sectors with deep domain expertise and industry-specific best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_20px_hsl(193,100%,50%/0.2)] animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
