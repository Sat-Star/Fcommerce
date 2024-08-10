import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import clothingBanner from './assets/clothingbanner.png';
import electronicsBanner from './assets/electronicsbanner.png';
import cosmeticsBanner from './assets/cosmeticsbanner.png';
import Cart from "./pages/Cart";
import Login from "./pages/Login";

export default function App() {
  return (
    <main className="text-tertiary">
      <BrowserRouter>
        <Header/>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/clothing' element={<Category category={"clothing"} banner={clothingBanner}/>}/>
          <Route path='/cosmetics' element={<Category category={"cosmetics"} banner={cosmeticsBanner}/>}/>
          <Route path='/electronics' element={<Category category={"electronics"} banner={electronicsBanner}/>}/>

          <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>

          <Route path="/cart-page" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </main>
  )
}