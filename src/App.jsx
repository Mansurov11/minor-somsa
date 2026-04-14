import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Menu from './components/Menu/Menu'
import Fillial from './components/Fillial/Fillial'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
       <About />
      <Menu />
     <Fillial />
     <Footer />
    </>
  )
}

export default App;
