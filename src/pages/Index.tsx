import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CoreExpertise } from "@/components/CoreExpertise";
import  Services  from "../components/Services"
import { Industries } from "@/components/Industries";
import { AIExpertise } from "@/components/AIExpertise";
import  UIShowcase from "@/components/UIShowcase";
import { NonTechFounder } from "@/components/NonTechFounder";
import { Compliance } from "@/components/Compliance";
import { WhyIntegrinn } from "@/components/WhyIntegrinn";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CoreExpertise />
      <Services />
      <Industries />
      <AIExpertise />
      <UIShowcase />
      <NonTechFounder />
      <Compliance />
      <WhyIntegrinn />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
