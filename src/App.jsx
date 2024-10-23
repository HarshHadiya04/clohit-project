import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MiddleContent from './main_component/MiddleContent'
import Footer from './main_component/Footer'
import Home from './main_component/middleContent/Home'
import Collection from './main_component/middleContent/Collection'
import Navbar from './main_component/Navbar'
import Wishlist from './main_component/middleContent/Wishlist'
import Addbag from './main_component/middleContent/Addbag'
import Trends from './main_component/middleContent/Trends'


function App() {
  
  return (
    <>
      <Router>
      <Navbar />
      <br/><br/>
      <div>
        <Routes>
          <Route path="/collection" element={<Collection />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/bag" element={<Addbag />} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  )
}

export default App
