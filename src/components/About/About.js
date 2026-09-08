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
              src="/faheem_formalpic.jpeg"
              alt="developer-profile"
            />
          </ScrollAnimation>

          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Faheem K M</strong>. I'm a <strong>Software
                Developer</strong> with 2 years of hands-on experience working with
              business applications, databases, REST APIs, <strong>CRM/POS systems</strong>,
              and data-driven application workflows. I'm currently based in{" "}
              <strong>Dubai, UAE</strong>, working as an <strong>Application Associate</strong>.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              I'm experienced in <strong>MySQL, API integration, data synchronization,
                application architecture, debugging, and production support</strong>. I've
              worked on business applications for money exchange operations, including{" "}
              <strong>CRM, POS, and accounting integrations</strong> — connecting
              customer, transaction, and operational data across systems.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              I have a strong interest in <strong>Business Data Analytics and Data
                Architecture</strong>, with a foundation in <strong>Python and SQL</strong>,
              and I'm quick to pick up analytics platforms and modern data technologies.
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
