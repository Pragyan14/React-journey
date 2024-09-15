import { useState } from 'react'
import './App.css'

function App() {

    let [counter,setCounter] = useState(0);

    const addValue = ()=>{
        if(counter < 20){
            counter++;
            setCounter(counter)
        }
    }

    const subValue = ()=>{
        if(counter > 0){
            counter--;
            setCounter(counter)
        }
    }

  return (
      <>
          <h1>COUNTER</h1>
          <h2>Counter Value: {counter}</h2>
          <p>This is counter: {counter}</p>

          <button onClick={addValue}>+</button>
          <span> </span>
          <button onClick={subValue}>-</button>
      </>
  )
}

export default App
