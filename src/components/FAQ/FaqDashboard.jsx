import React from 'react'
import Navbar from './../Navbar'
import FAQ from './FAQ'
import Footer from '../Footer'
const FaqDashboard = () => {
  return (
    <div className=' min-h-screen bg-zinc-800'>
        <Navbar></Navbar>
        <FAQ></FAQ>
        {/* <Footer></Footer> */}
        <Footer></Footer>
    </div>
  )
}

export default FaqDashboard