import './Row.css';
//import Components
import Letter from '../Letter/Letter';

const Row = ({ word }) => {
  return (
    <div className='row'>
      {word.split("").map((letter, index) => {
        return <Letter letter={letter} key={index}/>
      })}
    </div>
  )
}

export default Row;
