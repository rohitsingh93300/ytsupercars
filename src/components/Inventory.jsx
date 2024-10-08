import React from 'react'
import Redcar from '../assets/About.png'
import whitecar from '../assets/whitecar.png'
import bluecar from '../assets/bluecar.png'
import blackcar from '../assets/blackcar.png'
import Mercedes from '../assets/mercedes.png'
import Lambo from '../assets/lambo.png'
import { ChevronRight } from 'lucide-react'
import Cards from './Cards'

const Inventory = () => {
    const cars =[
        {
              id:1,
              name:"Lamborghini Huracan Evo",
              desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo dicta.",
              price: "Rs. 3.71 - 4.29 Crore",
              img: Lambo
        },
        {
              id:2,
              name:"Lamborghini Huracan Evo",
              desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo dicta.",
              price: "Rs. 3.71 - 4.29 Crore",
              img: Mercedes
        },
        {
              id:3,
              name:"Lamborghini Huracan Evo",
              desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo dicta.",
              price: "Rs. 3.71 - 4.29 Crore",
              img: Redcar
        },
        {
              id:4,
              name:"Lamborghini Huracan Evo",
              desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo dicta.",
              price: "Rs. 3.71 - 4.29 Crore",
              img: whitecar
        },
        {
              id:5,
              name:"Lamborghini Huracan Evo",
              desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo dicta.",
              price: "Rs. 3.71 - 4.29 Crore",
              img: bluecar
        },
        {
              id:6,
              name:"Lamborghini Huracan Evo",
              desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo dicta.",
              price: "Rs. 3.71 - 4.29 Crore",
              img: blackcar
        }
  
  ]
  return (
    <div className='bg-slate-50 py-10 px-5 lg:px-0'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col space-y-3 text-center'>
            <h1 className='text-4xl lg:text-6xl font-bold'>Our Inventory</h1>
            <p className='text-sm lg:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nulla similique in.</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10'>
                {
                    cars.map((item)=>{
                        return <Cards key={item.id} item={item}/>
                    })
                }
            </div>
            <div className='pt-10'>
                <button className='px-4 py-2 border border-red-500 text-red-500 mx-auto flex rounded-lg'>See All <ChevronRight/></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Inventory
