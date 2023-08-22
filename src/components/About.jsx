import React from 'react'
import { motion } from 'framer-motion'
import { about } from '../utils/about'
import slider_bg from '../assets/slider_bg.png'
import { fadeInSmall } from '../variants'

export const About = () => {
  return (
    <div
      style={{ backgroundImage: `url(${slider_bg})`, objectFit: 'cover' }}
      className='h-[600px] w-screen flex justify-evenly items-center'>
      {
        about.map(elem => (
          <motion.div
            variants={fadeInSmall(elem.slide, 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            key={elem.id}
            className="flex flex-col justify-center items-center">
            <div className="flex w-[200px] h-[200px] rounded-full border-2 overflow-hidden">
              <img className='w-full h-full' src={elem.img} />
            </div>
            <h1 className='text-item font-alt text-white text-xl mt-5'>{elem.name}</h1>
            <h1 className='font-rubik text-white text-md'>{elem.title}</h1>
          </motion.div>
        ))
      }
    </div>
  )
}
