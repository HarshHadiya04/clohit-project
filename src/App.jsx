
import MiddleContent from './main_component/MiddleContent'
import Footer from './main_component/Footer'
import Home from './main_component/middleContent/Home'
import Collection from './main_component/middleContent/Collection'
import Navbar from './main_component/Navbar'
import Wishlist from './main_component/middleContent/Wishlist'
import Addbag from './main_component/middleContent/Addbag'


function App() {
  
  return (
    <>
      <div >
        <Navbar/>
        {/* <Wishlist/>
        <Addbag/> */}
        <Collection/>
        <Footer/>
      </div>
    </>
  )
}

export default App
