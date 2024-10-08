import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const Navhandler=()=> {
    setOpen(!open)
    
    if(open){
      document.body.style.overflow = 'unset';
    }else{
      document.body.style.overflow = 'hidden';
    }

  }
  return (
    <div className='bg-slate-100 py-1'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center px-5 lg:px-0'>
          {/* logo */}
          <div>
            <img src={Logo} alt="" className='w-24' />
          </div>
          {/* nav */}
          <ul className='lg:flex gap-6 items-center hidden'>
            <li className='hover:text-red-500 cursor-pointer transition-all'>Home</li>
            <li className='hover:text-red-500 cursor-pointer transition-all'>About</li>
            <li className='hover:text-red-500 cursor-pointer transition-all'>Inventory</li>
            <li className='hover:text-red-500 cursor-pointer transition-all'>Contact Us</li>
            <button className='bg-red-500 cursor-pointer text-white px-4 py-2 rounded-full'>Book a Test Drive</button>
          </ul>
          <Menu onClick={Navhandler} className='lg:hidden'/>
        </div>
      </div>
      {
        open ? (
          <nav className='lg:hidden'>
            <ul className='flex flex-col space-y-10 bg-slate-50 w-[300px] h-[950px] items-center pt-36 absolute text-2xl font-semibold top-0 z-30 right-0 '>
                 <li>Home</li>
                 <li>About</li>
                 <li>Inventory</li>
                 <li>Contact Us</li>
                 <button className='bg-red-500 text-white px-4 py-2 rounded-full'>Book a Test Drive</button>
                 <X onClick={Navhandler} className='z-50 absolute top-0 right-10 border border-black p-1 rounded-md'/>
            </ul>
          </nav>
        ):null
      }
    </div>
  )
}

export default Navbar
