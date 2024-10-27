import React from 'react'
import category from './catagory.module.css'
import {Link} from 'react-router-dom'
function CategoryCard({data}) {
 console.log(data.title);
  return (
    <div className={category.catogry}>
        <Link to ={`/category/${data.title}`}>
        
            <span>
                <h2>{data.title}</h2>
                {/* {console.log(data.title) } */}
            </span>
            <img src={data.image} alt="" />
            <p>shop now</p>
        </Link>
    </div>
  ) 
}

export default CategoryCard