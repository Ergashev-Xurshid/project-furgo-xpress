import React, { useState } from 'react'
import { left, logo, menu } from '../assets'
import { menuLinks } from '../utils/constanta'

function Navbar() {

  const [isActive, setIsActive] = useState(1)
  const [isMenu, setIsMenu] = useState(false)

  return (
    <header>
      <div className='relative mx-auto'>
        <ul className='hidden lg:flex items-center justify-center py-[15px]'>
          <li className='flex items-center justify-center'>
            <i></i>
            <a className=' text-[16px]  font-[350] tracking-[0.32px] transition-all duration-300 ease-in hover:text-[#3db7ef]' href="mailto:towncargo.info@gmail.com">speedyhiring.info@gmail.com</a>
          </li>
          <li className='ml-[60px] flex items-center justify-center'>
            <i></i>
            <p className=' text-[16px] font-[350] tracking-[0.32px]'>Mon-Sat: 08:00-17:00</p>
          </li>
          <li className='ml-[60px] flex items-center justify-center'>
            <i></i>
            <a className=' text-[16px] font-[350] tracking-[0.32px] transition-all duration-300 ease-in hover:text-[#3db7ef]' href="tel:16155383883">+16155383883</a>
          </li>
        </ul>
        {/* <div onClick={()=> setIsMenu(!isMenu)}>
          <div className='w-[60px] h-[60px]'>
            <img src={isMenu ? left : menu} className='w-[100%] h-[100%]' alt="humburger" />
          </div>
        </div> */}
        <nav className={`bg-[#172646] w-full  hidden lg:block          `}>  
          <div className='min-h-[76px] bg-[#3db7ef] py-[10px]  '>
            <img className='w-[76px] h-[76px] lg:w-[110px] lg:h-[110px] mx-auto' src={logo} alt="logo" />
          </div>
          <ul className="flex justify-center py-[14px] ">
            {menuLinks.map((item, idx) => (
              <li
                key={item.id}
                onClick={() => setIsActive(item.id)}
                className={`link-after px-[27px]  tracking-[0.32px]
                ${menuLinks.length - 1 === idx ? "border-none" : "border-r-1"}
                relative cursor-pointer :text-[#3db7ef]
                ${isActive === item.id ? " menu-nav text-white" : "text-white"}`}>
                <a
                  className={`
                  relative inline-block
                  transition-all duration-300 ease-in
                  font-bold text-[15px] border-gray-100
                `}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar