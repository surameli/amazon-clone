import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import product from './product.module.css'
function Product() {
  // Initialize products as an empty array
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProduct(res.data); // Update the state with the fetched products
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className= {product.allProduct_container}>
      {products.length > 0 ? (
        products.map((singleProduct) => (
          <ProductCard products={singleProduct} key={singleProduct.id} />
        ))
      ) : (
        <p>Loading products...</p>  // Display loading message while products are being fetched
      )}
    </section>
  );
}

export default Product;
