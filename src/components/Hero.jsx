import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import hero from '../assets/hero.png'
import hero_vd from '../assets/hero_vd.mp4'
import { logos } from '../utils/logos'
import { fadeIn } from '../variants'

export const Hero = () => {
  return (
    <div
      className='h-[600px] relative mt-15'>
      <div className='flex h-[100%] box-border overflow-hidden'>
        <div
          className="w-[100vw] box-border overflow-hidden h-[600px] absolute z-0 opacity-[92%]"
          style={{ backgroundImage: `url(${hero})`, objectFit: 'cover' }}
        ></div>
        <video
          src={hero_vd}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className="object-cover w-full h-auto box-border overflow-hidden"
        />
      </div>
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="absolute flex top-[10%] ">
        <div className="flex flex-col pt-20 px-10">
          <p className='font-altbold text-5xl xl:text-7xl text-[#8bcbef]'>
                        TECNOLOGÍA
          </p>
          <p className='font-altbold text-6xl xl:text-8xl text-black'>
                        de ANÁLISIS
          </p>
          <p className='font-altbold text-6xl xl:text-8xl text-black'>
                        y MEDICIÓN
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="absolute flex top-[45%] left-[50%] pl-[100px] lg:pl-[300px] mr-10">
        <div className="hidden md:flex flex-col items-end">
          <p className='font-rubik text-md xl:text-xl text-black'>
                        Somos expertos en servicios analíticos con tecnologías de última generación que nos permiten brindar soluciones de la más alta calidad.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-2 mt-5">
            {
              logos.map(logo => (
                <div key={logo.id} className="w-[35px] h-[35px] xl:w-[55px] xl:h-[55px] border-2 border-[#8bcbef] bg-white rounded-full overflow-hidden">
                  <Tilt tiltMaxAngleX={5.5} tiltMaxAngleY={5.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={'black'} >
                    <img src={logo.img} className='w-full h-full' />
                  </Tilt>
                </div>
              ))
            }
          </div>
        </div>
      </motion.div>
    </div>
  )
}