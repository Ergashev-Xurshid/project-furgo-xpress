import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import { HomeTitle } from '../utils/constanta';

function Home() {
  const [isTitle, setIsTitle] = useState(1);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setIsTitle(prev => {
        const next = prev + 1;
        return next > HomeTitle.length ? 1 : next;
      });
    }, 5000); 

    return () => clearInterval(interval);
  }, [isTitle]);

  const activeItem = HomeTitle.find(item => item.id === isTitle);

  return (
    <section id='home' className='relative home-bg z-90 h-[590px] w-full flex flex-col items-center justify-center before:absolute before:inset-0 before:bg-black before:opacity-50 before:z-[-1]'>
      {activeItem && (
        <div
          key={activeItem.id} 
          data-aos="fade-up"
          className='text-center w-full lg:w-[40%]'
        >
          <h1 className='text-white text-[28px] sm:text-[54px] font-bold tracking-[2px]'>{activeItem.title}</h1>
          <p className='mt-[30px] text-white text-[20px] sm:text-[22px]'>{activeItem.text}</p>
        </div>
      )}

      <ul className='absolute bottom-[50px] flex justify-between w-[80px] mt-[50px]'>
        {HomeTitle.map(item => (
          <li
            key={item.id}
            onClick={() => setIsTitle(item.id)}
            className={`
              hover:scale-[1.5] 
              w-[10px] h-[10px] rounded-full cursor-pointer  transition-all duration-300 
              ${isTitle === item.id ? 'bg-[#3db7ef] scale-[1.5]' : 'bg-white opacity-50'
            }`}
          ></li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
