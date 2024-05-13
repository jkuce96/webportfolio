// import React from 'react'
// import { useState } from "react"

// const CVModal = ({ modal, setModal }) => {
//     const openModal = () => {
//         setModal(true);
//     }
//     const closeModal = () => {
//         setModal(false);
//     }

//   return (
//     <dialog className="fixed inset-0 z-50 overflow-y-auto" open>
//       <div className="flex items-center justify-center  py-[]">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-xl">
//           <h1 className="text-2xl font-bold mb-4">Životopis</h1>
//           <div className="border-t border-gray-300 mb-4" />
//           {/* CV Content */}
//           <p className="mb-4">Jan Kučera</p>
//           <p className="mb-4">jkuceradc@seznam.cz</p>
//           <p className="mb-4">Univerzita <br /> Jana Evangelisty Purkyně</p>
//           {/* Download Button */}
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
//             Stáhnout CV
//           </button>
//           {/* Close Button */}
//           <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </dialog>
//   )
// }

// export default CVModal