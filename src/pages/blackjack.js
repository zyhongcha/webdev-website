import React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"

import { IoLogoGithub } from "react-icons/io"

function Blackjack() {
    
    return (
    <div className="blackjack-app">
      <h1 className="title">Blackjack</h1>


      <div id="app">
      {/* <Helmet>
        <script src={withPrefix('app.js')} type="text/javascript" defer/>
    </Helmet> */}

      <div className="playingCards faceImages">
        <ul className="dealer-hand"></ul>
        <p>Dealer: <span className="dealer-points"></span></p>
        <div className="player">
          <ul className="hand player-hand"></ul>
          <p>You: <span className="player-points"></span></p>
          <div className="player-control">
            <button className="hit">Hit</button>
            <button className="stand">Stand</button>
            <button className="restart">New Game</button>
          </div>
          <p className="game-result"></p>
        </div>
      </div>
      <div className="score">
        <p>Your Score: <span className="player-score"></span></p>
        <p>Dealer Score: <span className="dealer-score"></span></p>
      </div>
    </div>

    
      <footer>
        <a
          className="project-source"
          href="https://github.com/zyhongcha/webdev-website/tree/master/src/pages"
          target="_blank"
          rel="noopener noreferrer"
        >
          see behind the scenes on
          <IoLogoGithub />
        </a>
      </footer>
    </div>
  )
}

export default Blackjack
