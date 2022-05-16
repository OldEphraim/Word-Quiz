import React from 'react';

import './GameOver.css';

const GameOver = ({score}) => {
  if (score === 10) {
    return (
      <div className="popup">
      <h2>Congratulations, you won!</h2>
      <h4>You achieved a perfect score of 10 points out of 10.</h4>
      <h4>If you enjoyed this game, give me a call at (440) 523-9475 or shoot me an email at a8garber@wustl.edu.</h4>
      <h4>Reload the page if you would like to play again.</h4>
      </div>
    )
  } else if (score !== 10) {
    return (
      <div className="popup">
      <h2>Congratulations, you finished the game!</h2>
      <h4>You achieved a score of {score} points out of 10.</h4>
      <h4>If you enjoyed this game, give me a call at (440) 523-9475 or shoot me an email at a8garber@wustl.edu</h4>
      <h4>Reload the page if you would like to play again.</h4>
      </div>
    )
  }
}

export default GameOver;
