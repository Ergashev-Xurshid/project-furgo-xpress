import React from 'react'
import { BiSolidLike } from "react-icons/bi";
import { FaUsers, FaLock } from "react-icons/fa";
function Choose() {
  return (
    <section id='why' className='py-[95px]  px-[10px] bg-[#172646] sm:px-[15px] md:px-[100px] lg:px-[80px] mx-auto'>
      <div className='text-center'>
        <h1 className='text-[36px] mb-[21px] uppercase text-white font-bold'>WHY CHOOSE US</h1>
        <span className='inline-block w-[70px] h-[3px] bg-[#3db7ef]'></span>
      </div>
      <div className='flex flex-col lg:flex-row  justify-center w-[90%] mx-auto mt-[50px]'>
      <div className='max-lg:mt-[30px] flex flex-col lg:flex-row max-lg:text-center justify-center  gap-5'>
          <span className='w-[80px] h-[80px] rounded-full bg-[#3db7ef] flex items-center justify-center mx-auto'>
            <BiSolidLike color='white' size={44} />
          </span>
          <div className='w-full lg:w-[60%] mx-auto'>
            <h2 className='font-bold text-white text-[22px] mb-[10px]'>Best Service</h2>
            <p className='mt-[10px] text-[16px] font-light text-white'>Our mission is to attract and retain customers by providing Best in Class transportation solutions and fostering a profitable, disciplined culture of safety, service, and trust.</p>
          </div>
        </div>
        <div className='max-lg:mt-[30px] flex flex-col lg:flex-row max-lg:text-center justify-center  gap-5'>
          <span className='w-[80px] h-[80px] rounded-full bg-[#3db7ef] flex items-center justify-center mx-auto'>
            <FaUsers color='white' size={44} />
          </span>
          <div className='w-full lg:w-[60%] mx-auto'>
            <h2 className='font-bold text-white text-[22px] mb-[10px]'>Best Service</h2>
            <p className='mt-[10px] text-[16px] font-light text-white'>Our mission is to attract and retain customers by providing Best in Class transportation solutions and fostering a profitable, disciplined culture of safety, service, and trust.</p>
          </div>
        </div>
        <div className='max-lg:mt-[30px] flex flex-col lg:flex-row max-lg:text-center justify-center  gap-5'>
          <span className='w-[80px] h-[80px] rounded-full bg-[#3db7ef] flex items-center justify-center mx-auto'>
            <FaLock color='white' size={44} />
          </span>
          <div className='w-full lg:w-[60%] mx-auto'>
            <h2 className='font-bold text-white text-[22px] mb-[10px]'>Best Service</h2>
            <p className='mt-[10px] text-[16px] font-light text-white'>Our mission is to attract and retain customers by providing Best in Class transportation solutions and fostering a profitable, disciplined culture of safety, service, and trust.</p>
          </div>
        </div>
      </div>
    </section>
  )
}



export default Choose