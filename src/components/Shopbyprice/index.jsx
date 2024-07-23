import React from 'react'
import shopbyprice from '../../../public/images/shopbyprice.jpg'
import shopimg from '../../../public/images/shpimg2.jpg'

const Shopbyprice = () => {
  return (
    <div className='text-center mb-10 mt-10'><h2 class="text-3xl font-extrabold text-gray-800 mb-12">Shop By Price</h2>
    <div class="font-[sans-serif] space-x-10 flex justify-center px-7 ">
        

        {/* <div class="w-48 h-48 flex items-center justify-center shrink-0 bg-yellow-300 rounded-full shadow-lg p-6"> */}
        <a href='/priceproducts' class='bg-black'>
        <div>
          <img src='../images/shopbyprice.jpg' alt="Background Image" className="w-30 h-30 object-cover "/>
        </div>
        </a>

        {/* <div
          class="w-48 h-48 flex items-center justify-center shrink-0 bg-gray-900 rounded-full shadow-lg p-6 relative before:border-4 before:border-dotted before:border-yellow-500 before:rounded-full before:absolute before:w-[90%] before:h-[90%]"> */}
          
          <div>
            <img src='../images/shpimg2.jpg' alt="Background Image" className="w-30 h-30 object-cover "/>
          
        </div>
        <div>
            <img src='../images/shopimg3.jpg' alt="Background Image" className="w-30 h-30 object-cover "/>
          
        </div>
        <div>
            <img src='../images/shopimg4.jpg' alt="Background Image" className="w-30 h-30 object-cover "/>
          
        </div>

      </div>
      </div>
      
  )
}

export default Shopbyprice