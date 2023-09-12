import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//components
import Header from './components/Header'
import Hero from './components/Hero'
import InfoJade from './components/InfoJade'
import JadeHouse from './components/JadeHouse'
import MapaJade from './components/MapaJade'
import JadeImperial from './components/JadeImperial'
import PlantaArqui from './components/PlantaArqui'
import JadePlus from './components/JadePlus'
import JadeFamily from './components/JadeFamily'
import Jade from './components/Jade'
import RutasEstrategicas from './components/RutasEstrategicas'
import Formulario from './components/Formulario'
import Footer from './components/Footer'
import AvisoPrivacidad from './pages/AvisoPrivacidad';
import Page404 from './pages/Page404';
import BtnWhatsapp from './components/BtnWhatsapp';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
    </Router>
  )
}
const HomePage = () => {
  return (
    <>
      <div className='app'>
        <Header />
        <Hero />
        <InfoJade />
        <JadeHouse />
        <MapaJade />
        <JadeImperial />
        <PlantaArqui />
        <JadePlus />
        <JadeFamily />
        <Jade />
        <RutasEstrategicas />
        <Formulario />
        <BtnWhatsapp/>
        <Footer />
      </div>
    </>

  )
}
const NotFoundPage=()=>{
  return <Page404/>
}

export default App
