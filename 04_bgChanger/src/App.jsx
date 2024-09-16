import {useState} from "react";

function App() {
      const [color,setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200"
           style={{background:color}}>
        <div className="fixed flex flex-wrap inset-x0 px-2 justify-center bottom-12 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-3 py-2">
            <button onClick={()=>setColor("red")} className="outline-none px-3 py-2 rounded-full shadow-lg text-white" style={{background:'red'}}>Red</button>
            <button onClick={()=>setColor("Green")} className="outline-none px-3 py-2 rounded-full shadow-lg text-white" style={{background:'green'}}>Green</button>
            <button onClick={()=>setColor("Violet")} className="outline-none px-3 py-2 rounded-full shadow-lg text-white" style={{background:'violet'}}>Violet</button>
            <button onClick={()=>setColor("Pink")} className="outline-none px-3 py-2 rounded-full shadow-lg text-white" style={{background:'pink'}}>Pink</button>
            <button onClick={()=>setColor("cyan")} className="outline-none px-3 py-2 rounded-full shadow-lg text-white" style={{background:'cyan'}}>Cyan</button>
            <button onClick={()=>setColor("LightCoral")} className="outline-none px-3 py-2 rounded-full shadow-lg text-white" style={{background:'LightCoral'}}>LightCoral</button>
            <button onClick={()=>setColor("Purple")} className="outline-none px-3 py-2 rounded-full shadow-lg text-white" style={{background:'Purple'}}>Purple</button>
            <button onClick={()=>setColor("Black")} className="outline-none px-3 py-2 rounded-full shadow-lg text-white" style={{background:'Black'}}>Black</button>
            <button onClick={()=>setColor("White")} className="outline-none px-3 py-2 rounded-full text-black shadow-lg" style={{background:'White'}}>White</button>
            <button onClick={()=>setColor("Yellow")} className="outline-none px-3 py-2 rounded-full text-black shadow-lg" style={{background:'Yellow'}}>Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
