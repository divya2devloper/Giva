import React from 'react'
import Gold from '../../../public/images/gold.jpg'

const GivaEssential = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-5 p-10  '>
    <div className="relative py-16 font-[sans-serif] ">
      <div className="absolute inset-0">
        <img src="../images/gold.jpg" alt="Background Image" className="w-full h-full rounded-lg object-cover " />
      </div>

      <div class="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
        
        <p class="text-lg md:text-xl mb-12"></p>
        
      </div>
      </div>
      <div>
    <div className="relative py-16 font-[sans-serif]">
      <div className="absolute inset-0">
        <img src="../images/silver.jpg" alt="Background Image" className="w-full h-full rounded-lg object-cover " />
      </div>

      <div class="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
        
        <p class="text-lg md:text-xl mb-12"></p>
        
      </div>
      </div>
      </div>
      </div>
      <div className='p-9'>
      <div className="relative py-16 font-[sans-serif] ">
      <div className="absolute inset-0">
        <img src="../images/combo.jpg" alt="Background Image" className="w-full h-full rounded-lg object-cover " />
      </div>

      <div class="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
        
        <p class="text-lg md:text-xl mb-12"></p>
        
      </div>
      </div>
      </div>
      </div>
      
  )
}

export default GivaEssential