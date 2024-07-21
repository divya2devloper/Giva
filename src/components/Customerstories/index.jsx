import React from 'react'
import Cusimg from '../../../public/images/cusimg.jpg'

const Customerstories = () => {
  return (
    <div class="font-[sans-serif] bg-white p-3">
            <div class="max-w-4xl max-md:max-w-xl mx-auto">
                <h2 class="text-3xl text-center font-semibold">Customer Stories</h2>

                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 max-sm:justify-center text-center mt-10">
                    <div>
                        <img src="../images/cusimg.jpg" class="w-30 h-20 rounded-full inline-block" />
                        <div class="bg-pink-100 p-4 rounded-lg relative -mt-6">
                            <h4 class="text-gray-800 text-lg font-bold">Virda</h4>
                            <p class="text-sm text-gray-800 mt-1">A big shout out to you guys for improving my hubby's gifting tastes. </p>
                            <p class="text-sm text-gray-800 mt-1">Completely in love with my ring! </p>
                        </div>
                    </div>

                    <div>
                        <img src="../images/cusimg.jpg" class="w-20 h-20 rounded-full inline-block" />
                        <div class="bg-pink-100 p-4 rounded-lg relative -mt-6">
                            <h4 class="text-gray-800 text-lg font-bold">Virda</h4>
                            <p class="text-sm text-gray-800 mt-1">A big shout out to you guys for improving my hubby's gifting tastes. </p>
                            <p class="text-sm text-gray-800 mt-1">Completely in love with my ring! </p>
                        </div>
                    </div>
                    <div>
                        <img src="../images/cusimg.jpg" class="w-20 h-20 rounded-full inline-block" />
                        <div class="bg-pink-100 p-4 rounded-lg relative -mt-6">
                            <h4 class="text-gray-800 text-lg font-bold">Virda</h4>
                            <p class="text-sm text-gray-800 mt-1">A big shout out to you guys for improving my hubby's gifting tastes. </p>
                            <p class="text-sm text-gray-800 mt-1">Completely in love with my ring! </p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
  )
}

export default Customerstories