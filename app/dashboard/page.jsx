
import React from 'react'
import DashNav from '../components/DashNav'
import DashHero from "../components/DashHero"
import Standard from "../components/Standard"
import Link from 'next/link'
import Footer from 'app/components/Footer'
import getUser from '@/userState'


const page = () => {
 
  return (
   
    <div >
        <DashNav/>
        <Standard/>
        <DashHero/>
      
        <Footer/>
    </div>
  )
}

export default page
