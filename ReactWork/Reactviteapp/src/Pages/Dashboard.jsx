import React, { useEffect, useState } from 'react'

function Dashboard() {
  const [counter,setcounter]=useState(10);
  const[pointer,setpointer]=useState(100);
  useEffect(()=>{
    console.log(pointer);
    console.log(counter);

  },[counter,pointer])
  
  return (
    <div>
      <h2>counter Value = {counter}</h2>
      <h2>pointer value = {pointer}</h2>
      <button onClick={()=>setcounter(counter+10)}>counter</button>
      <button onClick={()=>setpointer(pointer-10)}>pointer</button>
    </div>
  )
}

export default Dashboard