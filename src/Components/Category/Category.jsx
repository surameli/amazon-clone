import React from 'react'
import category from './catagory.module.css'
import {catagoryInfo} from './catagoryInfo'
import CategoryCard from './CategoryCard'
function Category() {
  return (

     <section className={category.Category_container}>
       
      {
        catagoryInfo.map((info, index) => (
          <CategoryCard data={info} key={index} />
          
        ))
      }
    </section>
    
    
  )
}



export default Category