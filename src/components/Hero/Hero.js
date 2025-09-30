import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={[
                  "Hi, I'm Faheem.",
                  () => setShowSubtitle(true),
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    800,
                    "A Full-Stack Developer.",
                    1200,
                    "Specialized in MERN Stack.",
                    1200,
                    "Experienced in React Native.",
                    1200,
                    "Skilled with PHP & CodeIgniter.",
                    1200,
                    "Currently learning Next.js & TypeScript.",
                    1200,
                    "A problem solver at heart.",
                    1200,
                    "An innovative thinker.",
                    1200,
                    "Passionate about building modern web & mobile apps.",
                    500,
                    () => setShowScrollDown(true),
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
          </HeroLeft>

          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image src="/faheem_casualpic.png" alt="developer-profile" />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>

        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="experience" id="scrollDown">
              <ScrollLink>
                Scroll down
                <img src="/scroll-down.svg" alt="scroll-down" />
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </main>

  );
}

export default Hero;
