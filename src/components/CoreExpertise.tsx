import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Layers, Workflow } from "lucide-react";

const expertiseItems = [
  {
    icon: Code2,
    title: "Integrinn Solutions",
    description: "Custom-built integrations that seamlessly connect your Workday environment with enterprise systems for optimized data flow.",
  },
  {
    icon: Layers,
    title: "Agile Development",
    description: "Rapid, iterative development cycles that deliver working solutions faster while maintaining flexibility to adapt to changing needs.",
  },
  {
    icon: Workflow,
    title: "Custom Software Development",
    description: "Tailored software solutions designed specifically for your business processes, built with scalability and maintainability in mind.",
  },
];

export const CoreExpertise = () => {
  return (
    <section className="py-24 px-4 md:px-6 relative">
      <div className="container">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Integrinn Core{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {expertiseItems.map((item, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(193,100%,50%/0.2)] group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
