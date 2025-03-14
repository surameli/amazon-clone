import React from 'react'
import orders from './orders.module.css'
import Layout from '../../Components/LayOut/Layout';
import { useLocation } from "react-router-dom";
function Orders() {
  const location = useLocation();
  return (
    <Layout>
       <div>
      <h1>Order Page</h1>
      <p>{location.state?.msg || "No new orders."}</p>
    </div>
    </Layout>
    
  )
}





export default Orders;
