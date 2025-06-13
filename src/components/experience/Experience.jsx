// src/components/experience/Experience.jsx
import React from "react";
import "./Experience.css";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiAdobephotoshop,
  SiAmazonaws,
  SiPython,
  SiCplusplus,
  SiDocker,
  SiNodedotjs,
  SiMysql,
  SiJava,
  SiFlask,
  SiKubernetes,
  SiLinux,
  SiRust,
  SiGithubactions,
} from "react-icons/si";

const Tile = ({ icon: Icon, name }) => (
  <div className="skill_tile">
    <Icon className="skill_icon" />
    <p>{name}</p>
  </div>
);

const Experience = () => (
  <section id="experience">
    <h5>The Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience_container">
      {/* Front-end column */}
      <div className="experience_column">
        <h3>Frontend Development</h3>
        <div className="skill_grid">
          <Tile icon={SiJavascript} name="JavaScript" />
          <Tile icon={SiReact} name="React" />
          <Tile icon={SiAdobephotoshop} name="Photoshop" />
          <Tile icon={SiFigma} name="Figma" />
          <Tile icon={SiTailwindcss} name="TailwindCSS" />
          <Tile icon={SiTypescript} name="TypeScript" />
        </div>
      </div>

      {/* Back-end column */}
      <div className="experience_column">
        <h3>Backend Development</h3>
        <div className="skill_grid">
          <Tile icon={SiAmazonaws} name="AWS" />
          <Tile icon={SiPython} name="Python" />
          <Tile icon={SiCplusplus} name="C++" />
          <Tile icon={SiJava} name="Java" />
          <Tile icon={SiDocker} name="Docker" />
          <Tile icon={SiNodedotjs} name="Node.js" />
          <Tile icon={SiMysql} name="MySQL" />
          <Tile icon={SiFlask} name="Flask" />
          <Tile icon={SiKubernetes} name="Kubernetes" />
          <Tile icon={SiLinux} name="Linux" />
          <Tile icon={SiRust} name="Rust" />
          <Tile icon={SiGithubactions} name="CI/CD" />
        </div>
      </div>
    </div>

    <h5 className="more_skills">More skills can be found on my resume</h5>
  </section>
);

export default Experience;
