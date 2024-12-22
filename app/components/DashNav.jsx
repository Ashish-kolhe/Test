
import SignOut from "./sign-out";
import getUser from "@/userState";

const DashNav = () => {

  return (
    <div>
        <div className="navbar bg-base-100">
        <div className="flex items-center m-4 text-2xl font-black">
  <img src="./FilledLogo.png" alt="Coddeit Logo" className="h-10 w-10 mr-2" />
  
    Coddeit
  
</div>
  <div className="flex-1">
  
      
    <div className="dropdown dropdown-end">
      < div tabIndex={0} role="button" className="btn btn-ghost hover:bg-white">
      <h1 className='text-sm font-bold mr-6 text-primary'>{getUser()}</h1>
      </div>
      < ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
   <SignOut/>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default  DashNav 
