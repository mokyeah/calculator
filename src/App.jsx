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
      
      <div ><Icon icon="icon-park-outline:bird" width="50" height="50" className="absolute -bottom-20 "/>
      <div className="absolute -bottom-20 text-xl p-10 hidden-md: hidden">Don't ask why am I here. It's an easter egg so don't deduct my mark</div></div>
      <div className="grid gap-4 grid-cols-4 text-2xl mt-10">
        
            <div onClick={() => setepression("3.141592")} className="key-shadow w-full h-full aspect-square flex items-center p-3 justify-center">π</div>
            <div onClick={() => setepression("Area of circle: A=πr^2")} className="key-shadow w-full h-full aspect-square flex items-center p-3 justify-center">⚪</div>
            <div onClick={() => setepression("Area cylinder: A=2πrh+2πr^2")} className="key-shadow w-full h-full aspect-square flex items-center p-3 justify-center">🛢️</div>
           </div>
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

      <div className="rounded-md overflow-hidden z-[9999]">
      <Icon icon="icon-park-outline:bird" width="50" height="50" className="absolute left-20 "/>
      <Icon icon="icon-park-outline:bird" width="50" height="50" className="absolute right-20  "/>
      <Icon icon="icon-park-outline:bird" width="40" height="40" vFlip={true} rotate={2} className="relative left-"/>
    

        <div className='text-xl p-2 m-3 font-seimifold border-solid ' ></div>
        <div className="calculator-shadow p-5 relative">
          <div className="flex flex-row gap-3 ">
            <div className="flex justify-center items-center gap-40 ">
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
                    .replaceAll ("%", "/100")
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
      
  
      <div className="w-full absolute -bottom-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="  #00FFFF"
            fill-opacity="1"
            d="M0,320L34.3,277.3C68.6,235,137,149,206,122.7C274.3,96,343,128,411,165.3C480,203,549,245,617,250.7C685.7,256,754,224,823,202.7C891.4,181,960,171,1029,192C1097.1,213,1166,267,1234,282.7C1302.9,299,1371,277,1406,266.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
            </svg>
       

      
      </div>
</div>
  
    
  )
}

export default App  