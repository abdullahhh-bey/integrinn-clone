import { Star } from "lucide-react";

const stats = [
  {
    value: "$170M",
    label: "Valuation Impact",
    description: "Combined valuation of startups we've helped build",
  },
  {
    value: "Top 1%",
    label: "Elite Developers",
    description: "Our team ranks in the top percentile globally",
  },
  {
    value: "4.9/5.0",
    label: "Client Rating",
    description: "Average satisfaction score across all projects",
    showStars: true,
  },
];

export const WhyIntegrinn = () => {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Integrinn
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven track record of delivering exceptional results for ambitious companies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(193,100%,50%/0.2)] animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                  {stat.value}
                </div>
                {stat.showStars && (
                  <div className="flex justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
