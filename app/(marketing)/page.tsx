import Gallary from "@/components/gallary";
import { FAQ } from "@/components/faq";
import { Features2 } from "@/components/features2";
import Features3 from "@/components/features3";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logos-cloud";
import { Menu } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <section id="gallery">
        <Gallary />
      </section>

      <section id="partners">
        <LogoCloud />
      </section>

      <section id="menu">
        <Menu />
      </section>

      <section id="services">
        <Features2 />
      </section>

      <section id="about">
        <Features3 />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faq">
        <FAQ />
      </section>
    </div>
  );
}
