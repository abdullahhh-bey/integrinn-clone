import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's talk business.{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                But you first.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your project and we'll get back to you with a tailored solution.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <Input
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-card/50 border-border/50 focus:border-primary transition-colors"
              />
            </div>

            <div>
              <Textarea
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-card/50 border-border/50 focus:border-primary transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto bg-gradient-primary hover:opacity-90 transition-all duration-300 text-white font-semibold px-12 shadow-glow hover:shadow-[0_0_80px_hsl(193,100%,50%/0.4)]"
            >
              Send Message <Send className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
