import React from 'react'
import { newsItems } from '../utils/constanta'
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { Helmet } from 'react-helmet';

function News() {
  return (
    <>
      <Helmet>
        <title>Furgoxpress News & Updates | Freight Industry Insights</title>
        <meta
          name="description"
          content="Stay informed with the latest news, updates, and insights from Furgoxpress. Get updates on freight trends, logistics innovations, and company developments."
        />
        <meta
          name="keywords"
          content="Furgoxpress news, logistics updates, freight insights, transport trends, Uzbekistan trucking news"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Furgoxpress" />

        <meta property="og:title" content="Latest News | Furgoxpress Freight Updates" />
        <meta
          property="og:description"
          content="Explore the latest news and updates from Furgoxpress, including logistics trends and transport industry developments in Uzbekistan."
        />
        <meta property="og:url" content="https://www.furgoxpress.uz/news" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/about-img.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Furgoxpress News & Insights" />
        <meta
          name="twitter:description"
          content="Get the latest freight industry news and updates from Furgoxpress."
        />
        <meta name="twitter:image" content="/about-img.png" />

        <link rel="canonical" href="https://www.furgoxpress.uz/news" />
      </Helmet>
      <section id='new' className='py-[95px]  px-[10px]  sm:px-[15px] md:px-[100px] lg:px-[80px] '>
        <div className='text-center'>
          <h1 className='text-[32px] mdplus:text-[36px] mb-[21px] uppercase text-black font-bold'>latest news</h1>
          <span className='inline-block w-[70px] h-[3px] bg-[#3db7ef]'></span>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 mt-[50px]">
          {newsItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center max-lg:w-full  lg:w-1/3">
              <div className="w-full h-[270px] mt-10">
                <img className="w-full h-full object-cover" src={item.img} alt={item.title} />
              </div>

              <div className="flex flex-col max-lg:items-center  mt-4">
                <h2 className="font-bold text-[#3db7ef]  text-[20px]">
                  {item.title}
                </h2>

                <div className="mt-[15px] flex items-center gap-3 text-[#b7b7b7] ">
                  <HiMiniCalendarDateRange />
                  <p className="font-light text-[16px]">{item.date}</p>
                </div>

                <p className="text-black max-lg:text-center font-light text-[16px] mt-[15px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  )
}

export default News