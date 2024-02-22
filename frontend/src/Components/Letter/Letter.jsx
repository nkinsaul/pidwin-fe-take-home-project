//import styling
import { useState } from 'react';
import './Letter.css';

const Letter = ({letter, colorState}) => {
  
  return (
    <div className={colorState}>{letter}</div>
  )
}

export default Letter;
