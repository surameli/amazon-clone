import React, { useContext } from 'react'
import LowerHeader from './LowerHeader';
import {Link} from 'react-router-dom'
import header from './header.module.css'
import { LuMapPin } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/firebase';

const Header = () => {
    const[{basket, user},dispatch] =useContext(DataContext)
    const totalItem = basket?.reduce((amount,item)=>{
        return item.amount+ amount
    } , 0)
  return (
    <>
        <section>
            <div className={header.header_container}>
            <div className={header.logo_container}>
                {/* logo */}
                <Link to ="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </Link>
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
                <Link to ="">
                <div  className={header.language}>
                    <img src="https://img.freepik.com/premium-vector/usa-flag-vector-illustration_768467-359.jpg?w=900" alt="" />
                    <select>
                        <option value="">EN</option>
                    </select>
                </div>
                </Link>
                {/* three components */}
                <Link to ={ !user && "/auth"}>
                    <div>
                       
                        <div>
                            {user ?(
                                <>
                                <p>Hello, {user?.email?.split('@')[0]}</p>
                                <span onClick={() => auth.signOut()}>Sign Out</span>
                                </>
                                ):(
                                    <>
                                      <p> Hello, Sign In</p>
                                      <span>Account & Lists</span>
                                    </>
                                  
                                )
                            }
                        </div>
                        
                        
                    </div>
                </Link>
                {/* orders */}
                <Link to ="/orders">
                    <p>returns</p>
                    <span>& orders</span>
                </Link>
                {/* cart */}
                <Link to ="/cart"  className={header.cart}>
                  <BiCart size={45}/>
                   <span>{totalItem}</span>
                 
                </Link>
            </div>
            </div>
        </section>
        <LowerHeader/>
    </>
  )
}

export default Header