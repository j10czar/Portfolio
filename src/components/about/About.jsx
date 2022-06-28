import React from 'react'
import './About.css'
import me from '../../assets/me.jpg'

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
          <p>I am a 17y/o Computer Science student who likes to wakeboard, code, run track, and play the piano. Im currently learning web development with React and im planning on learning iOS development soon!  </p>
        </div>
      </div>
 
    </section>
  )
}

export default About