import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(15)
  // let counter=15
  const addValue=()=>{
    console.log("clicked",counter);
    // counter = counter +1
    setCounter(counter+1)

  }
  const decreseValue=()=>{
    setCounter(counter -1)
  }
  return (
    <>
     
       <h1>chai aur react</h1>
       <h2>counter value:5{counter}</h2>

       <button
       onClick={addValue}
       >add value</button>
       <br /> 
       <button
       onClick={decreseValue}
       >decrese value</button>
       <p>show{counter}</p>
    </>
  )
}

export default App
