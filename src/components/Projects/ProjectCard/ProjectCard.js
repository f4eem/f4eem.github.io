import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
} from "./ProjectCardElements";

const ExperienceList = [
  {
    company: "Orbion Technologies LLC",
    role: "Application Associate",
    duration: "Oct 2025 – Present",
    img: "/orbion.png", // replace with your image/logo
    description:
      "Working with business application data and operational workflows in Dubai, UAE, to support data accuracy, availability, and system performance. Analyzing application data flows and API responses to improve data retrieval efficiency, assisting third-party system integrations, and maintaining documentation across data workflows and application architecture.",
    tech_stack: ["Data Workflows", "REST APIs", "System Integration", "SQL", "Application Architecture"],
  },
  {
    company: "Caxigo Technologies Pvt. Ltd.",
    role: "Software Developer",
    duration: "Jun 2024 – May 2025",
    img: "https://caxigotechnologies.com/img/logo.png",
    description:
      "Developed and maintained data-driven business applications using MySQL, PHP/CodeIgniter, Node.js, and React.js. Worked with customer, operational, and transactional data across CRM, POS, and money-exchange applications, integrating REST APIs and the Xero API, and implementing data synchronization with Firebase and Node.js. Optimized application performance through code optimization and lazy loading, achieving approximately 30% improvement.",
    tech_stack: ["React.js", "Node.js", "PHP", "CodeIgniter", "MySQL", "Firebase", "REST APIs", "Xero API"],
  },
];

function ExperienceCard() {
  return (
    <>
      {ExperienceList.map((exp, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <img src={exp.img} alt={exp.company} width={200} />
            </CardLeft>
            <CardRight>
              <h4>{exp.company}</h4>
              <p><strong>{exp.role}</strong> | {exp.duration}</p>
              <p>{exp.description}</p>
              <TechCardContainer>
                {exp.tech_stack.map((tech, idx) => (
                  <TechCard key={idx}>{tech}</TechCard>
                ))}
              </TechCardContainer>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default ExperienceCard;