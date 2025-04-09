import React, { useState } from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { LuClock9 } from "react-icons/lu"
import { FaPhoneAlt } from "react-icons/fa"
import Humburger from './Humburger'
import { menuLinks } from '../utils/constanta'
import { logo } from '../assets'

const Navbar = () => {
  const [isActive, setIsActive] = useState("home")

  return (
    <header className='w-full'>
      {/* Yuqori kontaktlar - faqat katta ekranlar uchun */}
      <ul className='hidden  lg:flex items-center justify-center py-[15px]'>
        <li className='flex items-center gap-2'>
          <AiOutlineMail className='text-[#3db7ef]' />
          <a className='text-[16px] font-[350] hover:text-[#3db7ef]' href="mailto:speedyhiring.info@gmail.com">speedyhiring.info@gmail.com</a>
        </li>
        <li className='ml-[60px] flex items-center gap-2'>
          <LuClock9 className='text-[#3db7ef]' />
          <p className='text-[16px] font-[350]'>Mon-Sat: 08:00-17:00</p>
        </li>
        <li className='ml-[60px] flex items-center gap-2'>
          <FaPhoneAlt className='text-[#3db7ef]' />
          <a className='text-[16px] font-[350] hover:text-[#3db7ef]' href="tel:16155383883">+16155383883</a>
        </li>
      </ul>

      <div className='lg:hidden fixed top-0 left-0 w-full px-4 py-4 flex items-center justify-between bg-white z-99 shadow-2xl'>
        <Humburger />
        <h1 className="absolute left-1/2 -translate-x-1/2 font-bold text-black text-xl">Town Cargo</h1>
        <div className="w-8 h-6"></div>
      </div>


      {/* Katta ekran navbar menyu */}
      <nav className="z-[99] bg-[#172646] w-full hidden lg:block">
        <div className='min-h-[76px] bg-[#3db7ef] py-[10px] flex justify-center '>
          <img className='w-[110px] h-[110px]  md:block' src={logo} alt="logo" />
        </div>
        <ul className="flex justify-center py-[14px] ">
          {menuLinks.map((item, idx) => (
            <li
              key={item.id}
              onClick={() => setIsActive(item.id)}
              className={`link-after px-[27px] ${isActive === item.id ? 'text-[#3db7ef] menu-nav' : 'text-white'} font-bold cursor-pointer`}
            >
              <a className='inline-block relative' href={`#${item.id}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
