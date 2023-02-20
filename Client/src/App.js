import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import MyStore from './Pages/MyStore';
import Blog from './Pages/Blog';
import CompareProducts from './Pages/CompareProducts';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import Forgetpassword from './Pages/Forgetpassword';
import Signup from './Pages/Signup';
import ResetPassword from './Pages/ResetPassword';
import SingleBlog from './Pages/SingleBlog';
import ShippingPolicy from './Pages/ShippingPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import TermsOfService from './Pages/TermsOfService';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='product' element={<MyStore/>}/>
          <Route path='product/:id' element={<SingleProduct/>}/>
          <Route path='blogs' element={<Blog/>}/>
          <Route path='/blogs/:id' element={<SingleBlog/>}/>
          <Route path='compare-product' element={<CompareProducts/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='forget-password' element={<Forgetpassword/>}/>
          <Route path='reset-password' element={<ResetPassword/>}/>
          <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='terms-of-services' element={<TermsOfService/>}/>
          <Route path='refund-policy' element={<RefundPolicy/>}/>
          <Route path='shipping-policy' element={<ShippingPolicy/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
