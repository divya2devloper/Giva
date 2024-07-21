import React from 'react'
import footerbanner from '../../../public/images/footerbanner.jpg'

const Footerbanner = () => {
  return (
    <div>
    <div className="relative py-16 font-[sans-serif]">
      <div className="absolute inset-0">
        <img src="../images/footerbanner.jpg" alt="Background Image" className="w-full h-full object-cover " />
      </div>

      <div class="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
        
        <p class="text-lg md:text-xl mb-12"></p>
        
      </div>
      
    </div>
    <div class="flex gap-4 max-sm:flex-col items-center justify-center text-center bg-pink-500 text-black px-6 py-3.5 rounded font-[sans-serif]">
    <p class="text-base">Know More!</p>

  </div>
  </div>
  )
}

export default Footerbanner