import React from 'react'
import LowerHeader from './LowerHeader';
import header from './header.module.css'
import { LuMapPin } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <>
        <section>
            <div className={header.header_container}>
            <div className={header.logo_container}>
                {/* logo */}
                <a href="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </a>
                {/* delivery */}
                <div className={header.delivery} >
                <span>
                <LuMapPin />
                </span>
                <div>
                    <p>Deliverd to</p>
                    <span>Ethiopia</span>
                </div>
                </div>
            </div>
            <div className={header.search}>
                {/* search icon */}
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text"placeholder='search Amazon' />
                <IoIosSearch size={25} />
            </div>

            <div className={header.order_container}>
                {/* right side link */}
                <a href="">
                <div  className={header.language}>
                    <img src="https://img.freepik.com/premium-vector/usa-flag-vector-illustration_768467-359.jpg?w=900" alt="" />
                    <select>
                        <option value="">EN</option>
                    </select>
                </div>
                </a>
                {/* three components */}
                <a href="">
                    <div>
                        <p>Sign In</p>
                        <span>Account & Lists</span>
                    </div>
                </a>
                {/* orders */}
                <a href="">
                    <p>returns</p>
                    <span>& orders</span>
                </a>
                {/* cart */}
                <a href=""  className={header.cart}>
                  <BiCart size={45}/>
                   <span>0</span>
                </a>
            </div>
            </div>
        </section>
        <LowerHeader/>
    </>
  )
}

export default Header