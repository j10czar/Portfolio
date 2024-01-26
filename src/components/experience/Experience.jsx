import React from 'react'
import './Experience.css'

import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience' className='exFix'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>


      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Adobe Photoshop</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>

        </div>

        {/* Backend */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
            <div className='experience_content'>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermediate</small>
                </div>               
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Intermediate</small>

                </div>
              </article>
            </div>        
        </div>
      </div>
      {/* <div className='extra-accomplishments'>
        <div className='accomplishments'>
          <h3 className='acc_header'>Accomplishments</h3>
          <h4>•High placement in the Lockheed Martin Code Quest competition</h4>
          <br />
          <h4>•Competed in the University of Central Florida’s high school programming tournament </h4>
        </div>  

      </div> */}
      
    </section>
  )
}

export default Experience