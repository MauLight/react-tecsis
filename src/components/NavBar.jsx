import React from 'react'
import { DataVis_4 } from '@carbon/icons-react'

export const NavBar = () => {
  return (
    <div className='w-full flex justify-between items-center px-10 py-5 fixed top-0 left-0 right-0 z-40 bg-white opacity-95'>
      <div className="flex gap-x-1">
        <DataVis_4 className='text-black pt-1' size={20} />
        <h1 className='text-[#8bcbef] text-xl font-altbold'>TECSIS</h1>
      </div>
      <div className="hidden md:flex gap-x-5">
        <p className='text-item2 text-black font-rubik hover:text-[#8bcbef] transition-color duration-300'>Productos</p>
        <p className='text-item2 text-black font-rubik hover:text-[#8bcbef] transition-color duration-300'>Servicios</p>
        <p className='text-item2 text-black font-rubik hover:text-[#8bcbef] transition-color duration-300'>Laboratorio</p>
        <p className='text-item2 text-black font-rubik hover:text-[#8bcbef] transition-color duration-300'>Nosotros</p>
        <p className='text-item2 text-black font-rubik hover:text-[#8bcbef] transition-color duration-300'>Contacto</p>
      </div>
    </div>
  )
}
