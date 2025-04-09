import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuLinks } from '../utils/constanta'

const Humburger = () => {
  const [open, setOpen] = useState(false)
  const [isActive, setIsActive] = useState("home")

  return (
    <div className="lg:hidden">
      {/* Overlay va menyu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Qoraygan fon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 w-full h-full  z-40"
              onClick={() => setOpen(false)}
            />

            {/* Chapdan chiqadigan menyu */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="fixed top-[56px] left-0 w-[50%] h-full bg-[#172646] z-45 p-6"
            >
              <ul className="text-white space-y-6 ">

                {menuLinks.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      setIsActive(item.id)
                      setOpen(false)
                    }}
                    className={`text-lg font-semibold cursor-pointer hover:text-[#3db7ef] ${isActive === item.id ? 'text-[#3db7ef] ' : ''}`}
                  >
                    <a href={`#${item.id}`}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hamburger tugmasi */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-[100] w-8 h-6 flex flex-col justify-between"
      >
        <span className={`h-[3px] bg-black transition-all duration-300 ${open ? '-rotate-45 w-1/2 translate-x-2 translate-y-1' : ''}`} />
        <span className={`h-[3px] bg-black transition-all duration-300 ${open ? 'translate-x-2' : ''}`} />
        <span className={`h-[3px] bg-black transition-all duration-300 ${open ? 'rotate-45 w-1/2 translate-x-2 -translate-y-1' : ''}`} />
      </button>
    </div>
  )
}

export default Humburger
