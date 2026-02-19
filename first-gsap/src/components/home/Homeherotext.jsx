import React from 'react'
import Video from './Video'
import { Radius } from 'lucide-react'

const Homeherotext = () => {
  return (
    <div className=' font-[font1] pt-4.5 text-center'>
<div className='uppercase text-[8vw] leading-[7.5vw] flex items-center justify-center'>
    The spark
</div>
<div className='uppercase text-[8vw] leading-[7.5vw] flex items-center justify-center gap-5  '>
    who <div className='h-[9.5vw] w-[20vw] rounded-full overflow-hidden -mt-4 '  >
        <Video />
    </div>
</div>
<div className='uppercase text-[8vw] leading-[7.5vw] flex items-center justify-center'> generates there creativity</div>
    </div>
  )
}

export default Homeherotext
