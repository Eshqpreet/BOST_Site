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
import classNames from "classnames";
import { StarsIllustration } from "@/components/Icons/stars";
import TeamList from "@/components/Team/TeamList";
import ClubsList from "@/components/Clubs/ClubsList";
import Teammain from "@/components/sections/team_main";
import Reps from "@/components/sections/reps";
import Secretary from "@/components/sections/secretary";

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

        <section className="mt-5">
          <h2 className="text-[30px] leading-[54px] font-[600] text-gradient text-center">
            Some Glimpes of BOST
          </h2>
          {/* <p className="text-[18px] leading-[30px] font-[400] text-primary-text  mt-[18px] text-center">
            Embark on a Journey: A Captivating Glimpse into the Allure of BOST.<br className="hidden md:block" /> Discover the Unseen, Experience the Extraordinary, and Immerse Yourself in the Vibrancy of BOST's Unique Charms.
          </p> */}
          <ImageSlider />
        </section>

        {/* <section className="mt-[10rem]">
          <div className="text-center">
            <h2 className="text-3xl mb-4 md:mb-7 md:text-6xl">
              What People Say
            </h2>

            <p className='text-primary-text mb-12 text-lg md:text-xl max-w-[68rem] mx-auto'>
              At BOST, it's not just education; it's an experience that speaks for itself. Students and visionaries alike echo the sentiment – BOST is where potential turns into achievement. The buzz is real, the excitement palpable. Discover what people say about us and step into a world where success has a voice – yours.</p>
          </div>
          <Testimonials />
        </section> */}
        <div className={classNames("h-[60rem] overflow-hidden mb-[-12.8rem] mt-[-1.8rem] relative mask-radial-faded pointer-index-none z-[-1]",
          "before:bg-radial-faded [--color:#7877C6] before:absolute before:inset-0 before:opacity-[0.4]",
          "after:absolute after:h-[142%] after:bg-background after:rounded-[50%] after:border-[rgba(120,_119,_198,_0.4)] after:border-t after:top-1/2 after:-left-1/2 after:w-[200%]"
        )}>
          <div className="mr-[20px]">
            <StarsIllustration />
          </div>
        </div>
        {/* <div className="relative z-[5] mt-[-55px]">
          <TeamList />
        </div> */}
        <ClubsList />


      </Container>
      <div className="my-[25.2rem]">
        <Teammain />
      </div>
      <div className="my-[25.2rem]">
      <Reps/>
      </div>
      <Secretary/>
      
    </div>
  );
}