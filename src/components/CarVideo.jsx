import React from 'react'
import video from '../assets/videoplayback.mp4'
import CarAI from '../assets/CarAI.webp'
import buggati from '../assets/buggati.webp'
import redcar from '../assets/redcar.png'

const CarVideo = () => {
  return (
    <div className='w-full'>
      <div>
        <img src={CarAI} alt=""  className='md:hidden'/>
        <img src={buggati} alt="" className='md:hidden'/>
        <img src={redcar} alt="" className='md:hidden'/>
        <video src={video} className='w-full' autoPlay loop muted/>

      </div>
    </div>
  )
}

export default CarVideo
