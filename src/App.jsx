import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import BGvideo from './assets/BGvid2.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';

//npm run deploy


const App = () => {
  AOS.init({duration:500});



  return (
    <>
      <video className='video' loop muted autoPlay playsInline >
        <source src={BGvideo} type='video/mp4'/>
      </video>
      <Header/>
      <Nav />
      <div data-aos="fade-up"
     data-aos-duration="500">
        <About/>

      </div>
      <div data-aos="fade-up"
     data-aos-duration="500">
        <Experience/>
      </div>
      <div data-aos="fade-up"
     data-aos-duration="500">
        <Portfolio/>
      </div>

      <div className='ios-overflow'> </div>

      <div data-aos="fade-up"
     data-aos-duration="500">
        <Contact/>
      </div>
      
      <Footer/>

    </>
  )
}

export default App