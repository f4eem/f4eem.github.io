import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="/man-svgrepo-com.svg"
              alt="developer-profile"
            />
          </ScrollAnimation>

          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Faheem K M</strong>. I’m a passionate
              Full-Stack Developer based in Dubai, UAE. Over the past year, I’ve
              worked on building <strong>scalable web applications with the MERN
                stack</strong> and <strong>cross-platform mobile apps with React
                  Native</strong>. I also bring experience in <strong>PHP (CodeIgniter)</strong>,
              which adds versatility to my development background.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              My journey in technology began with a strong interest in solving
              real-world problems through code. Since then, I’ve gained hands-on
              experience delivering production applications, working on projects
              like currency exchange platforms, CRM tools, and POS systems. These
              projects helped me strengthen my skills in both frontend and backend
              development, while also improving my teamwork and problem-solving
              abilities.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              I’m currently expanding my expertise in <strong>Next.js,
                TypeScript, Redux, and Tailwind CSS</strong> to push my development
              skills further. I enjoy working collaboratively, building intuitive
              user interfaces, and creating solutions that balance performance with
              great user experience.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>

  );
}

export default About;
