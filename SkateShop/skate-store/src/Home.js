import React from 'react';
import './Home.css';
import skashop from './skashop.JPG';
import Product from './Product';

function Home() {
    
    return(
        <div className="home">
            <div className="home_container">
                <img 
                    className="home_image" 
                    src={skashop} 
                    alt="skate shop banner" />
            </div>

        <div className="home_row">
            <Product />
            <Product />
        </div>

        <div className="home_row">
            {/**product */}
            {/*products */}
            {/*products*/}
        </div>

        <div className="home_row">
            {/**product */}
        </div>
        </div>
    )
};


export default Home