import React from 'react';
import './Header.css';
import swbshop from './swbshop.JPG';
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <div className="header">
            
            <img 
                 src={swbshop}
                 alt="SKate shop logo" 
                 className="header_logo" />

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
        </div>
        
    )
}

export default Header