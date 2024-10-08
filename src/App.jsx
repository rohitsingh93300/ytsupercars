import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CarVideo from './components/CarVideo'
import About from './components/About'
import Repair from './components/Repair'
import Inventory from './components/Inventory'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
    <CarVideo/>
    <About/>
   <Repair/>
    <Inventory/>
   <Contact/>
   <Footer/>  
   </>
  )
}

export default App
