import React from "react";
import { Button } from "@/components/ui/button";

const items = [
  {
    title: "Develop an MVP",
    description: "We have released dozens of MVPs and full-scale products that now have millions of users worldwide.",
    img: "https://cdn.builder.io/api/v1/image/assets%2Fcb8e479c60404215aabbf36ee0d73e89%2Fdc3a182a6fe849f4b6d362aa863ae22e?format=webp&width=600",
  },
  {
    title: "Create a design",
    description: "We specialize in data-rich platforms, always going UX-first and delivering polished visual systems.",
    img: "https://cdn.builder.io/api/v1/image/assets%2Fcb8e479c60404215aabbf36ee0d73e89%2F3d0b04f6a3014791bee1b650df5ea8ff?format=webp&width=600",
  },
  {
    title: "Expand your team",
    description: "We hire only the top 1% of the recruitment funnel to offer you the best talent for long-term growth.",
    img: "https://cdn.builder.io/api/v1/image/assets%2Fcb8e479c60404215aabbf36ee0d73e89%2F72ce90769cb1476cb3897b43598162de?format=webp&width=600",
  },
];

export default function WhatCanWeDo() {
  return (
    <section className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What can we do <span className="text-primary">for you?</span>
            </h2>
          </div>
          <div className="text-muted-foreground">
            <p>
              Integrinn is a product-oriented team. We create apps that achieve your business goals & hit the mark.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-xl bg-card/50 border border-border/50 p-6 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <img src={item.img} alt="" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Button className="bg-primary text-white px-6 py-3 rounded-md">Get a Quote</Button>
        </div>
      </div>
    </section>
  );
}
