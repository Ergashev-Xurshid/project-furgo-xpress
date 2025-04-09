import React from 'react'
import { newsItems } from '../utils/constanta'
import { HiMiniCalendarDateRange } from "react-icons/hi2";

function News() {
  return (
    <section className='py-[95px]  px-[10px]  sm:px-[15px] md:px-[100px] lg:px-[80px] '>
      <div className='text-center'>
        <h1 className='text-[36px] mb-[21px] uppercase text-black font-bold'>latest news</h1>
        <span className='inline-block w-[70px] h-[3px] bg-[#3db7ef]'></span>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 mt-[50px]">
        {newsItems.map((item, i) => (
          <div key={i} className="flex flex-col items-center max-lg:w-full lg:w-1/3">
            <div className="w-full h-[270px] mt-10">
              <img className="w-full h-full object-cover" src={item.img} alt={item.title} />
            </div>

            <div className="flex flex-col items-center text-center mt-4">
              <h2 className="font-bold text-[#3db7ef] text-[20px]">
                {item.title}
              </h2>

              <div className="mt-[15px] flex items-center gap-3 text-[#b7b7b7]">
                <HiMiniCalendarDateRange />
                <p className="font-light text-[16px]">{item.date}</p>
              </div>

              <p className="text-black font-light text-[16px] mt-[15px]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default News