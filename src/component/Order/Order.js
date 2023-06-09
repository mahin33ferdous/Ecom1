import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderCart from '../OrderCart/OrderCart';
import { removeFromDb } from '../../fakeData/utilities/fakedb';

const Order = () => {
    const {product,previousCart}=useLoaderData();
    const [cart,setCart]=useState(previousCart)
    const handleDelete=(id)=>{
        const remain=cart.filter(p=>p.id!==id)
        setCart(remain)
        removeFromDb(id)

    }
    return (
        <div className='shop'>
           <div className='product-container'>
            {
                cart.map(product=><OrderCart
                key={product.id}
                product={product}
                handleDelete={handleDelete}
                ></OrderCart>)
            }
           </div>
           <div className='cart-container'>
                <Cart cart={cart}></Cart>
           </div>
            
        </div>
    );
};

export default Order;