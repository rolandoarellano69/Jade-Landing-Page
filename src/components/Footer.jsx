import React from 'react'
import JadeBlancoIcon from '../components/icons/JadeBlancoIcon'
import ObrDitIcon from './icons/ObrDitIcon'
import { RiMapPinLine, RiPhoneLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-primary text-white p-6">
      <figure className='flex justify-center items-center mt-8'>
        <JadeBlancoIcon className="w-24 sm:w-28 md:w-32 fill-white" />
      </figure>
      <figure className='flex justify-center items-center my-4'>
        <ObrDitIcon className='w-48 sm:w-56 md:w-72 fill-slate-50' />
      </figure>
      <Link to="/aviso-privacidad" className='flex items-center justify-center p-4 uppercase text-lg sm:text-xl'>Aviso de privacidad</Link>
    
      <nav>
        <ul className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-4'>
        <li className='list-none flex items-center gap-2 text-lg sm:text-xl'> <RiMapPinLine className='text-lg sm:text-xl' />Plaza Carrusel LA002</li>
        <li className='list-none flex items-center gap-2 text-lg sm:text-xl'> <RiPhoneLine className='text-lg sm:text-xl' />6644049399</li>
        <li className='text-lg sm:text-xl mt-2 sm:mt-0'>Lunes a Viernes : 9:00 am-6:00 pm</li>
        <li className='text-lg sm:text-xl mt-2 sm:mt-0'>Sábado 9:00 am-2 pm</li>
        </ul>
      </nav>
      <h5 className='text-center mt-8 text-lg sm:text-xl mb-4'>COPYRIGHT © 2023 <span className='font-bold'>OBR GROUP.</span> ALL RIGHTS RESERVED.</h5>
    </footer>
  )
}
export default Footer