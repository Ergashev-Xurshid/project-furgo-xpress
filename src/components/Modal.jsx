
import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { toast } from 'react-toastify';


function Modal({setIsOpen}) {

  const [formData, setFormData] = useState({
    name:"",
    lastname:"",
    phone:+1,
    email: "",
    message: "",
  });
  
  const botToken = "8017008549:AAEIl6pyQPJ56mzGhQoPtBtxAPGUhyLhNeY";
  const chatId = "6539046942";
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const text = `
      Yangi xabar!\n\n 
      Ism: ${formData.name}\n\n 
      Familya: ${formData.lastname}\n\n
      Tel: ${formData.phone}\n\n
      Email: ${formData.email}\n\n 
      Xabar: ${formData.message}`;
  
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });
  
      if (response.ok) {
        toast.success("Xabar yuborildi!");
        setIsOpen(false)
        setFormData({ 
          name: "",
          lastname:"",
          phone: +1,
          email: "",
          message: "", });
      } else {
        toast.error("Xabar yuborilmadi!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Xabar yuborilmadi!");
    }
  };
  


  return (
    <div className='max-w-[500px] fixed top-[15%] left-1/2 -translate-x-1/2'>
      <form onSubmit={handleSubmit} className='relative border border-[#888] rounded-xl shadow-xl bg-white p-5'>
          <div onClick={()=>setIsOpen(false)} className='absolute text-[#aaa] hover:text-black top-[2%] right-[2%] cursor-pointer'>
            <IoCloseSharp size={18} />
          </div>
          <div className='w-full mb-[25px]'>
            <label className='inline-block mb-[10px] text-[#ccc]'>Select your role:</label>
            <div className='flex items-center gap-4' >
              <label className='text-[#ccc] flex items-center gap-2 cursor-pointer'>
                <input
                  required type="radio" name='type' className='cursor-pointer' />
                <p>Owner</p>
              </label>
              <label className='text-[#ccc] flex items-center gap-2 cursor-pointer'>
                <input
                  required type="radio" name='type' className='cursor-pointer' />
                <p>Company</p>
              </label>
            </div>
          </div>
          <div className='flex flex-wrap gap-2 justify-between'>
            <input
              required
              onChange={handleChange}
              value={formData.name}
              name='name'
              type="text"
              placeholder='Your first name'
              className='outline-hidden bg-white border border-[#ccc] text-black text-[16px] py-[15px] px-[20px] font-light w-[100%]  lgplus:w-[50%]'
            />
            <input
              required
              value={formData.lastname}
              name='lastname'
              onChange={handleChange}
              type="text"
              placeholder='Your last name'
              className='outline-hidden bg-white border border-[#ccc]  text-black text-[16px] py-[15px] px-[20px] font-light w-[100%] lgplus:w-[49%]'
            />
            <input
              required
              value={formData.phone}
              name='phone'
              onChange={handleChange}
              className='outline-hidden bg-white border border-[#ccc] text-black text-[16px] py-[15px] px-[20px] font-light w-[100%]'
              type="number" />
            <input
              required
              value={formData.email}
              name='email'
              onChange={handleChange}
              className='outline-hidden bg-white border border-[#ccc] text-black text-[16px] py-[15px] px-[20px] font-light w-[100%]'
              type="email"
              placeholder='Your e-mail' />
            <textarea
              required
              value={formData.message}
              name='message'
              onChange={handleChange}
              className=' border border-[#ccc]
                outline-none bg-white text-black text-[16px] 
                py-[15px] px-[20px] font-light w-full 
                resize-y h-[54px] min-h-[54px] max-h-[110px]'
              placeholder='Message'
            ></textarea>
            <button type='submit' className=' mx-auto uppercase transition-all  duration-300 hover:bg-[#2e7dab]  mt-[20px] font-bold py-[14px] px-[36px] text-[16px] text-white bg-[#3db7ef]  cursor-pointer '>Send Message</button>
          </div>
        </form>
    </div>
    
  )
}

export default Modal