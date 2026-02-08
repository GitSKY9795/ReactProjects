import React from 'react'
import { ArrowUpRight } from 'lucide-react';
const LeftCont = () => {
  return (
    <div className='flex flex-col justify-between overflow-hidden w-1/3 bg-blue-200  h-full '>
      <div className='px-5 py-10'>
        <h3 className='text-4xl font-bold px-5 py-2 mb-5'>Prospective <br /> <span>Customer</span>  <br /> segmentation</h3>
        <p className='text-xl px-5 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla.</p>
      </div>
      <div  ><ArrowUpRight size={50} strokeWidth={2.2} /></div>
    </div>
  )
}

export default LeftCont
