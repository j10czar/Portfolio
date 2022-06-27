import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container '>
        <h5>Hi, im</h5>
        <h1>Jason</h1>
        <h5 className='text-light'>Web Developer/CS Student</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='scrolldown-vl'></div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header