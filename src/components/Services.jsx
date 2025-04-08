import React from 'react'
import { servicesItem } from '../utils/constanta'

function Services() {
  return (
    <section className='py-[95px] container bg-[#f5f5f5] px-[10px] sm:px-[15px] md:px-[100px] lg:px-[80px] mx-auto'>
          <div className='mx-auto text-center w-full lg:w-[50%]'>
            <h1 className='text-[36px] mb-[21px] uppercase text-black font-bold'>our services</h1>
            <span className='inline-block w-[70px] h-[3px] bg-[#3db7ef]'></span>
            <p className='mb-[10px] mt-[50px] leading-[1.5] font-normal text-[16px]'>
              Our transportation company has been offering a vast set of reliable solutions for businesses and individuals all over the world since our establishment.
            </p>
          </div>
          <div>
            { servicesItem.map((item,i)=>(
              <div key={i}>
                <img src={item.image} alt={item.title} />
                <div className='label-shape bg-[#3db7ef] text-white px-6 py-2 text-lg font-medium w-fit'>
                  <i className='hidden'></i>
                  <h3 className='font-normal text-[20px] text-white capitalize'>{item.title}</h3>
                </div>
              </div>
            ))
          
            }
          </div>
    </section>
  )
}

export default Services