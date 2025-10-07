import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageSquare, Zap } from "lucide-react";

const aiServices = [
  {
    icon: Brain,
    title: "LLM Expert Chatbots",
    description: "Deploy intelligent chatbots powered by large language models for natural customer interactions and automated support.",
  },
  {
    icon: MessageSquare,
    title: "Real-time usage insights",
    description: "Track and analyze AI performance metrics in real-time to optimize responses and improve accuracy continuously.",
  },
  {
    icon: Zap,
    title: "Personalized AI without CHAT GPT",
    description: "Build custom AI solutions tailored to your business needs without dependency on third-party platforms.",
  },
];

export const AIExpertise = () => {
  return (
    <section id="ai" className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      
      <div className="container relative z-10">
        <div className="mb-16 animate-slide-up text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What if you need{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              AI expertise?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Harness the power of artificial intelligence to transform your business operations and customer experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {aiServices.map((service, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 group animate-slide-up hover:shadow-[0_0_30px_hsl(271,81%,56%/0.2)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
