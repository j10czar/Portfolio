import React from 'react'
import './Footer.css'
import {SiGithub} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Jason</a>{/* eslint-disable-line */}

      <ul className='permalinks'>
        <li><a href="#">Home</a></li> {/* eslint-disable-line */}
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfoilo">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer_socials">
        <a href="https://github.com/j10czar/Portfolio"><SiGithub/></a>
      </div>

      <div className='footer_copyright'><small>&copy; 2022 Jason Tenczar. All rights reserved</small></div>
    </footer>
  )
}

export default Footer