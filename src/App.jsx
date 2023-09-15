import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import './App.scss'

/* pages */
import ProductDetail_Container  from "./pages/ProductDetail_Container/ProductDetail_Container";
import Categories from './pages/Categories/Categories'
import Contact from './pages/Contact/Contact'
import AboutUs from './pages/AboutUs/AboutUs'
import Cart from './pages/Cart/Cart'
import Help from './pages/Help/Help'
import HomePage from './pages/HomePage/HomePage.jsx'
import Category from './pages/Category/Category'
import Footer from './components/Footer/Footer'



function App() {

  return(
    <BrowserRouter>
      <header>
        <Navbar />
      </header> 

      <main>
        <Routes> 
          <Route path='/' element={<HomePage/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/categories/:id' element={<Category/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about_us' element={<AboutUs/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/help' element={<Help/>} />
          <Route path='/products/:id' element={<ProductDetail_Container />} />
          <Route path='*' element={ <p> Page 404</p> } />
        </Routes>
      </main>

      <footer>
          <Footer/>
      </footer>  
    </BrowserRouter>
  )
}

export default App;
