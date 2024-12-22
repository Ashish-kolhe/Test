
import React from 'react'
import DashNav from '../components/DashNav'
import DashHero from '../components/DashHero'
import Link from 'next/link'
import Footer from 'app/components/Footer'

const page = () => {
 
  return (
   
    <div className='bg-white'>
        <DashNav/>
        <DashHero/>
        <Footer/>
    </div>
  )
}

export default page
