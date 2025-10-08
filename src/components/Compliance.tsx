import { Shield, Lock, FileCheck, Eye, Database, Cloud, Key, Server } from "lucide-react";

const complianceItems = [
  { icon: Shield, label: "SOC 2", description: "Security and availability controls" },
  { icon: Lock, label: "GDPR", description: "EU data protection compliance" },
  { icon: FileCheck, label: "HIPAA", description: "Healthcare data security" },
  { icon: Eye, label: "ISO 27001", description: "Information security management" },
  { icon: Database, label: "PCI DSS", description: "Payment card data security" },
  { icon: Cloud, label: "FedRAMP", description: "Federal cloud security" },
  { icon: Key, label: "CCPA", description: "California privacy rights" },
  { icon: Server, label: "NIST", description: "Cybersecurity framework" },
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
            Enterprise-grade security and compliance across all major standards and regulations. Your data is protected with industry-leading certifications.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[600px] flex items-center justify-center">
          {/* Center circle with detailed info */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-56 h-56 rounded-full bg-gradient-primary flex flex-col items-center justify-center shadow-glow animate-pulse-glow">
                <Shield className="w-24 h-24 text-white mb-3" />
                <p className="text-white font-semibold text-lg">Secure</p>
                <p className="text-white/80 text-sm">& Compliant</p>
              </div>
              {/* Orbital rings */}
              <div className="absolute inset-0 -m-8 border-2 border-primary/20 rounded-full" />
              <div className="absolute inset-0 -m-16 border border-primary/10 rounded-full" />
            </div>
          </div>

          {/* Orbiting compliance icons */}
          {complianceItems.map((item, index) => {
            const angle = (index * 360) / complianceItems.length;
            const radius = 250;
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
                <div className="group relative">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border-2 border-primary/30 hover:border-primary/70 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_40px_hsl(193,100%,50%/0.4)] hover:scale-110 cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <item.icon className="w-6 h-6 text-primary group-hover:scale-125 transition-transform" />
                    </div>
                    <span className="text-xs font-bold text-foreground">{item.label}</span>
                  </div>
                  
                  {/* Enhanced Tooltip with better visibility */}
                  <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-48 p-3 bg-card/98 backdrop-blur-lg border-2 border-primary/50 rounded-xl shadow-[0_8px_30px_hsl(193,100%,50%/0.3)] opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50">
                    <div className="text-center">
                      <p className="text-xs font-semibold text-primary mb-1">{item.label}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                    {/* Tooltip arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-primary/50" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional compliance info */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-sm text-muted-foreground">
            Regular third-party audits • Continuous monitoring • 99.9% uptime SLA
          </p>
        </div>
      </div>
    </section>
  );
};
