import CTA from "@/components/cta";
import DoggyGallery from "@/components/doggy-gallary";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Features2 } from "@/components/features2";
import Features3 from "@/components/features3";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logos-cloud";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features2 />
      <DoggyGallery />
      <Features3 />
      <LogoCloud />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}
