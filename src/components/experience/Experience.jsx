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
                <small className='text-light'>Intermediate</small>
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
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>TailwindCSS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Beginner</small>
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
                  <h4>Amazon AWS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>               
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Beginner</small>
                </div>               
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>C++</h4>
                  <small className='text-light'>Intermediate</small>
                </div>               
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Expert</small>

                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Docker</h4>
                  <small className='text-light'>Beginner</small>

                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Node.js</h4>
                  <small className='text-light'>Intermediate</small>

                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Beginner</small>

                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Flask</h4>
                  <small className='text-light'>Intermediate</small>

                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>scikit-learn</h4>
                  <small className='text-light'>Intermediate</small>

                </div>
              </article>
            </div>        
        </div>
      </div>
      <h5 className='more-skills'>More skills can be found on my resume</h5>
    
      
    </section>
  )
}

export default Experience