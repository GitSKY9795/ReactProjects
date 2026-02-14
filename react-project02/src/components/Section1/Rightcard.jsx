import React from 'react'
import { ArrowRight } from 'lucide-react';

const Rightcard = () => {
  return (
    <div 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className='relative rounded-3xl overflow-hidden shadow-lg h-full w-1/3'
    >
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/30'></div>

      {/* Content */}
      <div className='relative p-6 flex flex-col justify-between h-full w-full'>
        {/* Number Badge */}
        <h2 className='bg-white text-lg font-bold rounded-full h-10 w-10 flex justify-center items-center text-gray-900'>
          1
        </h2>

        {/* Text Content - positioned at bottom */}
        <div>
          <h3 className='text-lg font-semibold text-white mb-2'>Prime customers,</h3>
          <p className='text-xs leading-relaxed text-white mb-4 opacity-90'>
            that have access to bank credit and are satisfied with the current product
          </p>

          {/* Button */}
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full text-sm transition-all duration-300 inline-flex items-center gap-2'>
            Satisfied
            <ArrowRight size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightcard
