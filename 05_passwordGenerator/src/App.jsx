import {useCallback, useEffect, useRef, useState} from "react";

function App() {
      const [length, setLength] = useState(8);
      const [nums,setNums] = useState(false);
      const [chars,setChars] = useState(false);
      const [password,setPassword] = useState("");


      // ref hook
    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(()=>{
                let pass = "";
                let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                if(nums) str += "1234567890";
                if(chars) str += "!@#$%^&*=";

                for(let i=1;i<=length;i++){
                    let index = Math.floor(Math.random() * str.length + 1);
                    pass = pass + str.charAt(index);
                }

                setPassword(pass);

      },[length,nums,chars,setPassword])

    const copyToClipBoard = useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,3); // select only first 3 char from input
        window.navigator.clipboard.writeText(password);
    },[password])

    useEffect(()=>{
        passwordGenerator();
    },[length,nums,chars,passwordGenerator])

  return (
     <>
         <div className={"w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 p-1"}>
             <h1 className={"text-white text-center my-3 text-3xl "}>Password Generator </h1>
             <div className={"flex shadow-lg rounded-lg overflow-hidden mb-4"}>
                 <input
                     type="text"
                     placeholder={"Password"}
                     value={password}
                     className={"outline-none w-full py-1 px-2"}
                     ref={passwordRef}
                 />
                 <button
                     className={"bg-blue-500 text-white p-1"}
                     onClick={copyToClipBoard}
                 >Copy</button>
             </div>
             <div className={"flex text-sm gap-x-2 "}>
                 <div className={"flex items-center gap-x-1"}>
                     <input
                         type="range"
                         min={8}
                         max={50}
                         value={length}
                         className={"cursor-pointer"}
                         onChange={(e) => {
                             setLength(e.target.value)
                         }}
                     />
                     <label>Length: {length}</label>
                 </div>
                 <div className={"flex items-center gap-x-1"}>
                     <input
                         type="checkbox"
                         defaultChecked={nums}
                         onChange={() => setNums((prev) => !prev)}
                     />
                     <label>Numbers</label>
                 </div>
                 <div className={"flex items-center gap-x-1"}>
                     <input
                         type="checkbox"
                         defaultChecked={chars}
                         onChange={() => setChars((prev) => !prev)}
                     />
                     <label>Characters</label>
                 </div>
             </div>
         </div>
     </>
  )
}

export default App
