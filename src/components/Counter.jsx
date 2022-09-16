import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [a,setA]=useState("sa")
    const [b,setB]=useState(3)
   // console.log(typeof a);
    //console.log(typeof b);
    const handlePlus =()=>{
      if(count+1<=5){
        setCount(count+1)
      }
    }
    const handleRes =()=>{
      //aqui codigo
      if(count-1>=-3){
        setCount(count-1)
      }
    }
    const reset =()=>{
      setCount(0)
    }
    console.log(count)
  return (
    <div>

        
      <h1>{count}</h1>
      <button onClick={handlePlus}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={handleRes}>-1</button>
     
    </div>
    
  )
}

export default Counter