import React from 'react'

export const Nav = () => {
  return (
    <div className='w-screen py-10 flex justify-center'>
      <div className="flex">
        <div className="flex justify-center items-center md:w-full">

          <div className='flex'>
            <button
              className='rounded-l-full border-t-2 border-r-2 border-[#8bcbef] py-4 px-10'>
              <h1 className="font-rubik text-xs md:text-base xl:text-2xl text-black hover:text-[#8bcbef] transition-color duration-200">{'Productos'}</h1>
            </button>
            <button
              className='border-t-2 border-r-2 border-[#8bcbef] py-4 px-10'>
              <h1 className="font-rubik text-xs md:text-base xl:text-2xl text-black hover:text-[#8bcbef] transition-color duration-200">{'Servicios'}</h1>
            </button>
            <button
              className='border-t-2 border-r-2 border-[#8bcbef] py-4 px-10'>
              <h1 className="font-rubik text-xs md:text-base xl:text-2xl text-black hover:text-[#8bcbef] transition-color duration-200">{'Laboratorio'}</h1>
            </button>
            <button
              className='rounded-r-full border-t-2 border-[#8bcbef] py-4 px-10'>
              <h1 className="font-rubik text-xs md:text-base xl:text-2xl text-black hover:text-[#8bcbef] transition-color duration-200 ">{'Nosotros'}</h1>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
