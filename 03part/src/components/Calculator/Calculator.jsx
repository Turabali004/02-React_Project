import { useState } from 'react';

function Calculator() {
    const [value, setValue] = useState("");
  return (
    <div>
      
    <>
      <div className="h-screen w-screen flex justify-center items-center flex-col bg-black">
        <div className="h-[730px] w-[340px]  text-3xl relative overflow-hidden rounded-3xl bg-[#101923] text-white">
          <h1 className="bg-white text-black text-lg font-bold w-[100%] absolute top-0 text-center ">
            Calculate Value
          </h1>

          <div className="mt-10 px-3">{value}</div>

          {/* <div className="font-semibold text-4xl py-3 px-4">total</div> */}

          <div className="w-[100%] h-[45%] bg-[#162332] text-center absolute bottom-0">
            <div className="flex justify-evenly gap-2 my-4">
              <input
                type="text"
                className="w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg cursor-pointer read-only:selection: bg-blue-700"
                value="CL"
                onClick={() => setValue("")}
                readOnly
              />
              <input
                type="text"
                className="w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg cursor-pointer bg-blue-700"
                value="CT"
                onClick={() => setValue(value.slice(0, -1))}
                readOnly
              />
              <input
                type="text"
                className="w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-blue-700"
                value="%"
                readOnly
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="text"
                className="w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-blue-700"
                value="*"
                readOnly
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>

            <div className="flex justify-evenly gap-2 my-4">
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-[#101923]"
                value="7"
                readOnly
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-[#101923]"
                value="8"
                readOnly
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-[#101923]"
                value="9"
                readOnly
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-blue-700"
                value="-"
                readOnly
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>

            <div className="flex justify-evenly gap-2 my-4">
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-[#101923]"
                value="6"
                readOnly
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-[#101923]"
                value="5"
                readOnly
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-[#101923]"
                value="4"
                readOnly
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-blue-700"
                value="+"
                readOnly
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>

            <div className="flex justify-center flex-wrap gap-8">
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-[#101923]"
                value="3"
                readOnly
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-[#101923]"
                value="2"
                readOnly
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-[#101923]"
                value="1"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-blue-700"
                value="="
                readOnly
                // onClick={(e) => setValue(value + e.target.value)}
                onClick={() => setValue(eval(value))}
              />

              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-[#101923]"
                value="00"
                readOnly
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-[#101923]"
                value="0"
                readOnly
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-[#101923]"
                value="."
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="text"
                className="cursor-pointer w-[50px] h-[45px] border-none focus:outline-none text-white text-center rounded-lg bg-blue-700"
                value="="
                readOnly
                onClick={() => setValue(eval(value))}
              />
            </div>
          </div>
        </div>
      </div>
    </>
    </div>
  )
}

export default Calculator
