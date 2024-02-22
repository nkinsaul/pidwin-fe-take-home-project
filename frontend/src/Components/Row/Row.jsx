import "./Row.css";
//import Components
import Letter from "../Letter/Letter";

const Row = ({ word, wordCorrect, id, rowIndex }) => {
  const wordArray = word.split("");

  const getClassForLetterin = (letter, index) => {
    if (wordCorrect[index] === "x") {
      return "incorrect";
    } else if (wordCorrect[index] === "1") {
      return "correct-spot";
    } else if (wordCorrect[index] === "0") {
      return "wrong-spot";
    } else {
      return "letter";
    }
  };

  return (
    <div className="row">
      {wordArray.map((letter, index) => {
        return (
          <Letter
            letter={letter}
            key={index}
            colorState={getClassForLetterin(letter, index)}
          />
        );
      })}
    </div>
  );
};

export default Row;

//foreach loop that looks at both arrays and renders letter colorstate based on data

/* word.split("").forEach((letter, index) => {
    wordCorrect.forEach((value, index) => {

    })
})
*/
