import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './main_component/navbar'
import MiddleContent from './main_component/MiddleContent'
import Footer from './main_component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <MiddleContent/>
        <Footer/>
      </div>
    </>
  )
}

export default App
