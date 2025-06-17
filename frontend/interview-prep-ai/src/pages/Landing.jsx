import React, { useContext, useState } from "react";

import home from "../assets/home.png";
import { APP_FEATURES } from "../utils/data";
import { Link, useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import Footer from "./Footer";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Modal from "../components/Modal";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";
import { assets } from "../assets/assets";

const Landing = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModel(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="w-full min-h-full bg-[#fffcef] ">
        <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0" />

        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          <header className="flex justify-between items-center mb-16">
            <img className="w-36" src={assets.logo} alt="" />
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="bg-[#FA9531] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer "
                onClick={() => setOpenAuthModel(true)}
              >
                Login / Sign Up
              </button>
            )}
          </header>

          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex flex-center justify-left mb-2">
                <div className="flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  <LuSparkles /> AI Powered
                </div>
              </div>

              <h1 className="text-3xl text-black font-medium mb-6 leading-tight md:text-3xl lg:text-4xl">
                Crack Interviews & Find Jobs with <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#ff9324_0%,_#fcd760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                  AI-Powered
                </span>{" "}
                Prep & Opportunities
              </h1>
            </div>

            <div className="w-full md:w-1/2">
              <p className=" text-[20px] text-justify text-gray-900 mr-0 md:mr-20 mb-6">
                <b>
                  Discover curated job opportunities and get interview-ready—all
                  in one place.
                </b>{" "}
                Access role-specific questions, reveal detailed answers only
                when you're ready, explore key concepts in depth, and stay
                organized throughout your journey. From finding the right job to
                preparing for the interview, PrepPilot has everything you need
                to succeed.
              </p>

              {/* -------------------------------- */}
              <div className=" flex gap-4">
                <button
                  className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer"
                  onClick={handleCTA}
                >
                  Get Started
                </button>
                <Link to={"/jobhome"}>
                  <button className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer">
                    Explore Job Opening
                  </button>
                </Link>
              </div>

              {/* ----------------------------- */}
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full min-h-full relative z-10">
        <div>
          <section className="flex items-center justify-center -mt-36">
            <img
              src={home}
              alt="home image"
              className="w-[80vw] rounded-lg border border-black"
            />
          </section>
        </div>

        <div className="  w-full min-h-full bg-[#fffcef] mt-10 ">
          <div className=" container mx-auto px-4 pt-10 pb-20">
            <section className="mt-5">
              <h2 className=" text-2xl font-medium text-center mb-12">
                Fetures That Make you Shine
              </h2>

              <div className=" flex flex-col items-center gap-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-[#fffef8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100"
                    >
                      <h3 className=" text-base font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className=" text-gray-600 text-justify">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                      key={feature.id}
                      className=" bg-[#fffef8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100"
                    >
                      <h3 className="text-base font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-justify">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="text-sm bg-gray-50 text-secondary text-center p-3 mt-5">
          <Footer />
        </div>
      </div>

      <Modal
        isOpen={openAuthModel}
        onClose={() => {
          setOpenAuthModel(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default Landing;

// ...imports remain the same

// const Landing = () => {
//   const { user } = useContext(UserContext);
//   const navigate = useNavigate();

//   const [openAuthModel, setOpenAuthModel] = useState(false);
//   const [currentPage, setCurrentPage] = useState("login");

//   const handleCTA = () => {
//     if (!user) {
//       setOpenAuthModel(true);
//     } else {
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <>
//       <div className="w-full min-h-screen bg-[#fffcef] relative">
//         <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0" />

//         <div className="container mx-auto px-4 md:px-6 pt-6 pb-20 relative z-10">
//           <header className="flex justify-between items-center mb-12 md:mb-16">
//             <div className="text-xl md:text-2xl text-black font-bold">PrepPilot</div>
//             {user ? (
//               <ProfileInfoCard />
//             ) : (
//               <button
//                 className="bg-gradient-to-r from-[#ff9324] to-[#e99a4b] text-xs md:text-sm font-semibold text-white px-5 md:px-7 py-2 md:py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer"
//                 onClick={() => setOpenAuthModel(true)}
//               >
//                 Login / Sign Up
//               </button>
//             )}
//           </header>

//           <div className="flex flex-col md:flex-row items-center gap-8">
//             <div className="w-full md:w-1/2">
//               <div className="flex justify-start mb-2">
//                 <div className="flex items-center gap-2 text-[12px] md:text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
//                   <LuSparkles /> AI Powered
//                 </div>
//               </div>

//               <h1 className="text-2xl md:text-3xl lg:text-5xl text-black font-medium mb-6 leading-snug">
//                 Ace Interviews With <br />
//                 <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#ff9324_0%,_#fcd760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
//                   AI-Powered
//                 </span>{" "}
//                 Learning
//               </h1>
//             </div>

//             <div className="w-full md:w-1/2">
//               <p className="text-base md:text-lg lg:text-xl text-justify text-gray-900 mb-6">
//                 Access questions tailored to your role, reveal detailed answers
//                 only when you're ready, explore concepts in depth, and keep your
//                 prep organized your way. From start to finish, it’s everything
//                 you need to ace your interview.
//               </p>

//               <button
//                 className="bg-black text-sm font-semibold text-white px-6 md:px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer"
//                 onClick={handleCTA}
//               >
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full min-h-full relative z-10 px-4">
//         <section className="flex items-center justify-center -mt-28 md:-mt-36">
//           <img src={home} alt="home" className="w-full max-w-6xl rounded-lg border border-black" />
//         </section>

//         <div className="w-full bg-[#fffcef] mt-10">
//           <div className="container mx-auto px-4 md:px-6 pt-10 pb-20">
//             <section className="mt-5">
//               <h2 className="text-xl md:text-2xl font-medium text-center mb-12">
//                 Features That Make You Shine
//               </h2>

//               <div className="flex flex-col items-center gap-8">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
//                   {APP_FEATURES.slice(0, 3).map((feature) => (
//                     <div
//                       key={feature.id}
//                       className="bg-[#fffef8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100"
//                     >
//                       <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
//                       <p className="text-gray-600 text-justify">{feature.description}</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
//                   {APP_FEATURES.slice(3).map((feature) => (
//                     <div
//                       key={feature.id}
//                       className="bg-[#fffef8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100"
//                     >
//                       <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
//                       <p className="text-gray-600 text-justify">{feature.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>

//         <div className="text-sm bg-gray-50 text-secondary text-center p-3 mt-5">
//           <Footer />
//         </div>
//       </div>

//       <Modal
//         isOpen={openAuthModel}
//         onClose={() => {
//           setOpenAuthModel(false);
//           setCurrentPage("login");
//         }}
//         hideHeader
//       >
//         <div>
//           {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
//           {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default Landing;
