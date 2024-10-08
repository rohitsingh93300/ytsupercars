import React from 'react'
import banner from '../assets/banner.jpg'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <>
            <div className='relative'>
                <div style={{
                    height: '600px',
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(5px)',
                    zIndex: -1
                }}>
                </div>
                    <motion.div 
                    initial={{opacity:0, scale:0.7}}
                    whileInView={{opacity:1, scale:1}}
                    transition={{duration:1, delay:0.2}}
                    className='absolute top-10 lg:left-32 mx-auto lg:pl-16 w-[400px] px-7 lg:px-0'>
                        <h2 className='text-5xl text-white font-bold text-center mb-5'>Contact <span className='text-red-500'>us</span></h2>
                        <form action="" className='bg-red-50 rounded-lg p-10 space-y-4'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="" className='font-semibold'>First Name:</label>
                                <input
                                    className='p-1'
                                    name='firstname'
                                    placeholder='First Name'
                                    type="text" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="" className='font-semibold'>Last Name:</label>
                                <input
                                    className='p-1'
                                    name='lastname'
                                    placeholder='Last Name'
                                    type="text" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="" className='font-semibold'>Email:</label>
                                <input
                                    className='p-1'
                                    name='email'
                                    placeholder='Email'
                                    type="email" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="" className='font-semibold'>Message:</label>
                                <textarea
                                    className='p-1'
                                    name='message'
                                    placeholder='Write Your Message'
                                    />
                            </div>
                            <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>Submit</button>
                        </form>
                    </motion.div>
            </div>
        </>
    )
}

export default Contact
