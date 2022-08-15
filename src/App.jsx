import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import moment from "moment"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import 'animate.css';

function App() {
  const time = new Date()
  const [expression, setepression] = useState("0");
  return (
    <div className='bg-cyan-200 flex justify-center items-center absolute w-full h-screen'>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
      <div className="rounded-md overflow-hidden">

        <div className='text-xl p-2 m-3 font-seimifold border-solid' ></div>
        <div className="calculator-shadow p-5 relative">
          <div className="flex flex-row gap-3 ">
            <div className="flex justify-center items-center gap-40">
              <div className="text-s">{moment(time).format("HH.mm")}</div>
              
                <Icon icon="ant-design:line-outlined" width="40" height="40" />
                
              <div className="flex flex-row items-center gap-3">
                <Icon icon="ant-design:signal-filled" className="mt-1 " />
                <Icon icon="akar-icons:wifi" className="mt-1 " />
                <Icon icon="carbon:battery-full" className="mt-1"></Icon>
              </div>
            </div>
          </div>
          <div className=" ">
            <input value={expression}
              disabled
              className="w-full text-right input-shadow text-3xl mt-8 p-7
            "/>
          </div>
          <div className="grid gap-4 grid-cols-4 text-2xl mt-10">
            <div  onClick={() => setepression("0")} className="key-shadow w-full h-full aspect-square flex items-center justify-center">AC</div>


            <div onClick={() => setepression(expression.slice(0, -1) || "0")} className="key-shadow w-full h-full aspect-square flex items-center justify-center">
              <Icon icon="akar-icons:backspace-fill" />
            </div>
            <div onClick={() => setepression(expression + "%")} className="key-shadow w-full h-full aspect-square flex items-center justify-center font-bold">
              %
            </div>  
            <div onClick={() => setepression(expression + "÷")} className="key-shadow w-full h-full aspect-square flex items-center justify-center">
              <Icon icon="fa-solid:divide" />
            </div>

            {['7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '=', '0', '.', '+'].map((e) => (

              <div onClick={() => {
                if (e === '=') {
                  try {
                  setepression( eval((expression
                    .replaceAll("x","*")
                    .replaceAll("÷", "/")
                    .replaceAll("%", "/100")
                    )))
                 } catch (error) {
                  if (error instanceof SyntaxError)
                  {
                    toast("Ayo new to math?")
                  }
                 }
                }  

                else { setepression((expression == "0" ? "" : expression) + e) }
              }}

                className={`key-shadow w-full h-full aspect-square flex items-center justify-center ${e == "=" && 'row-span-2'}`}>{e}</div>

            ))}





          </div>

          <div classname="text-md font-seimifold"></div>
          <div>
            <span classname="font-semifold"></span>
            <div classname="text-md font-seimifold text-xl mt-4 tracking-wider" >
              <strong ></strong></div>
          </div>

        </div>
      </div>

    </div>
    
  )
}

export default App  