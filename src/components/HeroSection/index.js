import React, { useState } from "react";
import Video from "../../videos/money.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroContentH1,
  HeroContentP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="/video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroContentH1>Virtual Banking Made Easy & Simple</HeroContentH1>
        <HeroContentP>
          Sign Up for a new account today and receive amazing rewards on next
          payment..
        </HeroContentP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
