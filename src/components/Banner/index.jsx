import React from 'react'
import footerbanner from '../../../public/images/banner.jpg'

const Footerbanner = () => {
  return (
    <div >
    <div className="relative py-16  font-[sans-serif] sm:h-30 md:h-80 lg:h-80">
      <div className="absolute inset-0">
        <img src="../images/banner.jpg" alt="Banner" className="w-full h-full object-contain  " />
      </div>
      
    </div>
    
  </div>
  )
}

export default Footerbanner