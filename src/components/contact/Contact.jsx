import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fapmlre', 'template_5ttli9b', form.current, 'J0XYEDOhMiHwvnPri')
      e.target.reset()
    };
  return (
    <div id='fix'>
    <section id='contact'>

        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>


      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>jasontenczar@gmail.com</h5>
            <a href="mailto:jasontenczar@gmail.com" className='sendEmail'>Send me an email</a>


          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='sumbit' className='btn weird-btn'>Send Message</button>
        </form>
        
      </div>
    </section>
    </div>
  )
}

export default Contact