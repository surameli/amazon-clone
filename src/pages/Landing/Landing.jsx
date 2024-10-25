import React from 'react'
import Carousel from '../../Components/Carousel/CarouselEffect';
import Category from '../../Components/Category/Category';
import Product from '../../Components/Product/Product';
import Layout from '../../Components/LayOut/Layout';
function Landing() {
  return (
   
      <Layout>
      <Carousel/>
      <Category/>
      <Product/>
      </Layout>
     
 
  )
}

export default Landing