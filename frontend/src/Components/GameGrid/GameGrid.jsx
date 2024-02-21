import { useState } from 'react';
//import styling
import './GameGrid.css';
import { customLayout } from './CustomKeyboardLayout';
//import { buttonTheme } from './CustomKeyboardLayout';
//import Components
import Row from '../Row/Row';
//import library
import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css';
//import 
import { letters } from '../../letters';

const GameGrid = () => {

  //Set guesses with empty strings
  const [guesses, setGuesses] = useState([
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
    "     "
  ])
  const [solutionFound, setSolutionFound] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);
  const [rowIndex, setRowIndex] = useState(0);

  //funtions
  const handleKeyInput = (event) => {
    if (solutionFound)
    return

    if (letterIndex < 5 && letters.includes(event))
    typeLetter(event)

    if (event === "{bksp}" && letterIndex > 0) {
      handleBackSpace()
    }

    if (event === "{enter}") {
      //handle enter
    }
  }
  
  const typeLetter = (letter) => {
    const newGuess = [...guesses]
    newGuess[rowIndex] = replaceLetter(newGuess[rowIndex], letterIndex, letter)
    setGuesses(newGuess)
    setLetterIndex(letterIndex + 1)
  }

  const replaceLetter = (string, index, newLetter) => {
    return `${string.slice(0, index)}${newLetter}${string.slice(index+1)}`
  }

  const deleteLetter = (string, index) => {
    return string.slice(0, index-1) + " " + string.slice(index)
  }

  const handleBackSpace = () => {
    const newGuess = [...guesses]
    newGuess[rowIndex] = deleteLetter(newGuess[rowIndex], letterIndex)
    setGuesses(newGuess)
    setLetterIndex(letterIndex - 1)
  }

  //component return
  return (
    <div className='game-grid'>
      {guesses.map((guess, index) => {
        return <Row key={index} word={guess}/>
      })}
      <button 
        className='submit'
        // onClick={ TO DO: Submit guess and advance rowIndex }
        >Guess Word</button>
      {/*to do: Fix keyboard styling to Figma spec */}
      <Keyboard 
        theme="custom-keyboard hg-theme-default"
        layout={customLayout}
        onKeyPress={handleKeyInput}
      />
    </div>
  )
}

export default GameGrid;