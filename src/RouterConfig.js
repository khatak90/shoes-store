import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Product from './Components/Product'
import ProductList from './Components/ProductList'
import Navbar from './Components/Navbar'



function RouterConfig() {
  return (
    <Router>
        <Navbar/>
         <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        
        <Route path='Product' element={<Product/>}/>
        <Route path='Productlist/:id' element={<ProductList/>}/>

      </Routes>
    </Router>
  )
}

export default RouterConfig