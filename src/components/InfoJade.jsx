import React from 'react'
import LogoPeek from '../assets/img/logo Jade-01.png'
import FamilyPeek from '../assets/img/AdobeStock_133195554.jpeg'
import OBrDitPeek from '../assets/img/logo obr y DIT-01.png'

const InfoJade = () => {
  return (

    <div className=" jadeSection md:grid md:grid-cols-2 grid grid-cols-1 grid-rows-1">
    <div className=" items-center justify-center relative bg-center bg-cover bg-isoPeek">
      <div className=" flex items-center justify-center mt-8 z-10">
        <img src={LogoPeek} alt="Logo" className="w-[10rem] h-[10rem] jadeSection  " />
      </div>
  
      <p className="  text-justify m-10 z-10"> 
      Jade Residencial es un proyecto de únicamente 21 casas diseñadas con
      espacios cómodos y modernos que te permitirán sentir la emoción de un
      nuevo hogar, cuenta con acceso controlado, ubicado en la Gloria, una zona
      estratégica con diversas rutas que te conectan a las principales vialidades y
      parques industriales, garantizando la privacidad y tranquilidad que tu
      familia merece.
      </p>
      <p className="text-justify m-10 z-50 relative"> 
      Ven y conoce la casa de tus sueños, <span className="text-primary font-semibold">Jade Residencial</span> 
    </p>
      <div className="flex items-center justify-center">
        <img src={OBrDitPeek} alt="Logo" className='h-36 mt-4' />
        {/* <ObrDitIcon className="hover:text-green-500 h-36 z-10 mt-4" /> */}
      </div>
    </div>
  
    <div className='flex md:p-8 p-4 items-center'>
      <img src={FamilyPeek} alt="Familia" className='md:rounded-bl-lg rounded-xl shadow-xl'/>
    </div>
  </div>

  )
}

export default InfoJade