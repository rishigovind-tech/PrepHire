import React, { useContext, useRef } from "react";
import { assets } from "../../assets/assets";
import Company from "./Company";
import { AppContext } from "../../context/jobContext/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
    console.log({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
  };

  return (
    <div className=" container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-[#FA9531] to-[#8A4500] text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Over 10,000+ Jobs to apply
        </h2>
        <p className=" mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Your next big career move begins here — discover top job opportunities
          and take the first step toward a brighter future!
        </p>
        <div className=" flex items-center gap-4 justify-between bg-white  text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto rounded-xl">
          <div className="flex items-center">
            <img className="h-4 sm:h-4" src={assets.search_icon} alt="" />
            <input
              type="text"
              placeholder="Search for jobs"
              className=" max-sm:text-xs p-2 rounded outline-none w-full "
              ref={titleRef}
            />
          </div>
          <p>|</p>
          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.location_icon} alt="" />
            <input
              type="text"
              placeholder="Location"
              className=" max-sm:text-xs p-2 rounded outline-none w-full "
              ref={locationRef}
            />
          </div>
          <button
            onClick={onSearch}
            className="bg-orange-400 text-sm font-semibold text-white px-7 py-2.5 rounded-xl hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>

      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-xl flex ">
        <Company />
      </div>
    </div>
  );
};

export default Hero;
