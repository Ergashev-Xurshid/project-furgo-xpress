import React from 'react'
import { aboutImg } from '../assets'

function About() {
  return (
    <section id='about' className='py-[95px] container px-[10px] sm:px-[15px] md:px-[100px] lg:px-[80px] mx-auto'>
      <div className='text-center'>
        <h1 className='text-[36px] mb-[21px] uppercase text-black font-bold'>company at a glance</h1>
        <span className='inline-block w-[70px] h-[3px] bg-[#3db7ef]'></span>
      </div>
      <div className='flex flex-wrap flex-col lg:flex-row  justify-between items-start mt-[50px]'>
        <div className='flex-1'>
          <img src={aboutImg} alt="track" />
        </div>
        <div className='flex-1 max-lg:mt-[50px]'>
          <div className='flex items-center flex-col '>
          <p className='mb-[10px] lg:text-left text-center leading-[1.5] font-light text-[16px]'>
            Our transportation company with 30 years of experience is you best choice for shipping cargo of any size, storage, packing or delivering wares to your customers. Our professional employees will take care of your goods, whenever you send them.
          </p>
          <p className='my-[10px]  lg:text-left text-center leading-[1.5] font-light text-[16px]'>
          You are granted complete control over the process of delivery by phone or by our mobile app. Your freight is tracked every step of the way. We provide a high standard of shipping, regardless of its volume. If your company needs to establish a supply chain, we have prepared several readymade solutions with flexible pricing rates for you. Our urgent cargo services offer defined time frames for convenience of your business. Our supply chain services include shipping, warehousing, packaging, quality control and distribution.
          </p>
          <button className='transition-all  duration-300 hover:bg-[#2e7dab]  mt-[20px] font-bold py-[14px] px-[36px] text-[16px] text-white bg-[#3db7ef] uppercase cursor-pointer '>contact us</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About