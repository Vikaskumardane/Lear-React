import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  //let Counter = 0;

let [Counter, setCounter] = useState(0);
  
  const addValue = () =>{
    
      setCounter(Counter + 1);
      console.log("value added:", {Counter});
      if(Counter ==10){
        alert("Max reaced")
       return;
      }

  }

  const decValue = () =>{
    Counter = Counter - 1;
    setCounter(Counter);
    console.log("Value decearsed :", {Counter});

  }
  return (
    <>
      <h1>Counter Application !</h1>
      <h2>Counter Value:{Counter}</h2>
      <br />
      <button onClick={addValue}>
        Add Value</button>
      <p></p>
      <button onClick={decValue}>Decearse Value</button>
    </>
  )
}

export default App
