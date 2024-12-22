import React from 'react'
import Link from 'next/link'
import PaymentPage from './Payment'
const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
  
  <div className="flex items-center m-4">
  <img src="./FilledLogo.png" alt="Coddeit Logo" className="h-10 w-10 mr-2" />
  <Link href="/" className="text-2xl font-black">
    Coddeit
  </Link>
</div>
  </div>
  
  <div className="navbar-end p-4">
 <PaymentPage/>
  </div>
</div>
    </div>
  )
}

export default Navbar