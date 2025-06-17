import React from "react";

const AppDownload = () => {
  return (
    <div className=" container  px-4 2xl:px-20 mx-auto my-10 ">
      <div className="relative bg-gradient-to-r from-amber-200 to-orange-500 p-12  rounded-lg">
        <div className="flex  justify-center items-center text-justify">
          <h1 className=" text-xl sm:text-2xl font-light font-serif italic">
            Your work is going to fill a large part of your life, and the only
            way to be truly satisfied is to do what you believe is <span className=" mt-1 flex justify-center"> great work.
            And the only way to do great work is to love what you do.</span>
          </h1>
        </div>
        <h1 className=" text-right text-xl sm:text-2xl font-light font-serif italic mt-2 mb-[-10px]">— Steve Jobs</h1>
      </div>
    </div>
  );
};

export default AppDownload;
