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
          <p>Hello, I'm Jason, a freshman at the University of Florida studying computer science with a minor in business administration.
             I have a deep passion for coding and the innovative ways technology can transform businesses. I'm also proficient in web design,
              which enhances my ability to create impactful digital solutions. As I continue my education, I'm particularly excited about exploring artificial intelligence
               and its applications in real-world scenarios. This interest is guiding my academic and professional journey as I seek to blend technology and business in meaningful ways.</p>
        </div>
      </div>
 
    </section>
  )
}

export default About