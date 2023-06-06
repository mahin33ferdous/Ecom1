import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProduct]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        
            <div className='shop'>
                <div className='shop-container'>
                        {
                            products.map(product=><Product
                            key={product.id}
                            product={product}
                            ></Product>)
                        }
                </div>
                <div className='cart-container'>
                    <h2>shop cart</h2>
                </div>

            </div>
        
    );
};

export default Shop;