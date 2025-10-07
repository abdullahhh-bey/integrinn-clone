import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Users } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Transform your SAAS",
    description: "Modernize and scale your SaaS platform with cutting-edge architecture and seamless integrations.",
  },
  {
    icon: TrendingUp,
    title: "Expand your business",
    description: "Accelerate growth with robust systems that scale effortlessly as your business expands globally.",
  },
  {
    icon: Users,
    title: "Empower your team",
    description: "Equip your team with intuitive tools and automated workflows that boost productivity and collaboration.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-4 md:px-6 relative">
      <div className="container">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What can we do{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              for you?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group animate-slide-up hover:shadow-[0_0_30px_hsl(193,100%,50%/0.2)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-secondary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6">
                  {service.description}
                </CardDescription>
                <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
