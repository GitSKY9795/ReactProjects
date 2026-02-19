import React from 'react'
import Video from '../components/home/Video'
import Homebottomtext from '../components/home/Homebottomtext'
import Homeherotext from '../components/home/Homeherotext'

const Home = () => {
  return (
    <div>
     <div className='h-screen w-screen fixed'> <Video />
     </div>
     <div className='h-screen relative flex flex-col '>
         <Homeherotext />
     <Homebottomtext />
 
     </div>
 
    </div>
  )
}

export default Home
