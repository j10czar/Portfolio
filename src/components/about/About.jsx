import React from "react";
import "./About.css";
import me from "../../assets/me.jpeg";
import integrisLogo from "../../assets/integris.png"; // update path as needed
import disneyLogo from "../../assets/disney.png"; // update path as needed
import acmLogo from "../../assets/ufacm.png"; // update path as needed

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about__top-row">
          <div className="about__me">
            <div className="about__me-image">
              <img src={me} alt="About Image" className="imgadj" />
            </div>
          </div>

          <div className="about__content">
            <p className="about__yap">
              Hello, I’m Jason, a student at the University of Florida studying
              computer science. I have a deep passion for AI and the innovative
              ways technology can transform businesses. As a full-stack
              developer, I’m proficient in both web design and backend
              technologies such as AWS, which enhances my ability to create
              impactful digital solutions. I previously was a Software
              Engineering Intern at Integris Group, where I gained valuable
              hands-on experience in both frontend and backend AI development.
              As I continue my education, I’m particularly excited about
              exploring artificial intelligence and its applications in
              real-world scenarios. This interest is guiding my academic and
              professional journey as I seek to blend technology and business in
              meaningful ways.
            </p>
            <div className="about__companies">
              <div className="about__company-card">
                <img
                  src={disneyLogo}
                  alt="Disney"
                  className="company-logo"
                />
                <div>
                  <h3>Disney</h3>
                  <h4 className="company-role">
                    Site Reliability Engineer Intern
                  </h4>
  
                </div>
              </div>
              <div className="about__company-card">
                <img
                  src={integrisLogo}
                  alt="Integris Group"
                  className="company-logo"
                />
                <div>
                  <h3>Integris Group</h3>
                  <h4 className="company-role">Software Engineering Intern</h4>
                </div>
              </div>
              <div className="about__company-card">
                <img
                  src={acmLogo}
                  alt="UF ACM"
                  className="company-logo"
                />
                <div>
                  <h3>UF ACM</h3>
                  <h4 className="company-role">Lead Software Engineer</h4>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
