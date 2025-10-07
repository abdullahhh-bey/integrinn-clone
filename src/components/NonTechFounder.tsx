import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, DollarSign, Rocket } from "lucide-react";

const features = [
  { icon: Rocket, title: "Quick to launch", description: "Go from idea to production in weeks, not months" },
  { icon: DollarSign, title: "Cost effective", description: "Transparent pricing with no hidden costs" },
  { icon: Clock, title: "Fast iterations", description: "Rapid development cycles for quick pivots" },
  { icon: CheckCircle2, title: "Proven process", description: "Battle-tested methodologies that deliver results" },
];

export const NonTechFounder = () => {
  return (
    <section className="py-24 px-4 md:px-6 relative">
      <div className="container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            If you are a{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              non-tech founder
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We speak your language and translate your vision into reality, no technical knowledge required.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_30px_hsl(193,100%,50%/0.2)] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
