import React, { useEffect, useState } from 'react';
import { aboutImg } from '../assets';
import { IoIosArrowUp } from "react-icons/io";

function About({ setIsOpen }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id='about' className='relative py-[95px] container px-[10px] sm:px-[15px] md:px-[100px] lg:px-[80px] mx-auto'>
      <div className='text-center'>
        <h1 className='text-[36px] mb-[21px] uppercase text-black font-bold'>company at a glance</h1>
        <span className='inline-block w-[70px] h-[3px] bg-[#3db7ef]'></span>
      </div>
      <div className='flex flex-wrap flex-col lg:flex-row  justify-between items-start mt-[50px]'>
        <div className='flex-1'>
          <img src={aboutImg} alt="track" />
        </div>
        <div className='flex-1 max-lg:mt-[50px]'>
          <div className='flex items-start flex-col '>
            <p className='mb-[10px] lg:text-left text-center leading-[1.5] font-light text-[16px]'>
            Our transportation company with 30 years of experience is you best choice for shipping cargo of any size, storage, packing or delivering wares to your customers. Our professional employees will take care of your goods, whenever you send them.
            </p>
            <p className='my-[10px]  lg:text-left text-center leading-[1.5] font-light text-[16px]'>
            You are granted complete control over the process of delivery by phone or by our mobile app. Your freight is tracked every step of the way. We provide a high standard of shipping, regardless of its volume. If your company needs to establish a supply chain, we have prepared several readymade solutions with flexible pricing rates for you. Our urgent cargo services offer defined time frames for convenience of your business. Our supply chain services include shipping, warehousing, packaging, quality control and distribution.
            </p>
            <button onClick={() => setIsOpen(true)} className='transition-all duration-300 hover:bg-[#2e7dab] mt-[20px] font-bold py-[14px] px-[36px] text-[16px] text-white bg-[#3db7ef] uppercase cursor-pointer'>
              contact us
            </button>
          </div>
        </div>
      </div>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className='w-[50px] h-[50px] cursor-pointer bg-[#434345] flex items-center justify-center rounded-full fixed right-[40px] bottom-[40px] shadow-2xl z-50 transition-opacity duration-300'
        >
          <IoIosArrowUp color='white' />
        </button>
      )}
    </section>
  );
}

export default About;
