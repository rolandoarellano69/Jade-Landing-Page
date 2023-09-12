import React from 'react'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'
import PAJadePeek from '../assets/img/PA JADE FF.png'
import PBJadePeek from '../assets/img/PB JADE FF.png'
import JadeIconPeek from '../assets/img/logo Jade-01.png'

const PlantaArqui = () => {
  return (

    <main className="md:grid grid-cols-3 grid-rows-1 gap-4 p-4 h-full">
      <div className='flex flex-col justify-center items-center h-full p-4'>
        <div className="flex flex-col items-center mb-4">
          <h1 className='text-primary text-center font-bold uppercase  text-[55px] mb-2'>Planta</h1>
          <span className='text-secondary p-2  border-4 border-primary  text-[35px] mb-8'>Arquitectónica</span>
          <div className="text-left p-10">
            <span className="font-bold text-lg  uppercase text-secondary p-2  border-2 border-primary">Planta baja</span>
            <ul className=' p-10 text-gray-500'>
              <li className=' mt-4 flex items-center gap-2'> <RiCheckboxBlankCircleFill className='text-primary text-sm' /> Sala </li>
              <li className=' mt-4 flex items-center gap-2'> <RiCheckboxBlankCircleFill className='text-primary text-sm' /> Comedor </li>
              <li className=' mt-4 flex items-center gap-2'> <RiCheckboxBlankCircleFill className='text-primary text-sm' /> Cocina </li>
              <li className=' mt-4 flex items-center gap-2'> <RiCheckboxBlankCircleFill className='text-primary text-sm' /> <p className='diagonal-fractions'>1/2 Baño</p> </li>
              <li className=' mt-4 flex items-center gap-2'> <RiCheckboxBlankCircleFill className='text-primary text-sm' /> Patio de servicio </li>
              <li className=' mt-4 flex items-center gap-2'> <RiCheckboxBlankCircleFill className='text-primary text-sm' /> Estacionamiento </li>
            </ul>
            <span className="font-bold text-lg uppercase text-secondary p-2  border-2 border-primary">Planta alta</span>
            <ul className=' p-10 text-gray-500'>
              <li className=' mt-4 flex items-center gap-2'> <RiCheckboxBlankCircleFill className='text-primary text-sm' /> 2 récamaras </li>
              <li className=' mt-4 flex items-center gap-2'> <RiCheckboxBlankCircleFill className='text-primary text-sm' /> Baño completo </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative col-span-2 p-8">
        <figure className="relative mt-10">
          <figcaption className=" font-semibold text-center text-primary mt-8 md:p-4 sm:p-2 md:text-sm lg:text-base xl:text-2xl">PLANTA BAJA</figcaption>
          <img src={PBJadePeek} alt="Descripción detallada de la imagen 2" className='' />
        </figure>
        <figure className="relative mb-4">
          <figcaption className="font-semibold text-center text-primary p-1 sm:p-2 md:text-sm lg:text-base xl:text-2xl">PLANTA ALTA</figcaption>
          <img src={PAJadePeek} alt="Descripción detallada de la imagen 1" className='' />
        </figure>
      </div>
    </main>
  )
}

export default PlantaArqui