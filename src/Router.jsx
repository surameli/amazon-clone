import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing'
import Auth from './pages/Auth/Auth'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Results from './pages/Results/Results';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QHALvRxCmUKAD3MhXZLieP9XF8ylE77rqQn9PtnxupLqDMaZ6Wl8R0vtZZl1niA7LJONp5TylgA1ZarMeCiitJv00jvPwP3mC');

function Routeing() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/payments" element={
        <Elements stripe={stripePromise}>
          <Payment />
          </Elements>
        
        } />
      <Route path="/orders" element={<Orders />} />
      <Route path="/category/:categoryName" element ={<Results/>} />
      <Route path="/products/:productId" element ={<ProductDetail/>}/>
     
      <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default Routeing