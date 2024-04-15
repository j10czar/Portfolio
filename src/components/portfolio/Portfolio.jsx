import React from 'react'
import './Portfolio.css'
import BookTracker from '../../assets/BookTracker.png'
import Messaging from '../../assets/Messaging.png'
import TicTac from '../../assets/tictactoe.png'
import Monkey from '../../assets/monkey.png'
import Nowe from '../../assets/nowe.png'
import AiText from '../../assets/aitext.png'
import gatormacros from '../../assets/gatormacros.png'
import acm from '../../assets/acm.png'

const Portfolio = () => {
  return (
    <section id='portfoilo' className='overflowFix'>
      <h5>Some Recent Work</h5>
      <h2>My Projects</h2>


      <div className="container portfolio_container">
      <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={acm} alt="UF Association for Computing Machinery Overhaul" className='portfolio-img' />

          </div>
          <h3>UF ACM Website Overhaul</h3>
          <p id='gm'>(Spring 2024)</p>
          <div className='portfolio_item-cta'>
             <a href="https://github.com/a1exanderklein/ACM-Website" className='alt-btn' target={'_blank'}>Github</a> {/* eslint-disable-line */}
              <a href="https://uf-acm.com/" className='btn' target={'_blank'}>Website</a> {/* eslint-disable-line */}
          </div>
        </article>
      <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={gatormacros} alt="GatorMacros" className='portfolio-img' />

          </div>
          <h3>GatorMacros</h3>
          <p id='gm'>(Spring 2024)</p>
          <div className='portfolio_item-cta'>
              <a href="https://gatormacros.com/" className='btn' target={'_blank'}>Website</a> {/* eslint-disable-line */}
          </div>
        </article>
      <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Nowe} alt="Nowe" className='portfolio-img' />

          </div>
          <h3>Nowe - A Student Organization App</h3>
          <p>(Fall 2023)</p>
          <div className='portfolio_item-cta'>
              <a href="https://j10czar.github.io/NoweForStudents/" className='btn' target={'_blank'}>Website</a> {/* eslint-disable-line */}
          </div>
        </article>
      <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={AiText} alt="Group Messaging" className='portfolio-img' />

          </div>
          <h3>Python Simulated AI Text Generator</h3>
          <p>(Spring 2023)</p>
          <div className='portfolio_item-cta'>
              <a href="https://github.com/j10czar/AI-Text-Generator" className='alt-btn' target={'_blank'}>Github</a> {/* eslint-disable-line */}
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Monkey} alt="Infinite Monkey Theorem Simulator" className='portfolio-img' />

          </div>
          <h3>Infinite Monkey Theorem Simulator</h3>
          <p>(Summer 2022)</p>
          <div className='portfolio_item-cta'>
              <a href="https://github.com/j10czar/InfiniteMonkeyTheoremSimulator" className='alt-btn' target={'_blank'}>Github</a> {/* eslint-disable-line */}
              <a href="https://j10czar.github.io/InfiniteMonkeyTheoremSimulator/" className='btn' target={'_blank'}>Live Demo</a> {/* eslint-disable-line */}
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={BookTracker} alt="Book Tracker" className='portfolio-img'/>

          </div>
          <h3>Book Tracker</h3>
          <p>(Spring 2022)</p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/j10czar/BookTracker" className='alt-btn' target={'_blank'}>Github</a> {/* eslint-disable-line */}
            <a href="https://j10czar.github.io/BookTracker/" className='btn' target={'_blank'}>Live Demo</a> {/* eslint-disable-line */}
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={TicTac} alt="Tic Tac Toe" className='portfolio-img'/>

          </div>
          <h3>Tic Tac Toe</h3>
          <p>(Spring 2022)</p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/j10czar/TicTacToe" className='alt-btn' target={'_blank'}>Github</a> {/* eslint-disable-line */}
            <a href="https://j10czar.github.io/TicTacToe/" className='btn' target={'_blank'}>Live Demo</a> {/* eslint-disable-line */}
          </div>  
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Messaging} alt="Group Messaging" className='portfolio-img' />

          </div>
          <h3>Java Group Messaging Application</h3>
          <p>(Winter 2022)</p>
          <div className='portfolio_item-cta'>
              <a href="https://github.com/j10czar/GroupMessagingDemo" className='alt-btn' target={'_blank'}>Github</a> {/* eslint-disable-line */}
          </div>
        </article>
        
          
      </div>

      {/* <div className='soon'>
            <h3>Stay Tuned</h3>
            <h5>Many more projects coming soon.</h5>

      </div> */}

    </section>
  )
}

export default Portfolio