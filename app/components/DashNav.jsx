
import SignOut from "./sign-out";
import getUser from "@/userState";
import getMail from "@/userMail";
const DashNav = () => {

  return (
    <div>
               <div className="navbar bg-white">
  <div className="navbar-start">
  
  <div className="flex items-center m-4 text-lg font-black">
  <img src="./FilledLogo.png" alt="Coddeit Logo" className="h-8 w-8 mr-2" />
  
    Coddeit
 
</div>
  </div>
  
  <div className="navbar-end ">
  <div className="dropdown dropdown-bottom dropdown-end">
    
  <div tabIndex={0} >
  <button className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
  <ul tabIndex={0} className="dropdown-content menu  bg-white rounded-box z-[1] w-52 p-2 font-semibold text-gray-900 ">
  <h1 className='flex justify-center '><span className="loading loading-spinner text-info"></span></h1>
  <div className='flex justify-center text-secondary mt-1'>{getUser()}</div>
  <div className='flex justify-center text-gray-900 text-xs mt-1'>{getMail()}</div>
  <div className="divider mb-6"></div>
    <li ><a href='#standard'>Standard</a></li>
    <li ><a href='#framework'>Framework</a></li>
    <li ><a href='#templates'>Templates</a></li>
    <div className="divider "></div>

    <div className='flex justify-center'><SignOut/></div>
  </ul>
</div>
  </div>
</div>
    </div>
  )
}

export default  DashNav 
