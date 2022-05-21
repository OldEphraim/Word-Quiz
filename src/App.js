import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

import Card from './components/Card/Card.js';
import GameOver from './components/GameOver/GameOver.js';

const App = () => {
const [level, setLevel] = useState("1");
const [welcome, setWelcome] = useState(true);
const [contents, setContents] = useState(null);
const [score, setScore] = useState(0);
const [showGameOver, setShowGameOver] = useState(false);
const getGameplayWords = () => {
  const options = {
    method: 'GET',
    url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
    params: {level: level, area: 'sat'},
    headers: {
      'X-RapidAPI-Host': 'twinword-word-association-quiz.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
  };

  axios.request(options).then(function (response) {
    setContents(response.data);
  }).catch(function (error) {
  	console.error(error);
  });
};
useEffect(() => {
  getGameplayWords();
}, [level])
useEffect(() => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}, [showGameOver])
useEffect(() => {
  document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      setWelcome(false);
    }
  })
})
const updateScore = () => {
  setScore(score + 1);
}
  return (
    <>
    <div className="App">
    <h1>Word Quiz Game</h1>
    {!showGameOver && welcome && <p>Pick a level to play!</p>}
    {!welcome && !showGameOver && <p>Your current score is {score}</p>}
    {!showGameOver && welcome && <select className="LevelMenu" id="LevelMenu" onChange={(e) => setLevel(e.target.value)}>
    <option value={"1"}>Level 1</option>
    <option value={"2"}>Level 2</option>
    <option value={"3"}>Level 3</option>
    <option value={"4"}>Level 4</option>
    <option value={"5"}>Level 5</option>
    <option value={"6"}>Level 6</option>
    <option value={"7"}>Level 7</option>
    <option value={"8"}>Level 8</option>
    <option value={"9"}>Level 9</option>
    <option value={"10"}>Level 10</option>
    </select>}
    {welcome && !showGameOver && <h1>Please choose a level and press Enter to play.</h1>}
    {welcome && !showGameOver && <button className="EndGame" onClick={() => setWelcome(false)} >Enter</button>}
    {showGameOver && <GameOver score={score} />}
    {!welcome && <div className="Row">
    {contents && contents.quizlist.map((question, questionIndex) => (<Card key={questionIndex} index={questionIndex} correct={question.correct} quiz={question.quiz} options={question.option} updateScore={updateScore} />))}
    </div>}
    {!showGameOver && !welcome && <button className="EndGame" onClick={() => setShowGameOver(true)} >Click here to end the game.</button>}
    </div>
    </>
  );
}

export default App;
