import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Page/home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import Product from './components/Product/Product';
import ProductDetail from './components/productDetail/ProductDetail';
import { AppProvider } from './AppContext';
import Blog from './Page/blogs/blog';
import Contact from './Page/Contact/Contact';
import Cart from './components/Cart/Cart';
import Product2 from './components/Product/Product2';
import Product3 from './components/Product/Product3';
import ProductDeatil2 from './components/productDetail/ProductDeatil2';
import ProductDetail1 from './components/productDetail/ProductDetail1';
import AOS from "aos";
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div className='body'>
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='/product' element={<Product />}></Route>
            <Route path='/product2' element={<Product2 />}></Route>
            <Route path='/product3' element={<Product3 />}></Route>
            <Route path="product/:id" element={<ProductDetail />}></Route>
            <Route path="product3/:id" element={<ProductDeatil2 />}></Route>
            <Route path="product2/:id" element={<ProductDetail1 />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;

