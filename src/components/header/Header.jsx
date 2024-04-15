import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import {useState} from 'react'
import { useScrollPosition } from '../../useScrollPosition'
import {IoIosArrowDown} from 'react-icons/io'

const Header = () => {


  //0,600

  const [opac,setOpac] = useState('100%')

  const scrollPosition= useScrollPosition()

  const convertScroll = () =>{
    let n = Math.round((100-scrollPosition/4))
    
    
    return n>0 ? n+'%' : 0+'%'

  }




  if(scrollPosition<500&&convertScroll()!==opac)
  {
    setOpac(convertScroll())
  }
    



  
  return (
    <header>
      <div className='container header__container'>
        <h5>Hi, im</h5>
        <h1>Jason</h1>
        <h5 className='text-light'>CS Student at the University of Florida</h5>
        
        <CTA/>
        <HeaderSocials/> 
        <div className='scrolldown-s' style={{opacity: opac}}><h5>Scroll Down</h5>
          <IoIosArrowDown className='down_arrow'/>
        </div>

        

      </div>
    </header>
  )
}

export default Header