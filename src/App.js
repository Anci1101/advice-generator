import React, { useState } from 'react';
import './scss/scss--style.js'
import mobileDivider from './images/pattern-divider-mobile.svg'
import iconDice from './images/icon-dice.svg'

function App() {

  const [advice, setAdvices] = useState({})
  const [show, setShow] = useState(false)

  const fetchRandomAdvice = () => {
    fetch('	https://api.adviceslip.com/advice', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      setAdvices(res.slip)
      if(res.error){
        throw(res.error)
      }
      console.log(res.slip.advice, 'response');
      return res
    })
    .catch(error => {
      console.log(error, 'eror');
    })
  }


  const getRandomAdvice = () => {
    setShow(false)
    fetchRandomAdvice()
    setShow(true)
  }
  return (
    
    <div className='wrapper'>
     <div className='quote-box'>
      {show  ? <h5 className='advice-number'>ADVICE #{advice.id}</h5>:  <h5 className='advice-number'>  </h5>}
      {show  ? <p className='advice'>{advice.advice}</p>:  <p className='advice'>LET'S FIND OUT YOUR ADVICE FOR TODAY!</p>}
      <div className='mobile-divider'>
        <img src={mobileDivider} alt="mobile-divider" />
      </div>
      <button onClick={getRandomAdvice} className='btn'><img src={iconDice} alt="icon-dice" /></button>
     </div>
    </div>
  );
}

export default App;
