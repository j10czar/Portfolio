import React from 'react'
import Resume from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='alt-btn'>Download Resume</a>
        <a href="#contact" className='btn'>Contact Me</a>

    </div>
  )
}

export default CTA