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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='store' element={<MyStore/>}/>
          <Route path='blogs' element={<Blog/>}/>
          <Route path='compare-product' element={<CompareProducts/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
