import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RiMenuLine, RiCloseFill } from 'react-icons/ri';

import JadeIconNav from './icons/JadeIconNav';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className=' shadow-2xl sticky top-0 z-50  bg-primary py-2 px-8 text-white'>
      <div className='flex justify-between items-center ml-2 md:ml-4'>
        {/* Tu ícono */}
        <JadeIconNav />

        {/* Menú para desktop */}
        <nav className="hidden md:flex gap-10 mr-8 ">
          <Link to='jadeSection' smooth={true} duration={500} className='hover:border-b-2 hover:border-gray-200 cursor-pointer'>Jade</Link>
          <Link to='modeloSection' smooth={true} duration={500} className='hover:border-b-2 hover:border-gray-200 cursor-pointer'>Modelos</Link>
          <Link to='ubicacionSection' smooth={true} duration={500} className='hover:border-b-2 hover:border-gray-200 cursor-pointer'>Ubicación</Link>
          <Link to='contactoSection' smooth={true} duration={500} className='hover:border-b-2 hover:border-gray-200 cursor-pointer'>Contacto</Link>
        </nav>

        {/* Botón de menú para móviles y tablets */}
        <div className="md:hidden">
          {!menuOpen ?
            <RiMenuLine size={24} onClick={() => setMenuOpen(true)} className='mr-2  ' />
            :
            <RiCloseFill size={24} onClick={() => setMenuOpen(false)} className='mr-4 hover:rounded-full hover:bg-secondary' />
          }
        </div>
      </div>

      {/* Menú desplegable para móviles y tablets */}
      {menuOpen && (
        <nav className="bg-primary flex flex-col items-end md:hidden gap-4 mt-4 transition-transform duration-500 ease-in-out pr-4 ">
          <Link to='jadeSection' smooth={true} duration={500} onClick={() => setMenuOpen(false)} className='hover:border-b-2 hover:border-gray-200 cursor-pointer'>Jade</Link>
          <Link to='modeloSection' smooth={true} duration={500} onClick={() => setMenuOpen(false)} className='hover:border-b-2 hover:border-gray-200 cursor-pointer' >Modelos</Link>
          <Link to='ubicacionSection' smooth={true} duration={500} onClick={() => setMenuOpen(false)} className='hover:border-b-2 hover:border-gray-200 cursor-pointer'>Ubicación</Link>
          <Link to='contactoSection' smooth={true} duration={500} onClick={() => setMenuOpen(false)} className='hover:border-b-2 hover:border-gray-200 cursor-pointer'>Contacto</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;