import React from 'react'
import VideoJade from '../assets/video/PORTADA.mp4'
import JadeHeroPeek from '../assets/img/JADE 4K  ACCESO.jpg'
import logoPeek from '../assets/img/logo Jade blanco-02.png'
const Hero = () => {
  return (
    <figure className='relative bg-black flex items-center justify-center'>
      <video
        kind="captions" 
    
        label="spanish_captions"
        autoPlay
        loop
        muted
        src={VideoJade}></video>
      {/* <div className='absolute z-10'>
        <img src={logoPeek} alt="logo" className='w-[5rem] md:w-[25rem]' />
      </div>
      <img src={JadeHeroPeek} alt="Hero" className='opacity-60 w-full h-auto' /> */}
    </figure>
  )
}

export default Hero