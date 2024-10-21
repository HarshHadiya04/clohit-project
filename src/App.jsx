import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './main_component/navbar'
import MiddleContent from './main_component/MiddleContent'
import Footer from './main_component/Footer'
import Collection from './main_component/middleContent/Home'


function App() {
  
  return (
    <>
      <div >
        <Navbar/>
        <Collection/>
        <Footer/>
      </div>
    </>
  )
}

export default App
