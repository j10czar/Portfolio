import React from 'react'
import Resume from '../../assets/jasontenczar.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a className='btn linkedin' href="https://www.linkedin.com/in/jasontenczar/">Connect</a>
      <a className='alt-btn' href={Resume}>Download Resume</a>
      

    </div>
  )
}

export default CTA