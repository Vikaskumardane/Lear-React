import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  // LIST ALL THE PARAMETERS REQUIRED FOR THE PASSWD GENERATOR
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //THIS FUNCTION IS USED FOR PASSWD GENERATION USING USECALLBACK HOOK

  //useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*_-=+/*+";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

    const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select(); // For client understanding

      window.navigator.clipboard.writeText(password)
    },
    [password])
    useEffect(()=>{
      passwordGenerator()
    }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-2 my-8 bg-violet-600">
        <h1 className="rounded-xl text-4xl text-white mb-4 text-center">
          Passwd Generator !
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-9 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3  rounded-xl py-2 "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-slate-900 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipboard}>
            Copy
          </button>
         </div>

          <div className="flex text-sm gap-x-2 text-xl">
            <div className="flex items-center gap-x-1">
              <input type="range"
              min={6}
              max={32}
              value={length}
              className="cursor-pointer " 
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label >Length:{length}</label>
          </div>


          <div className="flex items-center gap-x-1">
          <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className="cursor-pointer " 
              onChange={()=>{setNumberAllowed((prev) => !prev)}}
              />
              <label htmlFor="numberInput">Numbers</label>
          </div>


          <div className="flex items-center gap-x-1">
          <input type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              className="cursor-pointer " 
              onChange={()=>{setCharAllowed((prev) => !prev)}}
              />
              <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
