import React from 'react'
import category from './catagory.module.css'
function CategoryCard({data}) {
  return (
    <div className={category.catogry}>
        <a href="">
            <span>
                <h2>{data.title}</h2>
                {console.log(data.title) }
            </span>
            <img src={data.image} alt="" />
            <p>shop now</p>
        </a>
    </div>
  ) 
}

export default CategoryCard