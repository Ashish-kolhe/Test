
import React from 'react'
import DashNav from '../components/DashNav'
import DashHero from "../components/DashHero"
import Link from 'next/link'
import Footer from 'app/components/Footer'
import getUser from '@/userState'


const page = () => {
 
  return (
   
    <div >
        <DashNav/>
        <DashHero/>
        <Footer/>
    </div>
  )
}

export default page
