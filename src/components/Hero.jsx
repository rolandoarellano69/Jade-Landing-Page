import React from 'react'
import VideoJade from '../assets/video/PORTADA.mp4'
import JadeHeroVideo from '../assets/video/ANIMACION JADE.mp4'

const Hero = () => {
  return (
    // Video para Escritorio
    <figure className='relative bg-white flex items-center justify-center'>
      <video
        kind="captions"
        label="spanish_captions"
        autoPlay
        loop
        muted
        src={VideoJade} className='hidden md:block '></video>
      {/* Video para mobile */}
      <video
        kind="captions"
        label="spanish_captions"
        autoPlay
        loop
        muted
        src={JadeHeroVideo} className='block  md:hidden  bg-white border border-gray-200 rounded-lg'></video>



      {/* <div className='absolute z-10'>
        <img src={logoPeek} alt="logo" className='w-[5rem] md:w-[25rem]' />
      </div>
      <img src={JadeHeroPeek} alt="Hero" className='opacity-60 w-full h-auto' /> */}
    </figure>
  )
}

export default Hero