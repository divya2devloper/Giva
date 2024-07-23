import React from 'react'
import Ring from '../../../public/images/ring.jpg'
import Bracelate from '../../../public/images/bracelate.jpg'
import givaring from '../../../public/images/givaring.jpg'
import givamens from '../../../public/images/givamens.jpg'
import givasets from '../../../public/images/givasets.jpg'
import givaearing from '../../../public/images/givaearing.jpg'
import givanecklace from '../../../public/images/givanecklace.jpg'
import mangalsutra from '../../../public/images/mangalsutra.jpg'

const Cards = () => {
  return (
<div class="font-sans bg-gray-50 px-4 py-8">
      
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="../images/Bracelate.jpg" alt="product1"
                class="h-full w-6/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              
              <h4 class="text-base text-black font-bold mt-4">Bracelate</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="../images/givaring.jpg" alt="product2"
                class="h-full w-6/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              
              <h4 class="text-base text-black font-bold mt-2">Rings</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="../images/givasets.jpg" alt="product3"
                class="h-full w-6/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              
              <h4 class="text-base text-black font-bold mt-2">Sets</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="../images/givaearing.jpg" alt="product4"
                class="h-full w-6/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              
              <h4 class="text-base text-black font-bold mt-2">Earings</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="../images/givamens.jpg" alt="product5"
                class="h-full w-6/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              
              <h4 class="text-base text-black font-bold mt-2">Men's</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="../images/givanecklace.jpg" alt="product6"
                class="h-full w-6/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              
              <h4 class="text-base text-black font-bold mt-2">Necklace</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="../images/mangalsutra.jpg" alt="product7"
                class="h-full w-6/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              
              <h4 class="text-base text-black font-bold mt-2">Mangalsutra</h4>
            </div>
          </div>

          </div>
      </div>
    
  )
}

export default Cards