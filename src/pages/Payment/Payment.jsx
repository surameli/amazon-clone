import React, { useContext, useState } from 'react'
import payment from './payment.module.css'
import Layout from '../../Components/LayOut/Layout';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from "../../Components/Product/ProductCard";
import {useStripe, useElements , CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { axiosInstance } from '../../Api/axios';
function Payment() {
  
  const [{ user,basket}] = useContext(DataContext);

  const totalitem = basket?.reduce((amount , item) =>{
    return item.amount + amount;
  },0)
   
  const total = basket.reduce((amount, item) => item.price * item.amount + amount, 0);


  const [cardError, setcardError] = useState(null)
  const stripe = useStripe();
  const elements = useElements();

  const handelchange =(e)=>{
   e.error?.message? setcardError(e.error?.message):setcardError("")
  }
  const handelpayment= async(e)=>{
    e.preventDefualt();

      // const response = await()
    try {
      
    } catch (error) {
      
    }

    //1. backend || functions ---> contact to the client secret



    //2. client side (react side configeration)




    //3 after the configeration -->  order firestore database save clear basket









  };
  return (
    <Layout>

      {/* header */}
      <div className={payment.payment_header}>Checkout ({totalitem}) items</div>
      {/* payment method */}
     <section className={payment.payment_section} >
      {/* address */}
      <div className={payment.flex}> 
          <h3>Delivery  Address</h3>
          <div>
            <div>{user?.email}</div>
            <div> 123 react Lane</div>
            <div>Chicago, IL</div>
          </div>
      </div>
      <hr />
      {/* product */}
     <div className={payment.flex}>
           <h3>Review items and delivery</h3>
           <div>
            {basket?.map((item) => (
              <ProductCard product ={item} flex ={true}/>
            ))}
           </div>
     </div>
     <hr />
     {/* card form */}
      <div className={payment.flex}>
        <h3>Payment Method</h3>
        <div className={payment.methed}>
          <div className={payment.payment_details}>
            <form onSubmit={handelpayment} >
              {cardError && <small style={{color: "red" }}>{cardError}</small>}
              <CardElement onChange={handelchange}/>
                 {/* price */}

                 <div className={payment.payment_price}>
                  <div>
                    <span style={{display:"flex", gap:"15px"}}>
                     <p> Total Order |</p> <CurrencyFormat amount={total}/>
                    </span>
                  </div>
                  <button>Pay Now</button>
                 </div>
            </form>
          </div>
        </div>
      </div>
     </section>

   </Layout>
    
  )
}

export default Payment