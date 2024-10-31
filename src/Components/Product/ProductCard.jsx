import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import productStyles from './product.module.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';
function ProductCard({ product, flex, renderDesc ,renderAdd}) {

    console.log(product);
    
    // Default destructure with fallback for undefined properties
    const { image, title, id, rating = {}, price, description } = product || {};
    console.log(image);
      const [state, dispatch] = useContext(DataContext)


      const addToCart = ()=>{
         dispatch({
            type: Type.ADD_TO_BASKET,
            item:{
                image, title, id, rating ,price, description
            }
         })

      }

    return (
        <div className={productStyles.product_container_abtrshi} >
            <div className={`${productStyles.product_container} ${flex ? productStyles.product_flex : ''}`}>
            <Link to={`/products/${id}`}>
                <img src={image} alt={title || 'Product Image'} />
            </Link>
            <div>
                <h3>{title || 'No Title Available'}</h3>
                {renderDesc && <div style={{maxWidth: "750px"}}>{description}</div>}
                <div className={productStyles.ratting}>
                    {/* Rating */}
                    <Rating value={rating.rate || 0} precision={0.1} />
                    <small>{rating.count || 0}</small>
                </div>
                <div>
                    {/* Price */}
                    <CurrencyFormat amount={price || 0} />
                </div>
                {renderAdd && <button className={productStyles.button} onClick={addToCart}>
                    Add to cart
                </button>
                }
                
            </div>
        </div>
        </div>
    );
}

export default ProductCard;
