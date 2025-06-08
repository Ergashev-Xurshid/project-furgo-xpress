import React, { useState } from 'react'
import { toast } from 'react-toastify';
function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
    type: "",
  });

  const botToken = "8017008549:AAEIl6pyQPJ56mzGhQoPtBtxAPGUhyLhNeY";
  const chatId = "6539046942";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `
      Yangi xabar!\n
      Ism: ${formData.name}\n
      Familya: ${formData.lastname}\n
      Tel: ${formData.phone}\n
      Email: ${formData.email}\n
      Rol: ${formData.type}\n
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
        setFormData({
          name: "",
          lastname: "",
          phone: "",
          email: "",
          message: "",
          type: "",
        });
      } else {
        toast.error("Xabar yuborilmadi!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Xatolik ro'y berdi!");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Furgoxpress | Get in Touch with Our Freight Experts</title>
        <meta
          name="description"
          content="Need freight or cargo transport? Contact Furgoxpress today for reliable logistics solutions across Uzbekistan. Our team is ready to help."
        />
        <meta
          name="keywords"
          content="contact Furgoxpress, freight contact, logistics support, transport help, get in touch, Uzbekistan cargo services"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Furgoxpress" />

        <meta property="og:title" content="Contact Us | Furgoxpress Freight Services" />
        <meta
          property="og:description"
          content="Have questions or need logistics help? Contact Furgoxpress and we’ll help you move your goods quickly and safely across Uzbekistan."
        />
        <meta property="og:url" content="https://www.furgoxpress.uz/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/about-img.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get in Touch | Furgoxpress" />
        <meta
          name="twitter:description"
          content="Reliable freight support from the Furgoxpress team. Reach out to us now."
        />
        <meta name="twitter:image" content="/about-img.png" />

        <link rel="canonical" href="https://www.furgoxpress.uz/contact" />
      </Helmet>
      <section id='contacts' className='bg-[#172646] py-[95px] px-[10px] sm:px-[15px] md:px-[50px] lg:px-[80px]'>
        <div className='flex flex-col md:flex-row items-center gap-4 text-white'>
          <form onSubmit={handleSubmit} className='flex-1 p-2'>
            <h2 className='font-bold  text-[20px] text-white mb-[20px]'>
              Contact Form
            </h2>
            <div className='w-full mb-[25px]'>
              <label className='inline-block mb-[10px]'>Select your role:</label>
              <div className='flex items-center gap-4' >
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input required type="radio" name='type' value="Owner" onChange={handleChange} />
                  <p>Owner</p>
                </label>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input required type="radio" name='type' value="Company" onChange={handleChange} />
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
                className='outline-hidden bg-white text-black text-[16px] py-[15px] px-[20px] font-light w-[100%]  lgplus:w-[50%]'
              />
              <input
                required
                value={formData.lastname}
                name='lastname'
                onChange={handleChange}
                type="text"
                placeholder='Your last name'
                className='outline-hidden bg-white  text-black text-[16px] py-[15px] px-[20px] font-light w-[100%] lgplus:w-[49%]'
              />
              <input
                required
                value={formData.phone}
                name='phone'
                onChange={handleChange}
                className='outline-hidden bg-white text-black text-[16px] py-[15px] px-[20px] font-light w-[100%]'
                type="number" />
              <input
                required
                value={formData.email}
                name='email'
                onChange={handleChange}
                className='outline-hidden bg-white text-black text-[16px] py-[15px] px-[20px] font-light w-[100%]'
                type="email"
                placeholder='Your e-mail' />
              <textarea
                required
                value={formData.message}
                name='message'
                onChange={handleChange}
                className='
                outline-none bg-white text-black text-[16px] 
                py-[15px] px-[20px] font-light w-full 
                resize-y h-[54px] min-h-[54px] max-h-[110px]'
                placeholder='Message'
              ></textarea>
              <button type='submit' className=' mx-auto uppercase transition-all  duration-300 hover:bg-[#2e7dab]  mt-[20px] font-bold py-[14px] px-[36px] text-[16px] text-white bg-[#3db7ef]  cursor-pointer '>Send Message</button>
            </div>
          </form>
          <div className='w-full md:flex-1'>
            <div className="w-full h-[450px]">
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
    </>
  )
}

export default Contact