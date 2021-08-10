import React from 'react';
import './Product.css'

function Product() {

    return (
        <div className="product">
           <div className="product_info">
               <p>Welcome Deck</p>
               <p className="product_price">
                   <small>$</small>
                   <strong>64.99</strong>
               </p>
                <div className="product_rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
           </div>
    
            <img src="https://cdn.shopify.com/s/files/1/1449/5224/products/FA21-Boards-Web21_1080x.jpg?v=1623967908" alt="welcome skateboard deck" />
          
          <button>Add to Basket</button>
        </div>
    )
}

export default Product