import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import moment from "moment"

function App() {
  const time = new Date()
  const [expresstion,  setxpresstion] = useState("0");
  return (
    <div className='bg-cyan-200 flex justify-center items-center absolute w-full h-screen'>
      <div className="rounded-md overflow-hidden">

        <div className='text-xl p-2 m-3 font-seimifold border-solid' ></div>
        <div className="calculator-shadow p-5 relative">
          <div className="flex flex-row gap-3 ">
            <div className="text-s">{moment(time).format("HH.mm")}</div>
            <div className="text-s">calculator</div>
            <Icon icon="ant-design:signal-filled" className="mt-1" />
            <Icon icon="akar-icons:wifi" className="mt-1 " />
            
            <Icon icon="carbon:battery-full" className="mt-1"></Icon>

          </div>
          <div className=" ">
            <input value={expresstion}
            disabled
            className="w-full text-right input-shadow text-3xl mt-8
            "/>
           </div>
           <div className="grid gap-4 grid-cols-4 text-2xl mt-10">
            <div className="key-shadow w-full h-full aspect-square flex items-center justify-center">AC</div>

            
            <div className="key-shadow w-full h-full aspect-square flex items-center justify-center">
              <Icon icon="akar-icons:backspace-fill" />
            </div>
            <div className="key-shadow w-full h-full aspect-square flex items-center justify-center font-bold">
            %
            </div>
            <div className="key-shadow w-full h-full aspect-square flex items-center justify-center">
            <Icon icon="fa-solid:divide" />
            </div>
            
              {['7', '8', '9', 'x','4', '5', '6', '-', '1', '2', '3', '=', '0', '.', '+'].map((e) => (
                <div className="key-shadow w-full h-full aspect-square flex items-center justify-center">{e}</div>
              
              ))}
            
           </div> 
           
          
         
          
        </div>

        <div classname="text-md font-seimifold"></div>
        <div>
          <span classname="font-semifold"></span>
          <div classname="text-md font-seimifold text-xl mt-4 tracking-wider" >
            <strong ></strong></div>
        </div>
        
      </div>

    </div>

  )
}

export default App