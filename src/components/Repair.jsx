import React from 'react'
import About from '../assets/Aboutx.webp'
import steering from "../assets/steering.png"
import battery from '../assets/battery.png'
import tyre from '../assets/tyre.png'
import maintenance from '../assets/maintenance.png'
import { motion } from 'framer-motion'

const Repair = () => {
  return (
    <div className=' bg-red-50 mt-10 lg:mt-0'>
      <div className='max-w-7xl lg:h-[650px] relative mx-auto pt-10'>
        <motion.div 
        initial={{opacity:0, y:200}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, delay:0.5}}
        className='flex flex-col'>
            <img src={About} alt="" />
            <div className='p-2 md:flex flex-col hidden space-y-2 w-52 mx-auto text-center justify-center absolute top-0 left-72'>
                <div className='bg-orange-50 mx-auto rounded-full'>
                    <img src={steering} alt="" className='w-20 p-2'/>
                </div>
                <h3 className='font-semibold '>Battery Repair</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h4 className='text-red-500'>Read More</h4>
            </div>
            <div className='p-2 md:flex hidden flex-col space-y-2 w-52 mx-auto text-center justify-center absolute top-48 right-0'>
                <div className='bg-orange-50 mx-auto rounded-full'>
                    <img src={battery} alt="" className='w-20 p-2'/>
                </div>
                <h3 className='font-semibold'>Battery Repair</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h4 className='text-red-500'>Read More</h4>
            </div>
            <div className='p-2 md:flex hidden flex-col space-y-2 w-52 mx-auto text-center justify-center absolute top-52 left-0'>
                <div className='bg-orange-50 mx-auto rounded-full'>
                    <img src={tyre} alt="" className='w-20 p-2'/>
                </div>
                <h3 className='font-semibold'>Tyre Repair</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h4 className='text-red-500'>Read More</h4>
            </div>
            <div className='p-2 md:flex hidden flex-col space-y-2 w-52 mx-auto text-center justify-center absolute top-0 right-72'>
                <div className='bg-orange-50 mx-auto rounded-full'>
                    <img src={maintenance} alt="" className='w-20 p-2'/>
                </div>
                <h3 className='font-semibold'>Engine Repair</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h4 className='text-red-500'>Read More</h4>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Repair
