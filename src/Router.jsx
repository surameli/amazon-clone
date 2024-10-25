import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing'
import SignIn from './pages/Auth/Signup'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
function Routeing() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/auth" element={<SignIn />} />
      <Route path="/payments" element={<Payment />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default Routeing