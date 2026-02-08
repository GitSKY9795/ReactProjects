import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-18 tracking-widest'>
        <h4 className=' bg-black text-white rounded-full px-6 py-2'>Target Audience</h4>
        <button className='bg-gray-300 text-black font-medium py-2 px-4 rounded-full uppercase tracking-widest text-sm'>
          Digital Banking Platform
        </button>
    </div>
  )
}

export default NavBar
