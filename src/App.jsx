/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';

function App() {

  function handleClick() {
    alert('button clicked');
  }
  const handleClick2 = () => {
    alert('button 2 clicked');
  }
  const addToFive = (num) => {

    alert(num + 5);

  }


  return (
    <>



      <h3>React Core Concepts 2</h3>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {
        { alert('third click ') }
      }}>Click3</button>
      {/* to call function with parameter in jsx you have to wrap that function in another another anonymous function else it wont work */}
      <button onClick={() => { addToFive(10) }}>Four</button>

    </>
  )
}

export default App
