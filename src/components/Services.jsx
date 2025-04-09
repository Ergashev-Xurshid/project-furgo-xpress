import React from 'react'
import { servicesItem } from '../utils/constanta'
import { FaArrowRight } from "react-icons/fa";

function Services() {
  return (
    <section id='our' className=' py-[95px]  bg-[#f5f5f5] px-[10px] sm:px-[15px] md:px-[50px] lg:px-[80px] mx-auto'>
          <div className='mx-auto text-center w-full lg:w-[50%]'>
            <h1 className='text-[36px] mb-[21px] uppercase text-black font-bold'>our services</h1>
            <span className='inline-block w-[70px] h-[3px] bg-[#3db7ef]'></span>
            <p className='mb-[10px] mt-[50px] leading-[1.5] font-normal text-[16px]'>
              Our transportation company has been offering a vast set of reliable solutions for businesses and individuals all over the world since our establishment.
            </p>
          </div>
          <div className='flex justify-center  gap-10 flex-wrap mt-[50px] '>
            { servicesItem.map((item,i)=>(
              <div key={i} className='relative hover-item cursor-pointer w-[90%] md:w-[45%] lg:w-[30%] h-[250px] overflow-hidden'>
                <img className='w-full h-full object-cover' src={item.image} alt={item.title} />
                <div className=' absolute bottom-[20px] left-[-20px] transition-all duration-300 label-shape bg-[#3db7ef] text-white px-[40px]  text-lg font-medium w-fit'>
                  <div className='flex items-center gap-2'>
                    <span className='inline-block opacity-0  transition-all duration-300 '>
                    <FaArrowRight />
                    </span>
                  <h3 className='font-normal text-[20px] text-white capitalize'>{item.title}</h3>
                  </div>
                </div>
              </div>
            ))
          
            }
          </div>
    </section>
  )
}

export default Services