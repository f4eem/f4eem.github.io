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
    company: "Caxigo Technologies Pvt. Ltd.",
    role: "Associate Software Developer",
    duration: "Jun 2024 – May 2025",
    img: "https://caxigotechnologies.com/img/logo.png", // replace with your image/logo
    description:
      "Worked on building MERN and PHP (CodeIgniter) web applications, along with React Native mobile apps. Contributed to CRM and POS software development, optimized performance, and integrated REST APIs.",
    tech_stack: ["React.js", "React Native", "Node.js", "Express", "MongoDB", "PHP", "CodeIgniter", "MySQL"],
  },
  {
    company: "Ether Infotech",
    role: "Frontend Developer Intern",
    duration: "Jun 2023 – May 2024",
    img: "https://etherinfotech.com/wp-content/uploads/2025/08/ether-logo.webp", 
    description:
      "Developed web applications using React.js with a focus on responsive design and performance optimization. Assisted in building React Native mobile features and collaborated in Agile development cycles.",
    tech_stack: ["React.js", "Redux", "React Native", "JavaScript", "HTML5", "CSS3"],
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
