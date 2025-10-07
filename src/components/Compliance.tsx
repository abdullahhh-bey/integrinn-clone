import { Shield, Lock, FileCheck, Eye, Database, Cloud, Key, Server } from "lucide-react";

const complianceItems = [
  { icon: Shield, label: "SOC 2" },
  { icon: Lock, label: "GDPR" },
  { icon: FileCheck, label: "HIPAA" },
  { icon: Eye, label: "ISO 27001" },
  { icon: Database, label: "PCI DSS" },
  { icon: Cloud, label: "FedRAMP" },
  { icon: Key, label: "CCPA" },
  { icon: Server, label: "NIST" },
];

export const Compliance = () => {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Compliance
            </span>{" "}
            covered
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade security and compliance across all major standards and regulations.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto h-[500px] flex items-center justify-center">
          {/* Center circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow animate-pulse-glow">
              <Shield className="w-24 h-24 text-white" />
            </div>
          </div>

          {/* Orbiting compliance icons */}
          {complianceItems.map((item, index) => {
            const angle = (index * 360) / complianceItems.length;
            const radius = 220;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="w-20 h-20 rounded-xl bg-card border border-border/50 hover:border-primary/50 flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:shadow-[0_0_20px_hsl(193,100%,50%/0.3)] group cursor-pointer">
                  <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
