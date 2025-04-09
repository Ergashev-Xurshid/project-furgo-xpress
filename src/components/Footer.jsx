import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterest, FaVimeoV, FaGoogle, FaRss } from "react-icons/fa";
import { logo } from '../assets';

function Footer() {
  return (
    <footer className='py-[95px] container px-[10px] text-center sm:px-[15px] md:px-[100px] lg:px-[80px] mx-auto'>
      <div className='min-h-[76px]  py-[10px]  '>
        <a href="#">
          <img className='w-[76px] h-[76px] lg:w-[100px] lg:h-[100px] mx-auto' src={logo} alt="logo" />
        </a>
      </div>
      <div className='flex items-center justify-center gap-1 mt-5 '>
        <a href="#">
          <FaFacebookF size={24} className=' text-[#9b9b9b] transition-all duration-150  px-[6px] cursor-pointer hover:text-[#2e7dab]   ' />
        </a>
        <a href="#">
          <FaTwitter size={30} className=' text-[#9b9b9b]  transition-all duration-150 px-[6px] cursor-pointer hover:text-[#2e7dab]   ' />
        </a>
        <a href="#">
          <FaPinterest size={30} className=' text-[#9b9b9b]  transition-all duration-150 px-[6px] cursor-pointer hover:text-[#2e7dab]   ' />
        </a>
        <a href="#">
          <FaVimeoV size={30} className=' text-[#9b9b9b]  transition-all duration-150 px-[6px] cursor-pointer hover:text-[#2e7dab]   ' />
        </a>
        <a href="#">
          <FaGoogle size={30} className=' text-[#9b9b9b]  transition-all duration-150 px-[6px] cursor-pointer hover:text-[#2e7dab]   ' />
        </a>
        <a href="#">
          <FaRss size={30} className=' text-[#9b9b9b] transition-all duration-150  px-[6px] cursor-pointer hover:text-[#2e7dab]   ' />
        </a>
      </div>
      <p className='text-[#9b9b9b] text-[16px] mt-5'>© 2025 Town Cargo All rights reserved</p>
    </footer>
  )
}

export default Footer