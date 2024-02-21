import { useState } from 'react';
//import styling
import './GameGrid.css';
import { customLayout } from './CustomKeyboardLayout';
// import { buttonTheme } from './CustomKeyboardLayout';
//import Components
import Row from '../Row/Row';
//import library
import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css';

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
      <button className='submit'>Guess Word</button>
      {/*to do: Fix keyboard styling to Figma spec */}
      <Keyboard 
        theme="custom-keyboard hg-theme-default"
        layout={customLayout}
        onKeyPress={(button) => console.log(button)}
      />
    </div>
  )
}

export default GameGrid;