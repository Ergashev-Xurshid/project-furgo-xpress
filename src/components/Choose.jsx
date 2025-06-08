import React from 'react'
import { Helmet } from 'react-helmet';
import { BiSolidLike } from "react-icons/bi";
import { FaUsers, FaLock } from "react-icons/fa";
function Choose() {
  return (
    <>
      <Helmet>
        <title>Why Choose Furgoxpress | Reliable, Safe & Timely Freight</title>
        <meta
          name="description"
          content="Discover why businesses across Uzbekistan trust Furgoxpress for their freight needs. Learn about our reliability, safety, timely deliveries, and customer-first approach."
        />
        <meta
          name="keywords"
          content="why choose us, freight you can trust, logistics reliability, safe delivery, Furgoxpress quality, customer-focused transport"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Furgoxpress" />

        <meta property="og:title" content="Why Choose Furgoxpress | Trusted Freight Company" />
        <meta
          property="og:description"
          content="See what makes Furgoxpress the top choice for freight and cargo delivery across Uzbekistan. Reliable, secure, and always on time."
        />
        <meta property="og:url" content="https://www.furgoxpress.uz/why-choose-us" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/about-img.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Furgoxpress?" />
        <meta
          name="twitter:description"
          content="Furgoxpress stands out with a strong track record in safe and timely freight delivery across Uzbekistan."
        />
        <meta name="twitter:image" content="/about-img.png" />

        <link rel="canonical" href="https://www.furgoxpress.uz/why-choose-us" />
      </Helmet>
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
    </>
  )
}



export default Choose