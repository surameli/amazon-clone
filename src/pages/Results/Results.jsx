import React, { useEffect, useState } from 'react';
import resultstyle from './result.module.css';
import Layout from '../../Components/LayOut/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endpoint';
import ProductCard from '../../Components/Product/ProductCard';

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams()
  console.log(categoryName); 
  
  useEffect(() => {
    if (categoryName) {
      axios.get(`${productUrl}/products/category/${categoryName}`)
        .then((res) => {
          setResults(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div  className={resultstyle.results}>
          {results?.map((products) => (
            <ProductCard 
            key={products.id} 
            product={products}
            renderDesc={false}
            renderAdd={true}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
