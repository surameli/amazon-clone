import React from 'react'
import Rating from'@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import product from './product.module.css'
function ProductCard({products}) {
    const {image, title, id,rating, price} =products;
  return (
    <div className={product.product_container}>
        <a href="">
            <img src={image} alt="" />
        </a>
        <div>
            <h3>{title}</h3>
            <div className= {product.ratting}>
                {/* rating */}
                <Rating value={rating.rate} precision={0.1}/>
                {/* price */}
                <small>{rating.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price}/>
            </div>
            <button className={product.button}> 
                add to cart
            </button>
        </div>
    </div>
  )
}

export default ProductCard