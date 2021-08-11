import React from 'react';
import './Header.css';
import swbshop from './swbshop.JPG';
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img 
                    src={swbshop}
                    alt="SKate shop logo" 
                     className="header_logo" />
            </Link>
            

            <div className="header_search">

                    <input 
                        className="header_searchInput"
                        type="text"></input>
                   <SearchIcon className="header_searchIcon" /> 

                </div>

                <div className="header_nav">
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello,Skater</span>
                        <span className="header_optionLineTwo">Sign in</span>
                    </div>

                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">Orders</span>
                    </div>

                    <div className="header_option">
                        <span className="header_optionLineOne">your</span>
                        <span className="header_optionLineTwo">SWB Bag</span>
                    </div>
                </div>

            <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasket />
                    <span className="header_optionLineTwo header_basketCount">0</span>
                </div>
            </Link>
               
        </div>
        
    )
}

export default Header