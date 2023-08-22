import React from 'react'
import { motion } from 'framer-motion'
import { brands } from '../utils/brands'

export const Products = () => {
  return (
    <div className='mt-20 mb-34 flex flex-col mx-10 mb-20 items-center'>
      <div className="flex flex-wrap gap-x-10 gap-y-5 justify-center">
        {
          brands.map(elem => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              key={elem.id}
              className='flex md:flex-col items-center'>
              <div
                className="rounded-[30px] w-64 overflow-hidden"
              >
                <img className='object-cover w-full h-full' src={elem.img} />
              </div>
              <div className="flex w-[250px] justify-center">
                <p className='font-rubik text-black text-wrap'>{elem.description}</p>
              </div>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}
