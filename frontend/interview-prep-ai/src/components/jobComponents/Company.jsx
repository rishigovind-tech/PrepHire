// import React from "react";
// import { motion } from "framer-motion";
// import { assets } from "../../assets/assets";

// const Company = () => {
//   const logos = [
//     assets.microsoft_logo,
//     assets.walmart_logo,
//     assets.accenture_logo,
//     assets.samsung_logo,
//     assets.amazon_logo,
//     assets.apple_logo,
//     assets.netfilx_logo,
//     assets.alphabet_logo,
//     assets.jp_logo,
//     assets.br_logo,
//     assets.nv_logo,
//     assets.intel_logo,

//   ];

//   return (
//     <div className="w-full overflow-hidden bg-gray-50 py-8">
//       <div className="flex justify-center items-center gap-10 lg:gap-16">
//         <p className="font-medium text-gray-600">Trusted By</p>
//         <p className="text-gray-400">|</p>

//         <div className="relative overflow-hidden flex-1 max-w-4xl">
//           <motion.div
//             className="flex gap-10 lg:gap-16 items-center"
//             animate={{
//               x: [0, -100 * logos.length],
//             }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 20,
//                 ease: "linear",
//               },
//             }}
//             style={{
//               width: `${200 * logos.length}%`,
//             }}
//           >
//             {/* First set of logos */}
//             {logos.map((logo, index) => (
//               <img
//                 key={`first-${index}`}
//                 className="h-6 flex-shrink-0"
//                 src={logo}
//                 alt={`Company logo ${index + 1}`}
//               />
//             ))}

//             {/* Duplicate set for seamless loop */}
//             {logos.map((logo, index) => (
//               <img
//                 key={`second-${index}`}
//                 className="h-6 flex-shrink-0"
//                 src={logo}
//                 alt={`Company logo ${index + 1}`}
//               />
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Company;

import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const Company = () => {
  const logos = [
    assets.microsoft_logo,
    assets.walmart_logo,
    assets.accenture_logo,
    assets.samsung_logo,
    assets.amazon_logo,
    assets.apple_logo,
    assets.netfilx_logo,
    assets.alphabet_logo,
    assets.jp_logo,
    assets.br_logo,
    assets.nv_logo,
    assets.intel_logo,
  ];

  const allLogos = [...logos, ...logos]; // duplicate once

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-8">
      <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-10 lg:gap-14">
        <p className="font-medium text-gray-600 whitespace-nowrap">
          Trusted By
        </p>
        <p className="text-gray-400">|</p>

        <div className="relative overflow-hidden flex-1">
          <motion.div
            className="flex items-center gap-12"
            animate={{ x: "-50%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{ width: "200%" }}
            initial={{ x: "0%" }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="h-6 min-w-[72px] aspect-square flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="object-contain h-full w-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Company;
