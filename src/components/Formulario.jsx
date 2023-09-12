import React from 'react'

const Formulario = () => {
  return (
    <div className=' contactoSection flex justify-center items-center md:p-8'>
      <div className=''>
        <h2 className='text-center md:text-5xl text-3xl mt-4 p-8'><span className='text-secondary'>CONTÁCTANOS</span><br /></h2>
        <h3 className='text-center text-base mt-4'>Estamos para responder tus dudas.</h3>
        <iframe width='100%' height='620' title="myFrame" src='https://crm.zoho.com/crm/WebFormServeServlet?rid=ab9ffff6c56c4470d599b792c0f9089b0d625fd1604af6cb4c8025e0a9addbcegid1250c6f36c588699a4f2cad1500d2088c72dea3f78890524ab07eb17039e409a' className='mt-8 '></iframe>
      </div>
    </div>
  )
}

export default Formulario