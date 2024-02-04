import Button from "@/components/button";
import Container from "@/components/container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/Hero";
import { Logo } from "@/components/Icons/logo";
import { buttonicon } from "@/components/Icons/Buttonicon";
import Clients from "@/components/clients";
import HeroImage from "@/components/Hero-image";
import Animation from "@/components/animation";
import Testimonials from "@/components/Testimonials/testimonials";
import ImageSlider from "@/components/ImageSlider/imageSlider";

export default function HomePage() {
  return (
    <div>
      <Container className="py-[6.4rem]">
        <Hero>
          <Animation />
          <HeroTitle className="animate-fade-in [animation-delay:200ms] opacity-0 translate-y-[-1rem]"> Innovative Thinking Turning  <br className="hidden md:block" /> Ideas Into Reality</HeroTitle>
          <HeroSubtitle className="animate-fade-in [animation-delay:400ms] opacity-0 translate-y-[-1rem] mt-8">Fuel your tech passion<br />Explore the world of science and tech with<br />
            <span className="font-semibold md:text-[35px] text-[20px]">BOST IIT Ropar</span>
          </HeroSubtitle>
        </Hero>
      </Container>
      <Container>

        <section className="mt-3">
          <h2 className="text-[39px] leading-[54px] font-[600] text-gradient text-center">
            Some Glimpes of BOST
          </h2>
          <p className="text-[18px] leading-[30px] font-[400] text-primary-text  mt-[18px] text-center">
          Embark on a Journey: A Captivating Glimpse into the Allure of BOST. Discover the Unseen, Experience the Extraordinary, and Immerse Yourself in the Vibrancy of BOST's Unique Charms.
          </p>
          <ImageSlider />
        </section>

        <section className="mt-10">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-[39px] leading-[54px] font-[600] text-gradient text-center">
              What People Says
            </h2>
            <p className="text-[18px] leading-[30px] font-[400] text-primary-text  mt-[18px] text-center">
              At BOST, it's not just education; it's an experience that speaks for itself. Students and visionaries alike echo the sentiment – BOST is where potential turns into achievement. The buzz is real, the excitement palpable. Discover what people say about us and step into a world where success has a voice – yours.
            </p>
          </div>
          <Testimonials />
        </section>


      </Container>
    </div>
  );
}