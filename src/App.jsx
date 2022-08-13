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
            <div className="text-s">calculator</div>
            <Icon icon="ant-design:signal-filled" className="mt-1" />
            <Icon icon="akar-icons:wifi" className="mt-1 " />
            <Icon icon="carbon:battery-full" className="mt-1"></Icon>

          </div>
          <div className='flex flex-row items-center gap-4 border p-5 border-neutral-700 mt-5 animate__animated animate__bounceInLeft'>
            the calculator is good
          </div>
          <div>
            <div className="text-3xl p-4 gap-3 font-bold md:p-2 text-xl gap-3 font-bold" >7</div>
            <div className="text-3xl p-4 gap-3 font-bold md:p-2 text-xl gap-3 font-bold" >8</div>
            <div className="text-3xl p-4 gap-3 font-bold md:p-2 text-xl gap-3 font-bold" >9</div>
          </div>
        </div>

        <div classname="text-md font-seimifold"></div>
        <div>
          <span classname="font-semifold"></span>
          <div classname="texyt-md font-seimifold text-xl mt-4 tracking-wider" >
            <strong ></strong></div>
        </div>
      </div>

    </div>

  )
}

export default App