import React from 'react'
import givabanner from '../../../public/images/givabanner.jpg';

const store = () => {
  return (
    <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-5 before:z-10">
      <img src="/images/givabanner.jpg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

      <div class="min-h-[350px] relative z-20 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-black p-6">
        <h2 class="sm:text-4xl text-2xl font-bold mb-6">Find a GIVA Store</h2>
        <div class="flex px-4 py-3 rounded-md border-2 border-black overflow-hidden max-w-md mx-auto font-[sans-serif]">
        
        <input type="email" placeholder="Enter city/Pincode/locality" class="w-full outline-none bg-transparent text-gray-600 text-sm" />
      </div>

        <button
          type="button"
          class="mt-12 bg-red-200 text-black text-base py-3 px-6 border border-white rounded-lg hover:bg-pink-500 hover:text-black transition duration-300">
          Check
        </button>
      </div>
    </div>
  )
}

export default store