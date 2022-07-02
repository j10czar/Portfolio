import React from 'react'
import './Portfolio.css'
import BookTracker from '../../assets/BookTrackerShowcase.png'
import Messaging from '../../assets/Messaging.png'
import TicTac from '../../assets/TicTac.png'
import Monkey from '../../assets/MonkeyShowcase.png'

const Portfolio = () => {
  return (
    <section id='portfoilo' className='overflowFix'>
      <h5>Some Recent Work</h5>
      <h2>My Projects</h2>


      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={BookTracker} alt="Book Tracker" />

          </div>
          <h3>Book Tracker</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/j10czar/BookTracker" className='alt-btn' target={'_blank'}>Github</a> {/* eslint-disable-line */}
            <a href="https://j10czar.github.io/BookTracker/" className='btn' target={'_blank'}>Live Demo</a> {/* eslint-disable-line */}
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={TicTac} alt="Tic Tac Toe" />

          </div>
          <h3>Tic Tac Toe (in progress)</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/j10czar/TicTacToe" className='alt-btn' target={'_blank'}>Github</a> {/* eslint-disable-line */}
            <a href="https://j10czar.github.io/TicTacToe/" className='btn' target={'_blank'}>Live Demo</a> {/* eslint-disable-line */}
          </div>  
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Messaging} alt="Group Messaging" />

          </div>
          <h3>Java Group Messaging Application</h3>
          <div className='portfolio_item-cta'>
              <a href="https://github.com/j10czar/GroupMessagingDemo" className='alt-btn' target={'_blank'}>Github</a> {/* eslint-disable-line */}
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Monkey} alt="Infinite Monkey Theorem Simulator" />

          </div>
          <h3>Infinite Monkey Theorem Simulator</h3>
          <div className='portfolio_item-cta'>
              <a href="https://github.com/j10czar/InfiniteMonkeyTheoremSimulator" className='alt-btn' target={'_blank'}>Github</a> {/* eslint-disable-line */}
              <a href="https://j10czar.github.io/InfiniteMonkeyTheoremSimulator/" className='btn' target={'_blank'}>Live Demo</a> {/* eslint-disable-line */}
          </div>
        </article>
          <div className='soon'>
            <h3>Stay Tuned</h3>
            <h5>Many more projects coming soon.</h5>

          </div>
      </div>

    </section>
  )
}

export default Portfolio