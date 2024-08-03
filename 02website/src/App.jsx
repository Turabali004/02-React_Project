import { useState } from "react";
import "./App.css";

function App() {





  // real todo example
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState([]);
  const [delIndex, setDelIndex] = useState()


  const getValue = (e) => {
    setVal1(e.target.value);
  };

  const saveValue = () => {
    if (val1 == " ") {
      alert("Please enter a value");
      return;
    } else {
      setVal2([...val2, val1]);
      setVal1(" ");
    }
  };

  const delValue = (e) => {
    console.log("hey");
  }

  const updateValue = (index) => {
    if (val2[index] !== " ") {
      setVal1(val2[index]);

    }

    // val2.map((val, index) => {
    //   console.log(index, val)
    // })
  };


  // practice
  const [val01, setVal01] = useState()
  const [val02, setVal02] = useState([])

  const changeVal = (e) => {
    setVal01(e.target.value)
  }

  const runFunce = () => {
    setVal02([...val02, {val01, isCompleted : true,}])
    console.log(val02);
  }


  const checkEvent = (e) => {
    console.log(e.reactName);

  }


  return (
    // <>
    //   <h1>This is React</h1>
    //   <br />
    //   <br />
    //   <br />
    //   <input
    //     type="text"
    //     onChange={getValue}
    //     value={val1}
    //     className="border border-black"
    //   />
    //   <button onClick={saveValue}>Click me</button>
    //   <p>
    //     {val2.map((val, index) => {
    //       return (
    //         <div key={index} className=" w-[200px] flex justify-between">
    //           <p>
    //             {index}.. {val}
    //           </p>
    //           <div className="flex gap-6">
    //             <button
    //               onClick={delValue}
    //             >
    //               del
    //             </button>
    //             <button
    //               onClick={() => {
    //                 val2.filter((_, index) => {
    //                   updateValue(index);
    //                 });
    //               }}
    //             >
    //               update
    //             </button>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </p>
    // </>


    // practice
    <>

      <input type="text" value={val01} onChange={changeVal} className="border border-black px-2 py-2 bg-blue-300 border-none focus:border-none"/>
      <button onClick={runFunce} className="px-4 py-2 bg-green-800">Click Me</button>

      <p>{val02.map((val, index) => {
        return( 
          <div key={index}>
            <h1 className={val.isCompleted ? 'line-through' : ' ' } >{val.val01}</h1>

          </div>
        )
      })}</p>


      <input type="checkbox" onChange={checkEvent}/>
    
    </>
  );
}

export default App;
