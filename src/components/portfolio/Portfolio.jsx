import React from 'react'
import './Portfolio.css'
import BookTracker from '../../assets/BookTracker.png'
import Messaging from '../../assets/Messaging.png'
import TicTac from '../../assets/TicTac.png'

const Portfolio = () => {
  return (
    <section id='portfoilo'>
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
          <h3>Tic Tac Toe Game</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/j10czar/TicTacToe" className='alt-btn' target={'_blank'}>Github</a> {/* eslint-disable-line */}
            <a href="https://j10czar.github.io/TicTacToe/" className='btn' target={'_blank'}>Live Demo</a> {/* eslint-disable-line */}
          </div>  
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Messaging} alt="Group Messaging" />

          </div>
          <h3>Local Group Messaging Application</h3>
          <div className='portfolio_item-cta'>
              <a href="https://github.com/j10czar/GroupMessagingDemo" className='alt-btn' target={'_blank'}>Github</a> {/* eslint-disable-line */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio