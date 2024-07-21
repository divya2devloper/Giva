import React from 'react'
import Essential from '../../../public/images/Essential1.jpg'

const Explore = () => {
  return (
    <div class="font-sans py-2 mx-auto lg:max-w-6xl md:max-w-4xl max-sm:max-w-md">
      <h2 class="text-4xl font-bold text-gray-800 text-center mb-12">Essential For You</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-12">

        <div class="bg-white p-3 rounded-lg group overflow-hidden cursor-pointer relative z-20 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="../images/Essential1.jpg" alt="product1"
              class="h-full w-full object-contain" />
          </div>


        </div>

        <div class="bg-white p-3 rounded-lg group overflow-hidden cursor-pointer relative z-20 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="../images/Essential1.jpg" alt="product2"
              class="h-full w-full object-contain" />
          </div>

          
        </div>

        <div class="bg-white p-3 rounded-lg group overflow-hidden cursor-pointer relative z-20 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="../images/Essential1.jpg" alt="product3"
              class="h-full w-full object-contain" />
          </div>

          
        </div>

        <div class="bg-white p-3 rounded-lg group overflow-hidden cursor-pointer relative z-20 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="../images/Essential1.jpg" alt="product4"
              class="h-full w-full object-contain" />
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Explore