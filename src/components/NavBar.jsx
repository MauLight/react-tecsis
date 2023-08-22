import React from 'react'
import { DataVis_4 } from '@carbon/icons-react'
import { Divide as Hamburger } from 'hamburger-react'

export const NavBar = () => {
  return (
    <div className='w-full flex justify-around items-center px-10 py-5 fixed top-0 left-0 right-0 z-40 bg-white'>
      <div className="flex gap-x-1">
        <DataVis_4 className='text-black pt-1' size={30} />
        <h1 className='text-[#8bcbef] text-3xl font-altbold'>TECSIS</h1>
      </div>
      <div className="flex gap-x-3">
        <p className='text-item2 text-black font-alt hover:text-[#8bcbef] transition-color duration-300'>Productos</p>
        <p className='text-item2 text-black font-alt hover:text-[#8bcbef] transition-color duration-300'>Servicios</p>
        <p className='text-item2 text-black font-alt hover:text-[#8bcbef] transition-color duration-300'>Laboratorio</p>
        <p className='text-item2 text-black font-alt hover:text-[#8bcbef] transition-color duration-300'>Nosotros</p>
      </div>
      <div className="flex">
        <Hamburger size={30} color='black' />
      </div>
    </div>
  )
}


