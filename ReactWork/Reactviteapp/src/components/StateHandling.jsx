import React from 'react'
import { useState } from 'react'

function StateHandling() {
const [counter , setcounter]=useState(20);

function IncreaseCounterValue(){
    setcounter(counter+2);
}

  return (
    <div>
        <h2>counter value ={counter}</h2>
        <button onClick={IncreaseCounterValue}>Increase value</button>
        <button onClick={()=>setcounter(counter-2)}>Decrease counter </button>
    </div>
  )
}

export default StateHandling