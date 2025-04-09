import React from 'react'

function Contact() {
  return (
    <section className='bg-[#172646] py-[95px] px-[10px] sm:px-[15px] md:px-[50px] lg:px-[80px]'>
      <div className='flex flex-col mdplus:flex-row items-center gap-4 text-white'>
        <form className='flex-1 p-2'>
          <h2 className='font-bold  text-[20px] text-white mb-[20px]'>
            Contact Form
          </h2>
          <div className='w-full mb-[25px]'>
            <label className='inline-block mb-[10px]'>Select your role:</label>
            <div className='flex items-center gap-4' >
              <label className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name='type' className='cursor-pointer' />
                <p>Owner</p>
              </label>
              <label className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name='type' className='cursor-pointer' />
                <p>Company</p>
              </label>
            </div>
          </div>
          <div className='flex flex-wrap gap-2 justify-between'>
            <input
              type="text"
              placeholder='Your first name'
              className='outline-hidden bg-white text-black text-[16px] py-[15px] px-[20px] font-light w-[100%]  lgplus:w-[50%]'
            />
            <input
              type="text"
              placeholder='Your last name'
              className='outline-hidden bg-white  text-black text-[16px] py-[15px] px-[20px] font-light w-[100%] lgplus:w-[49%]'
            />
            <input
              className='outline-hidden bg-white text-black text-[16px] py-[15px] px-[20px] font-light w-[100%]'
              type="number" />
            <input
              className='outline-hidden bg-white text-black text-[16px] py-[15px] px-[20px] font-light w-[100%]'
              type="email"
              placeholder='Your e-mail' />
            <textarea
              className='
                outline-none bg-white text-black text-[16px] 
                py-[15px] px-[20px] font-light w-full 
                resize-y h-[54px] min-h-[54px] max-h-[110px]'
              placeholder='Message'
            ></textarea>
            <button type='submit' className=' mx-auto uppercase transition-all  duration-300 hover:bg-[#2e7dab]  mt-[20px] font-bold py-[14px] px-[36px] text-[16px] text-white bg-[#3db7ef]  cursor-pointer '>Send Message</button>
          </div>
        </form>
        <div className=' w-full mdplus:flex-1'>
          <div className="w-full h-[200px] mdplus:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d103537.0891584459!2d-86.662692!3d35.811371!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886389625c70c971%3A0xdd8ee054cb8149b0!2s8331%20Horton%20Hwy%2C%20College%20Grove%2C%20TN%2037046!5e0!3m2!1sen!2sus!4v1744205687381!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact