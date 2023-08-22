import React, { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { products } from '../utils/products'
import slider_bg from '../assets/slider_bg.png'

export const Carrousel = () => {

  const [text, setText] = useState(products[0])

  const handleSlider = (i) => {

    let aux = i ? i : 0
    const productFilter = products.filter((elem, index) => index === aux)
    console.log(productFilter)
    setText(productFilter[0])
    return productFilter
  }

  return (
    <div
      className='h-[700px] md:flex w-screen mt-15 bg-black items-center'
      style={{ backgroundImage: `url(${slider_bg})`, objectFit: 'cover' }}
    >
      <div className="md:w-1/2 h-[200px] py-10 px-10 flex flex-col">
        <h1 className='text-item text-white font-altbold text-4xl lg:text-6xl mb-3'>{text.name.toUpperCase()}</h1>
        <p className='text-white text-sm lg:text-lg font-rubik'>{text.description}</p>
      </div>
      <div className="md:w-1/2 p-10 rounded-[30px]">
        <Carousel
          className='rounded-[30px] overflow-hidden w-full h-full  border-[5px] border-black'
          autoPlay
          infiniteLoop
          onChange={(i) => handleSlider(i)}
          interval={5000}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          {
            products.map(elem => (
              <div className=' object-contain object-center group relative' key={elem.id}>
                <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='w-full h-[400px] object-cover' src={elem.img} />
                <div className='absolute -bottom-full hidden sm:flex left-12 font-rubik text-[12px] lg:text-lg group-hover:bottom-8 transition-all duration-500 z-50'>{`${elem.tag}`}</div>
                <div className='absolute -bottom-full left-2 px-10 group-hover:bottom-14 transition-all duration-700 z-50 text-[#8bcbef] text-xs lg:text-2xl'>{elem.name.toUpperCase()}</div>
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  )
}
