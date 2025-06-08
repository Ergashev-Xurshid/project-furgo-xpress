import React from 'react'
import { servicesItem } from '../utils/constanta'
import { FaArrowRight } from "react-icons/fa";
import { Helmet } from 'react-helmet';

function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Furgoxpress - Freight & Logistics Solutions</title>
        <meta
          name="description"
          content="Explore the professional freight and logistics services offered by Furgoxpress in Uzbekistan. From cargo delivery to full truckload and express transport, we’ve got you covered."
        />
        <meta
          name="keywords"
          content="freight services, logistics Uzbekistan, cargo delivery, full truckload, express transport, Furgoxpress services, yuk tashish xizmatlari"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Furgoxpress" />

        {/* Open Graph for social media */}
        <meta property="og:title" content="Furgoxpress Services | Professional Freight Transport" />
        <meta
          property="og:description"
          content="Discover our wide range of freight services including full truckload, express cargo, and secure logistics across Uzbekistan."
        />
        <meta property="og:url" content="https://www.furgoxpress.uz/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/about-img.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Furgoxpress" />
        <meta
          name="twitter:description"
          content="Efficient and secure freight solutions from Furgoxpress. We offer a full suite of logistics services in Uzbekistan."
        />
        <meta name="twitter:image" content="/about-img.png" />

        <link rel="canonical" href="https://www.furgoxpress.uz/services" />
      </Helmet>
      <section id='our' className=' py-[95px]  bg-[#f5f5f5] px-[10px] sm:px-[15px] md:px-[50px] lg:px-[80px] mx-auto'>
        <div className='mx-auto text-center w-full lg:w-[50%]'>
          <h1 className='text-[36px] mb-[21px] uppercase text-black font-bold'>our services</h1>
          <span className='inline-block w-[70px] h-[3px] bg-[#3db7ef]'></span>
          <p className='mb-[10px] mt-[50px] leading-[1.5] font-normal text-[16px]'>
            Our transportation company has been offering a vast set of reliable solutions for businesses and individuals all over the world since our establishment.
          </p>
        </div>
        <div className='flex justify-center  gap-10 flex-wrap mt-[50px] '>
          {servicesItem.map((item, i) => (
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
    </>
  )
}

export default Services