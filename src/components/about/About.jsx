import React from 'react'
import './About.css'
import me from '../../assets/me.jpeg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className="about__me">
          <div className='about__me-image'><img src={me} alt="About Image" className='imgadj' /></div> {/* eslint-disable-line */}
          
        </div>

        <div className='about__content'>
          <p>Hi i'm Jason, a freshman at the University of Florida studying information systems and pursuing a minor in computer science. Im very passionate about coding and business technology and I am currently learning Swift and web development using React. I plan on pursuing a certificate in AI.</p>
        </div>
      </div>
 
    </section>
  )
}

export default About