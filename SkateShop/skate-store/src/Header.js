import React from 'react';
import './Header.css';
import swbshop from './swbshop.JPG';

function Header() {
    return (
        <div className="header">
            <img 
                src={swbshop}
                alt="SKate shop logo" 
                className="header_logo" />

                <div className="header_search">
                    <input className="headersearchIn"></input>
                </div>

                <div className="header_nav"></div>
        </div>
        
    )
}

export default Header