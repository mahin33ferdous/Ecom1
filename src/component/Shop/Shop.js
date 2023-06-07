import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProduct]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    const handleCart=(products)=>{
        console.log(products)
        const newCart=[...cart,products]
        setCart(newCart)
    }
    return (
        
            <div className='shop'>
                <div className='shop-container'>
                        {
                            products.map(product=><Product
                            key={product.id}
                            product={product}
                            handleCart={handleCart}
                            ></Product>)
                        }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        
    );
};

export default Shop;