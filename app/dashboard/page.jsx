
import React from 'react'
import DashNav from '../components/DashNav'

import Link from 'next/link'
import Footer from 'app/components/Footer'
import getUser from '@/userState'


const page = () => {
 
  return (
   
    <div >
        <DashNav/>
       
        <Footer/>
    </div>
  )
}

export default page
