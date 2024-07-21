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
//     <div class="bg-white font-[sans-serif] ">
//       <div class="max-w-10xl  mx-auto">
//         <div class="text-center">
//           <h2 class="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">CATEGORIES</h2>
//         </div>
//         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 h-30 mt-16 max-md:max-w-lg mx-auto">
//           <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
//             <img src="../images/ring.jpg" alt="Blog Post 1" class="w-full h-96 object-cover" />
//             <div class="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
              
//               <h3 class="text-xl font-bold text-[#333]"> rings </h3>
//               <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                
//               </div>
//             </div>
//           </div>
//           <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
//             <img src="../images/Bracelate.jpg" alt="Blog Post 1" class="w-full h-96 object-cover" />
//             <div class="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
              
//               <h3 class="text-xl font-bold text-[#333]"> Bracelate </h3>
//               <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                
//               </div>
//             </div>
//           </div>
//           <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
//             <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" class="w-full h-96 object-cover" />
//             <div class="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
              
//               <h3 class="text-xl font-bold text-[#333]"> rings </h3>
//               <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                
//               </div>
//             </div>
//           </div>
//           <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
//             <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" class="w-full h-96 object-cover" />
//             <div class="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
              
//               <h3 class="text-xl font-bold text-[#333]"> rings </h3>
//               <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                
//               </div>
//             </div>
//           </div>
//           <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
//             <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" class="w-full h-96 object-cover" />
//             <div class="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
              
//               <h3 class="text-xl font-bold text-[#333]"> rings </h3>
//               <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                
//               </div>
//             </div>
//           </div>
//           <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
//             <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" class="w-full h-96 object-cover" />
//             <div class="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
              
//               <h3 class="text-xl font-bold text-[#333]"> rings </h3>
//               <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                
//               </div>
//             </div>
//           </div>
//           <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
//             <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" class="w-full h-96 object-cover" />
//             <div class="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
              
//               <h3 class="text-xl font-bold text-[#333]"> rings </h3>
//               <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
<div class="font-sans bg-gray-50 px-4 py-8">
      <div class="mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 class="text-4xl font-extrabold text-gray-800 text-center mb-12">CATEGORIES</h2>
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

          {/* <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/laptop2.webp" alt="product8"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">ASUS Vivobook 15</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$450.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/watch3.webp" alt="product1"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">French Timex</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$95.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/product14.webp" alt="product2"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">Echo Elegance</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$20.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/laptop4.webp" alt="product3"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">Acer One 14 AMD</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$400.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/watch5.webp" alt="product4"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">Irish Cream Dream</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$11.00</h4>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Cards