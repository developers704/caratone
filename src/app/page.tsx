import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ModuleGrid from "@/components/ModuleGrid";
import DeepDiveSales from "@/components/DeepDiveSales";
import DeepDiveAI from "@/components/DeepDiveAI";
import DeepDiveInventory from "@/components/DeepDiveInventory";
import Security from "@/components/Security";
import TechStack from "@/components/TechStack";
import Outcomes from "@/components/Outcomes";
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
        <ModuleGrid />
        <DeepDiveSales />
        <DeepDiveAI />
        <DeepDiveInventory />
        <Security />
        <TechStack />
        <Outcomes />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
