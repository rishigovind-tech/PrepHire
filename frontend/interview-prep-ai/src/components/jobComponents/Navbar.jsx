import React from "react";
import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const navigate=useNavigate()

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
            <button className=" bg-[#FA9531] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer">
              Recruiter Login
            </button>
            <button
              onClick={(e) => openSignIn()}
              className="bg-[#FA9531] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer"
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
