import React from 'react'
import { Icon } from '@iconify/react';

function App() {
  return (
    <div className='bg-red-400 flex justify-center items-center w-full h-screen'>
      <div className="rounded-md overflow-hidden">

        <div className='text-xl p-2 m-3 font-seimifold border-solid' ></div>
        <div className="bg-white p-5 relative">
          <div className="flex flex-row gap-3 ">
            <div className="text-s ">10:60</div>
            <Icon icon="ant-design:signal-filled" className="mt-1" />
            <Icon icon="akar-icons:wifi" className="mt-1 "/>
            
            </div>
            <div className='flex flex-row items-center gap-4 border p-5 border-neutral-700 mt-5 animate__animated animate__bounceInLeft'></div>

          </div>
          <div className="">hello</div>
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