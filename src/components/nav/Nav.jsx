import React from 'react'
import './Nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {TbAppWindow} from 'react-icons/tb'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {useState} from 'react'
import { useScrollPosition } from '../../useScrollPosition'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  const scrollPosition= useScrollPosition()


    if(scrollPosition<100&&activeNav!=='#')
    {
      setActiveNav('#')
    }
    else if(scrollPosition>450&&scrollPosition<1519&&activeNav!=='#about'){
      setActiveNav('#about')
    }
    else if(scrollPosition>1520&&scrollPosition<2391&&activeNav!=='#experience'){
      setActiveNav('#experience')
    }
    else if(scrollPosition>2550&&scrollPosition<3630&&activeNav!=='#portfolio'){
      setActiveNav('#portfolio')
    }
    else if(scrollPosition>3650&&activeNav!=='#contact')
    {
      setActiveNav('#contact')
    }
  
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav=== '#' ? 'active' : ''}><BiHomeAlt/></a> {/* eslint-disable-line */}
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav=== '#about'? 'active' : ''}><BiUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav=== '#experience'? 'active' : ''}><BiBook/></a>
      <a href="#portfoilo" onClick={()=>setActiveNav('#portfolio')} className={activeNav=== '#portfolio'? 'active' : ''}><TbAppWindow/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav=== '#contact'? 'active' : ''}><BiMessageRoundedDetail/></a>
    </nav>
  )
}

export default Nav