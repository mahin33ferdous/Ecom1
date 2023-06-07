import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
           <h2>shop cart</h2>
                    <h2>item : {cart.length}</h2> 
        </div>
    );
};

export default Cart;