import { useEffect, useState } from 'react';
//import styling
import './GameGrid.css';
import { customLayout } from './CustomKeyboardLayout';
import { buttonTheme } from './CustomKeyboardLayout';
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
  const [buttonActive, setButtonActive] = useState('submit');
  const [isDisabled, setIsDisabled] = useState(true);

  //funtions
  const handleKeyInput = (event) => {
    if (solutionFound)
    return

    if (letterIndex < 5 && letters.includes(event)) {
      typeLetter(event)
    }

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

  const handleSubmit = () => {
    console.log('submit')
  }

  useEffect (() => {
    if (letterIndex === 5) {
      setButtonActive('active-button');
      setIsDisabled(false);
    } else {
      setButtonActive('submit');
      setIsDisabled(true);
    }
  },[letterIndex])

  //component return
  return (
    <div className='game-grid'>
      {guesses.map((guess, index) => {
        return <Row key={index} word={guess}/>
      })}
      <button 
        disabled={isDisabled}
        className={buttonActive}
        onClick={handleSubmit}
        >Guess Word</button>
      <Keyboard 
        theme="custom-keyboard hg-theme-default"
        className=''
        layout={customLayout}
        onKeyPress={handleKeyInput}
        physicalKeyboardHighlight={true}
        physicalKeyboardHighlightBgColor='#3A3A3C'
        buttonTheme={
          [
            {class: 'button-theme',
              buttons: 'Q W E R T Y U I O P A S D F G H J K L Z X C V B N M {bksp} '},
            {class: 'enter-theme button-theme',
              buttons: '{enter}'
            }
          ]
        }
        display={{"{bksp}":"⌫", "{enter}":"ENTER"}}
      />
    </div>
  )
}

export default GameGrid;