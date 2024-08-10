import React from 'react'

const ProductDetails = () => {
  return (
    <div class="font-sans bg-white">
            <div class="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
                    <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">

                        <div class="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                            <img src="/images/ring.jpg" alt="Product" class=" rounded object-cover" />
                            <button type="button" class="absolute top-4 right-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="#ccc" class="mr-1 hover:fill-[#333]" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                </svg>
                            </button>
                        </div>

                        <div class="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                            <div class="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                <img src="images/ring.jpg" alt="Product2" class="w-full" />
                            </div>
                            <div class="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                <img src="images/ring.jpg" alt="Product2" class="w-full" />
                            </div>
                            <div class="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                <img src="images/ring.jpg" alt="Product2" class="w-full" />
                            </div>
                            <div class="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                <img src="images/ring.jpg" alt="Product2" class="w-full" />
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-2">
                        <h2 class="text-2xl font-extrabold text-gray-800">Diamond Vintage Ring</h2>

                        <div class="flex space-x-2 mt-4">
                            <svg class="w-5 fill-black" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-black" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-black" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-black" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <h4 class="text-gray-800 text-base">500 Reviews</h4>
                        </div>

                        <div class="flex flex-wrap gap-4 mt-8">
                            <p class="text-gray-800 text-3xl font-bold">10,000</p>
                            <p class="text-gray-400 text-base"><strike>15,000</strike> <span class="text-sm ml-1">Tax included</span></p>
                        </div>

                        <div class="flex flex-wrap gap-4 mt-8">
                            <button type="button" class="min-w-[200px] px-4 py-3 bg-pink-400 hover:bg-pink-700 text-white text-sm font-semibold rounded">Buy now</button>
                            <button type="button" class="min-w-[200px] px-4 py-2.5 border border-pink-700 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded">Add to cart</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
  )
}

export default ProductDetails