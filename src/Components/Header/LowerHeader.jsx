import React from 'react'
import { FaBars } from "react-icons/fa";
import header from './header.module.css'
function LowerHeader() {
  return (
    <div  className={header.lower_container}>
        <ul>
            <li>
               <FaBars />
                <p>All</p>
            </li>
            <li>Today's Deals</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>

        </ul>
    </div>
  )
}

export default LowerHeader