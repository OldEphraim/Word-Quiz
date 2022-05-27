import React, {useState} from 'react';
import './Card.css';

const Card = ({correct, quiz, options, updateScore, index}) => {
  const [clicked, setClicked] = useState([]);
  const [correctly, setCorrectly] = useState([]);
  const firstHint = quiz[0];
  const secondHint = quiz[1];
  const thirdHint = quiz[2];
  function checkAnswer (option, optionIndex, correctAnswer) {
    const newClicked = [...clicked, option];
    setClicked(newClicked);
    if (optionIndex === correctAnswer) {
      const newCorrectly = [...correctly, option];
      setCorrectly(newCorrectly);
      updateScore();
    }
    const indexes = document.getElementsByClassName(index);
    for (let i = 0; i < indexes.length; i++) {
      indexes[i].disabled = true;
    }
  }
  return (
    <div className="Card">
    <p>{firstHint}</p>
    <p>{secondHint}</p>
    <p>{thirdHint}</p>
    <div className="Answers">
    {options.map((option, optionIndex) => (<div key={optionIndex} className="Answer"><button onClick={() => {checkAnswer(option, optionIndex + 1, correct)}} disabled={clicked.includes(option)} className={index}>{option}</button>
    {correctly.includes(option) && <p className="Correct">Correct!</p>}
    </div>))}
    </div>
    </div>
  )
}

export default Card;
