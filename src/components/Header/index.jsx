import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Store from "../../../public/icons/store.svg"
import Account from "../../../public/icons/account.svg"
import Cart from "../../../public/icons/cart.svg"
import Wishlist from "../../../public/icons/wishlist.svg"
import Hamburger from "../../../public/icons/hamburger-menu.svg"
import Link from "next/link"
import Categories from "../../components/Header/Categories" 
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Header = () => {
    return (
        
        <Disclosure as="nav" className="bg-white sticky top-0 z-50">
            <section class='py-2 bg-[#fad5d5] text-black text-center px-10'>
            <a href="/collections/end-of-season-sale-2024" class="announcement-bar__link link link--text focus-inset animate-arrow"><p class="announcement-bar__message">
                      <span>GIVA End of Season Sale is LIVE!</span>
                      
                    </p></a>
              
            </section>
            
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className=" items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>

                            <Hamburger className="w-6 h-6"/>
                            {/* <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" /> */}
                            {/* <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" /> */}
                        </DisclosureButton>
                        
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="/images/givaLogo.png"
                                className="h-8 w-auto"
                            />
                        </div>
                        
                        
                    </div>
                    <div className='w-full flex justify-center max-sm:hidden'>
                    <input type="text" placeholder="search-jwellery" className='w-[50%] border-2 border-gray-300  bg-white-transparent p-2 rounded-md '/>
                    </div>
                    <div className=" flex gap-2 md:gap-6 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a
                        href={"/store"}
                            className="flex-col items-center justify-center "
                        >
                            <div className='flex justify-center'>
                            <Store className="w-6 h-6" />
                            </div>
                            <span className='hidden md:block'>store</span>

                        </a>

                        {/* Profile dropdown */}
                        
                      
                                    <a href='/register' className="flex-col items-center justify-center ">
                                        <div className='flex justify-center'>
                                            <Account className=" w-6 h-6" />
                                        </div>
                                        <span className='hidden md:block'>Account</span>


                                    </a>

                            
                            
                        <div className="flex-col items-center">
                            <div className='flex justify-center'>
                                <Cart className=" w-6 h-6" />
                            </div>
                            <span className='hidden md:block'>cart</span>
                        </div>
                        <div className="flex-col items-center justify-center ">
                            <div className='flex justify-center'>
                                <Wishlist className=" w-6 h-6 " />
                            </div>
                            <span className='hidden md:block'>wishlist</span>
                        </div>
                        
                    </div>
                    
                </div>
                <Categories/>
          
                
            </div>

            <DisclosurePanel className="sm:hidden">
                
                <div className="space-y-1 px-2 pb-3 pt-2">
                    MOBILE VIEW
                </div>
                
                
                
            </DisclosurePanel>
        </Disclosure>
    )
}

export default Header