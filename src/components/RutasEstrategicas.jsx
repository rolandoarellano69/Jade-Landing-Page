import React from 'react'
import UbijadePeek from '../assets/img/mapa jade-01-01.jpg'
const RutasEstrategicas = () => {
  return (
    <figure className=' ubicacionSection md:p-8 p-4'>
      <figcaption className=" font-semibold text-center text-secondary mt-8 mb-8 md:p-4 sm:p-2 md:text-sm lg:text-base xl:text-5xl">Ubicación</figcaption>
      <img src={UbijadePeek} alt="Ubicacion" className='  rounded-lg shadow-lg' />
    </figure>
  )
}

export default RutasEstrategicas 