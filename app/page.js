import Button from "@/components/button";
import Container from "@/components/container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/Hero";
import { Logo } from "@/components/Icons/logo";
import { buttonicon } from "@/components/Icons/Buttonicon";
import Clients from "@/components/clients";
import HeroImage from "@/components/Hero-image";
import Animation from "@/components/animation";

export default function HomePage() {
  return (
    <div>
      <Container className="py-[6.4rem]">
        <Hero>
          
          <Animation />
          <HeroTitle className="animate-fade-in [animation-delay:200ms] opacity-0 translate-y-[-1rem]"> Innovative Thinking Turning  <br className="hidden md:block" /> Ideas Into Reality</HeroTitle>
          <HeroSubtitle className="animate-fade-in [animation-delay:400ms] opacity-0 translate-y-[-1rem] mt-8">Fuel your tech passion<br />Explore the world of science and tech with<br />
          <span className="font-semibold">BOST IIT Ropar</span>
          </HeroSubtitle>
          
          <HeroImage />
        </Hero>
      </Container>
      <Container>
        <Clients />
      </Container>
    </div>
  );
}