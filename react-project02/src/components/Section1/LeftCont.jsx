import React from 'react'

import Herotext from './Herotext';
import Arrow from './Arrow';
const LeftCont = () => {
  return (
    <div className='flex flex-col justify-between w-1/3 h-full'>
     <Herotext />
     <Arrow />
    </div>
  )
}

export default LeftCont
