import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import WhyCaratOne from "@/components/WhyCaratOne";
import ModuleGrid from "@/components/ModuleGrid";
import DeepDiveSales from "@/components/DeepDiveSales";
import Timeline from "@/components/Timeline";
import DeepDiveAI from "@/components/DeepDiveAI";
import DeepDiveInventory from "@/components/DeepDiveInventory";
import Testimonials from "@/components/Testimonials";
import Growth from "@/components/Growth";
import Security from "@/components/Security";
import TechStack from "@/components/TechStack";
import Outcomes from "@/components/Outcomes";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <WhyCaratOne />
        <ModuleGrid />
        <DeepDiveSales />
        <Timeline />
        <DeepDiveAI />
        <DeepDiveInventory />
        <Testimonials />
        <Growth />
        <Security />
        <TechStack />
        <Outcomes />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
