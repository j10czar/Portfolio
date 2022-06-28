import React from 'react'
import './Nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {TbAppWindow} from 'react-icons/tb'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {useState} from 'react'
const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav=== '#' ? 'active' : ''}><BiHomeAlt/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav=== '#about' ? 'active' : ''}><BiUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav=== '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#portfoilo" onClick={()=>setActiveNav('#portfolio')} className={activeNav=== '#portfolio' ? 'active' : ''}><TbAppWindow/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active' : ''}><BiMessageRoundedDetail/></a>
    </nav>
  )
}

export default Nav