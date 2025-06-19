import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/jobContext/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const navigate=useNavigate()

  const {setShowRecruiterLogin}=useContext(AppContext)

  return (
    <div className=" shadow py-4">
      <div className=" container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img onClick={()=>navigate('/jobhome')} className="w-36 cursor-pointer" src={assets.logo} alt="" />
        {user ? (
         <div className="flex items-center gap-3">
            <Link to={'/applications'} className="hover:text-[#FA9531]"> Applied Jobs</Link>
            <p>|</p>
            <p className="max-sm:hidden">Hi,{user.firstName+" "+user.lastName}</p>
            <UserButton/>


          </div>
        ) : (
          <div className=" flex gap-4 max-sm:text-xs">
            <button onClick={e =>setShowRecruiterLogin(true)} className=" text-orange-500 text-sm font-semibold  py-2.5 rounded-full hover:text-orange-900 transition-colors cursor-pointer">
              Recruiter Login
            </button>
            <p className=" flex items-center">|</p>
            <button
              onClick={(e) => openSignIn()}
              className=" text-orange-500 text-sm font-semibold  py-2.5 rounded-full hover:text-orange-900 transition-colors cursor-pointer"
            >
              Job Seeker Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
