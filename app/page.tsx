import { Hero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { StatsBar } from "@/components/home/StatsBar";
import { Testimonials } from "@/components/home/Testimonials";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesGrid />
      <StatsBar />
      <Testimonials />
      <CaseStudiesPreview />
      <FinalCTA />
    </>
  );
}
