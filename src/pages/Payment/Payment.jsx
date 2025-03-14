import React, { useContext, useState } from 'react'
import payment from './payment.module.css'
import Layout from '../../Components/LayOut/Layout';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from "../../Components/Product/ProductCard";
import {useStripe, useElements , CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { axiosInstance } from '../../Api/axios';
import { ClipLoader } from 'react-spinners';
import { db } from '../../Utility/firebase';
import { useNavigate } from 'react-router-dom';
function Payment() {
  
  const [{ user, basket}] = useContext(DataContext);

  const totalitem = basket?.reduce((amount , item) =>{
    return item.amount + amount;
  },0)
   
  const total = basket.reduce((amount, item) => item.price * item.amount + amount, 0);


  const [cardError, setcardError] = useState(null)
  const [proccessing , setprocessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handlechange =(e)=>{
   e.error?.message? setcardError(e.error?.message):setcardError("")
  }
  const handlepayment= async(e)=>{
    e.preventDefault();


       //1. backend || functions ---> contact to the client secret
    try {
      setprocessing(true)
       const response = await axiosInstance({
        method:"POST",
        url: `/payment/create?total=${total*100}`,
       });

       console.log(response.data);
       const clientSecret = response.data?.client_secret
       
       //2. client side (react side configeration)

        const {paymentIntent} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method:{
              card:elements.getElement(CardElement)
            },
          });
             //  console.log(paymentIntent);
       //3 after the configeration -->  order firestore database save clear basket

       await db.collection("users")
       .doc(user.uid)
       .collection("orders")
       .doc(paymentIntent.id)
       .set({
         basket: basket,
         amount: paymentIntent.amount,
         created: paymentIntent.created,
       });

        setprocessing(false);
       
       
    } catch (error) {
      setprocessing(false)
      navigate("/orders", {state: { msg:"you have placed new order"}}) 
    }

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
            <form onSubmit={handlepayment} >
              {cardError && <small style={{color: "red" }}>{cardError}</small>}
              <CardElement onChange={handlechange}/>
                 {/* price */}

                 <div className={payment.payment_price}>
                  <div>
                    <span style={{display:"flex", gap:"15px"}}>
                     <p> Total Order |</p> <CurrencyFormat amount={total}/>
                    </span>
                  </div>
                  <button type="submit">
                    {
                      proccessing?(
                        <div className={payment.payment_loader}>
                          <ClipLoader  color="gray" size={12}/>
                          <p>Please Wait ....</p>
                        </div>
                      ):"Pay Now"
                    }
                    
                    
                    </button>
                    
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