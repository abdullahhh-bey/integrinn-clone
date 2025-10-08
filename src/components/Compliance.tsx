import { Shield, Lock, FileCheck, Eye, Database, Cloud, Key, Server } from "lucide-react";

const complianceItems = [
  { icon: FileCheck, label: "HIPAA" },
  { icon: Lock, label: "GDPR" },
  { icon: Shield, label: "Clutch top rated" },
  { icon: Cloud, label: "AWS certified" },
  { icon: Database, label: "HL7" },
  { icon: Server, label: "Behance" },
  { icon: Eye, label: "Awwwards" },
  { icon: Key, label: "Good Firms" },
];

export const Compliance = () => {
  return (
    <section className="py-32 px-4 md:px-6 relative overflow-hidden bg-background">
      <div className="container relative z-10">
        <div className="relative max-w-5xl mx-auto min-h-[500px] flex items-center justify-center">
          {/* Center text */}
          <div className="text-center z-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
              Compliance
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-text bg-clip-text text-transparent">
              is covered
            </h3>
            <p className="text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
              Integrinn helps to cover HIPAA, GDPR and other major regulations you might need for building themendous app. All third-party software will also be compliant, we assure all process.
            </p>
          </div>

          {/* Orbiting compliance badges */}
          {complianceItems.map((item, index) => {
            const angle = (index * 360) / complianceItems.length;
            const radius = 280;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div className="group relative">
                  <div className="w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(193,100%,50%/0.3)] cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[10px] font-medium text-foreground text-center px-1">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
