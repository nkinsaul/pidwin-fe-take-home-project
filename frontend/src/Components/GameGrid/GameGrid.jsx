//import styling
import { useState } from 'react';
import './GameGrid.css';
import Row from '../Row/Row';

const GameGrid = () => {

  //Set guesses with default guess matrix
  const [guesses, setGuesses] = useState([
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
    "     "
  ])

  return (
    <div className='game-grid'>
      {guesses.map((guess, index) => {
        return <Row key={index} word={guess}/>
      })}
    </div>
  )
}

export default GameGrid;