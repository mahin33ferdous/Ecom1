import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let total=0
    let shipping=0
    let quantity=0
    
    for(const product of cart){
        quantity=quantity+product.quantity
        total=total+product.price *product.quantity
        shipping=shipping+product.shipping
    }
    const tax=parseFloat((total * 0.1).toFixed(2))
    const GrandTotal= tax+total+shipping

    return (
        <div className='cart'> 
           <h2>shop cart</h2>
                    <h2>item : {quantity}</h2> 
                    <p>total price: {total}</p>
                    <p>total Shipping :{shipping}</p>
                    <p>Tax:{tax}</p>
                    <h2>Grand Total:{GrandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;