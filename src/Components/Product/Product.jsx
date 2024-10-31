import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import productstyle from './product.module.css'
import Loader from '../../Components/Loader/loader';
function Product() {
  // Initialize products as an empty array
  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setProducts(res.data); // Update the state with the fetched products
        setIsLoading(false);
        
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <> {
      isLoading ? (<Loader />) : (    <section className= {productstyle.allProduct_container}>
        {product.length > 0 ? (
          product.map((singleProduct) => (
            <ProductCard  renderAdd={true} product={singleProduct} key={singleProduct.id} />
          ))
        ) : (
          <p>Loading products...</p>  // Display loading message while products are being fetched
        )}
        </section>)
    } 


  </>
   
  );
}

export default Product;
