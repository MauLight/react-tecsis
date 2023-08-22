import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import hero from '../assets/hero.png'
import { fadeInSmall } from '../variants'

export const Contact = () => {

  const form = useRef()

  return (
    <div
      style={{ backgroundImage: `url(${hero})`, objectFit: 'cover' }}
      id='contact'
      className='flex gap-x-10 min-h-[700px] w-screen border-y-2 border-white justify-end'
    >

      <motion.div
        variants={fadeInSmall('down', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col lg:pr-[275px] pt-24 w-full md:w-1/2 px-10 md:px-0"
      >
        <form ref={form} onSubmit={() => alert('Submitted!')}>
          <div className="flex flex-col justify-start gap-y-2 w-full lg:w-[35vw]">
            <h1 className='font-alt text-black text-5xl my-5 text-start'>{'Contacto_'}</h1>
            <label className='font-carbon text-sm text-black' htmlFor='name'>Nombre:</label>
            <input required className='rounded-r-full h-8 w-full text-[#8bcbef] lg:w-[40%]' type='text' id='name' name="user_name" />
            <label className='font-carbon text-sm text-black' htmlFor='email'>Email:</label>
            <input required className='rounded-r-full h-8 w-full text-[#8bcbef] lg:w-[60%]' type='email' id='email' name="user_email" />
            <label className='font-carbon text-sm text-black' htmlFor='message'>Mensaje:</label>
            <textarea required className='rounded-r-full h-8 w-full h-[120px] text-[#8bcbef] lg:w-4/5' type='text' id='message' name="message" />
            <div className='flex justify-end items-center mt-5'>
              <motion.button
                type='submit'
                value="Send"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className='font-carbon text-[12px] border-2 p-5 rounded-full w-[90px] h-[90px] bg-[#393939] hover:bg-white hover:text-[#8bcbef] active:bg-[#8bcbef] active:text-white'
              >submit</motion.button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
