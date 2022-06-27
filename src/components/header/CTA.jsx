import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='alt-btn'>Download Resume</a>
        <a href="#contact" className='btn'>Let's Talk</a>

    </div>
  )
}

export default CTA