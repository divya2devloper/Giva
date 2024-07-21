import React from 'react'

function Footer() {
  return (
    <footer class="font-sans tracking-wide bg-[#fad5d5] py-10 px-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
      <div>
        <h4 class="text-black text-lg font-semibold mb-6">Company</h4>
        <ul class="space-y-5">
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">Customer Reviews</a></li>
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">Our Blogs</a></li>
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">Store Locator</a></li>
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">Jwellery Care</a></li>
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">Join us</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-black text-lg font-semibold mb-6">Info</h4>
        <ul class="space-y-5">
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">Shipping & Return</a></li>
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">Privacy Policy</a></li>
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">Intenational Shipping</a></li>
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">FAQs & Support</a></li>
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">Terms of Service</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-black text-lg font-semibold mb-6">Contact Us</h4>
        <ul class="space-y-5">
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">BIS : HM/C - 6290031216</a></li>
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">For any suggestions, queries or complaints please contact us:</a></li>
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">Indiejewel Fashions Private Limited</a></li>
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">Third Floor, Mangnum Vista, Raghuvanahalli, Bangalore560062</a></li>
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">- care@giva.co</a></li>
          <li><a href="javascript:void(0)" class="text-black hover:text-white text-[15px]">- 7829558887(10 AM to 6:30 PM)</a></li>
        </ul>
      </div>

      <div class="col-span-full max-w-2xl">
        <h4 class="text-black text-lg font-semibold mb-6">Newsletter</h4>
        <p class="text-black mb-4 text-[15px]">Subscribe to our newsletter to get updates on new products and promotions.
        </p>

        <form class="mb-4">
          <div class="flex items-center">
            <input type="email" placeholder="Enter your email"
              class="bg-gray-800 px-4 py-3.5 rounded-l-md w-full text-[15px] text-gray-300 outline-none" />
            <button type="button"
              class="bg-gray-700 text-[15px] text-gray-300 tracking-wide px-4 py-3.5 rounded-r-md">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <p class='text-black text-right text-[15px] mt-8'>© 2024,<a href='https://readymadeui.com/' target='_blank'
      class="hover:underline mx-1">GIVA Jwellery.</a>
    </p>
  </footer>
  )
}

export default Footer