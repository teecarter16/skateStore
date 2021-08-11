import React from 'react';
import './Home.css';
import skashop from './swbskate.png';
import Product from './Product';

function Home() {
    
    return(
        <div className="home">
            <div className="home_container">
                <img 
                    className="home_image" 
                    src={skashop} 
                    alt="skate shop banner"/>

                    
             <div className="home_row">
                 <Product 
                    id="4267293"
                    title="Nora Vasconcellos Welcome Deck-8.6" 
                    price={64.99}
                    image="https://cdn.shopify.com/s/files/1/1449/5224/products/FA21-Boards-Web21_1080x.jpg?v=1623967908"
                    rating={4} />
                 <Product
                    id="83647352"
                   title="Jamie Griffin Hop King Deck-8.25"
                   price={56.99} 
                   image="https://cdn.shopify.com/s/files/1/0420/9619/7788/products/JamieDeck_1080x.png.jpg?v=1624813035"
                   rating={5} />
             </div>

            <div className="home_row">
                 <Product 
                    id="0337623"
                    title="Vans Sport VTG AVE"
                    price={110.00}
                    image="https://www.kunstform.org/images/Vans-AVE-Schuhe-Sport-VTG-multi-marshmallow-20210805175335-1.jpg"
                    rating={4}/>
                 <Product
                    id="7384825"
                    title="Andy Anderson Powell Peralta Flight Deck-8.45"
                    price={83.95}
                    image="https://cdn.shopify.com/s/files/1/0555/4257/products/Powell-Peralta-Andy-Anderson-Heron-9.13in-x-32.8in-600x600.jpg?v=1620587571"
                    rating={5} />
                 <Product
                      id="7373293"
                      title="Vans AVE Pro"
                      price={110.00}
                      image="https://boardworld2.imgix.net/uploads/content/product/Vans/vans-ave-pro-skateboard-shoe-blanc-de-blanc-1.1566914502.jpg?auto=format,compress&w=1852&h=1852&fit=crop"
                      rating={4}/>
            </div>

            <div className="home_row">
                 <Product 
                    id="5248304"
                    title="2ft OC Ramps Mini Halfpipe"
                    price={1204.00}
                    image="https://cdn.shopify.com/s/files/1/1109/6048/products/media_5c07aa54-e0fa-49f2-ac30-0e3f6f4993bb_1024x1024.jpg?v=1625094279"
                    rating={5}/>
            </div>
            </div>

        </div>
    )
};


export default Home