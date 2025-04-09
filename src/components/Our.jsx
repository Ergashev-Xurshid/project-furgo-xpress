import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import { caruselImg } from '../utils/constanta';

const Our = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: 'loop',
        arrows: false,
        pagination: false,
        drag: false, 
        perPage: 4,
        focus: 'center',
        autoScroll: {
          speed: 1,
          pauseOnHover: false,
          pauseOnFocus: false,
        },
        extensions: { AutoScroll },
      });

      splide.mount({ AutoScroll }); 
    }
  }, []);

  return (
    <section className='py-[95px] px-[10px] sm:px-[15px] md:px-[100px] lg:px-[80px]'>
      <div className='text-center'>
        <h1 className='text-[36px] mb-[21px] uppercase text-black font-bold'>latest news</h1>
        <span className='inline-block w-[70px] h-[3px] bg-[#3db7ef]'></span>
      </div>
      <div className="splide carusel h-[171px] mt-[50px]" ref={splideRef}>
        <div className="splide__track">
          <ul className="splide__list flex items-center">
            {caruselImg.map((item, index) => (
              <li key={item.id} className="splide__slide">
                <img
                  src={item.img}
                  alt="brend"
                  className={`
                  hover:scale-[1.1] transition-all duration-300
                  w-[150px]
                  ${index === 0 ? 'h-[171px]' : 'h-[50px]'}
                `}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Our;
