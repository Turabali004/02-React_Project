import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  let passRef = useRef(null)
  
  let generatePassword = useCallback(() => {

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numAllowed) alphabet += "1234567890";
    if (charAllowed) alphabet += "!@#$%^&*()_+{}()";

    for (let i = 0; i < length; i++) {
      let randomChar = Math.floor(Math.random() * alphabet.length + 1);
      pass += alphabet.charAt(randomChar);
    }
    setPassword(pass);

  }, [length,numAllowed,charAllowed]);

  let copyToClipBoard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [])



  useEffect(() => {
    generatePassword()
  }, [length,numAllowed])



  return (
    <>
      <div className="h-screen w-screen bg-blue-950 flex justify-center ">
        <div className="flex justify-center h-1/3 w-5/12 bg-blue-300 mt-10 rounded-md">
          <div className="w-[80%] p-4 relative">
        <h1 className="font-bold text-4xl text-center text-blue-950 cursor-pointer hover:text-sky-900 hover:-translate-x-1 hover:duration-75 py-4 pb-12 ">Password Generator</h1>
            <input
              type="text"
              className="w-[90%] py-2 rounded-l-lg focus:border-none text-black outline-none px-2"
              value={password}
              ref={passRef}
            />
            <button
              className=" bg-black text-white absolute  right-0 py-2 px-6 rounded-r-lg font-bold
                hover:bg-blue-950  active:bg-blue-950
              "
              onClick={copyToClipBoard}
            >
              CopyPassword
            </button>

            <div className="py-6 flex justify-center gap-2 ">
              <input
                type="range"
                className="cursor-pointer"
                min={8}
                max={100}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <span className="font-bold px-3">{length}</span>

              <input
                type="checkbox"
                className=""
                onChange={() => setNumAllowed((prev) => !prev)}
              />
              <span className="font-bold">Number Allowed</span>
              <input
                type="checkbox"
                className=""
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <span className="font-bold">Character Not Allowed</span>

              {/* <input type="checkbox" className="" />
              <span className="font-bold  ">Char Allowed</span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
