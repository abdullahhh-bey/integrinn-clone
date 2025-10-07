import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Integrinn transformed our legacy system into a modern, scalable platform. The team's expertise in Workday integration was exceptional.",
    author: "Sarah Johnson",
    role: "CTO at TechCorp",
    rating: 5,
  },
  {
    quote: "Working with Integrinn was a game-changer. They delivered our MVP in record time without compromising on quality.",
    author: "Michael Chen",
    role: "Founder at StartupX",
    rating: 5,
  },
  {
    quote: "The AI solutions they built for us increased our customer satisfaction by 40%. Truly impressive work from start to finish.",
    author: "Emily Rodriguez",
    role: "VP of Operations at Enterprise Inc",
    rating: 5,
  },
  {
    quote: "As a non-technical founder, I was worried about the complexity. Integrinn made the entire process smooth and understandable.",
    author: "David Park",
    role: "CEO at InnovateCo",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 md:px-6 relative">
      <div className="container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            That's what{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              they said
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the companies we've helped transform their digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(193,100%,50%/0.2)] animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <Quote className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
