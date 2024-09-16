import { useState } from 'react'
import './App.css'

function App() {

    let [counter,setCounter] = useState(0);

    const addValue = ()=>{
        if(counter < 20){
            // setCounter(counter + 1)
            // setCounter(counter + 1)
            // setCounter(counter + 1)

            // setCounter return the previous value of variable
            setCounter((prevCounter) => prevCounter + 1);
            setCounter((prevCounter) => prevCounter + 1);
            setCounter((prevCounter) => prevCounter + 1);
        }
    }

    const subValue = ()=>{
        if(counter > 0){
            setCounter(counter - 1)
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
