import React, { useEffect, useState } from 'react';
import productdetailstyle from './productdetail.module.css';
import Layout from '../../Components/LayOut/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endpoint';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/loader';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false); // Use function call syntax
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Use function call syntax
      });
  }, [productId]);

  return (
    <Layout>
      {isLoading ? <Loader /> : <ProductCard product={product}  
      flex = {true}
       renderDesc={true}
       renderAdd={true}
      
      
      /> }
    </Layout>
  );
}

export default ProductDetail;
