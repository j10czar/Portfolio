import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/j10czar" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials