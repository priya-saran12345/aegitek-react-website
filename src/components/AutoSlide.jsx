// import React, { useState, useEffect } from 'react';

// const TechBanner = () => {
//   const companies = [
//     {
//       id: 1,
//       logo: "/assets/1.png",
//     },
//     {
//       id: 2,
//       logo: "/assets/2.png",
//     },
//     {
//       id: 3,
//       logo: "/assets/3.png",
//     },
//     {
//       id: 4,
//       logo: "/assets/4.png",
//     },
//     {
//       id: 5,
//       logo: "/assets/5.png",
//     },
//     {
//       id: 6,
//       logo: "/assets/6.png",
//     },
//     {
//       id: 7,
//       logo: "/assets/8.png",
//     },
//     {
//       id: 8,
//       logo: "/assets/9.png",
//     }
//   ];

//   const [isPaused, setIsPaused] = useState(false);
//   const [animationDuration, setAnimationDuration] = useState(40); // seconds for one complete cycle

//   // Create multiple copies for infinite effect
//   const infiniteCompanies = [...companies, ...companies, ...companies];

//   return (
//     <div
//       style={{ backgroundImage: "url('./assets/banner-img2.png')", backgroundSize: 'cover', overflow: 'hidden' }}
//       className="w-full py-12 px-4 overflow-hidden "
//     >
//       <div className="max-w-full mx-auto px-8 relative">
//         {/* Infinite Sliding Container */}
//         <div className="relative overflow-hidden">
//           <div
//             className="flex gap-8 animate-infinite-scroll"
//             style={{
//               width: `${infiniteCompanies.length * 320}px`,
//               animationDuration: `${animationDuration}s`
//             }}
//           >
//             {infiniteCompanies.map((company, index) => (
//               <div
//                 key={`${company.id}-${Math.floor(index / companies.length)}`}
//                 className="flex-shrink-0 w-80 group cursor-pointer"
//               >
//                 {/* Logo */}
//                 <div className="  flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                   <img
//                     src={company.logo}
//                     alt={company.name}
//                     className=" object-cover rounded-lg"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes infinite-scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-${companies.length * 320}px);
//           }
//         }
        
//         .animate-infinite-scroll {
//           animation: infinite-scroll linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TechBanner;