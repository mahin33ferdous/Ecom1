import React from 'react';
import'./OrderCart.css'
const OrderCart = ({product,handleDelete}) => {
    const{name,price,img,quantity,id}=product
    return (
        <div className='OrderCart'>
             <img src={img} alt=''/>
               <div className='details'>
                <div className='order-details'>
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='delete'>
                <button onClick={()=>handleDelete(id)}>delete</button>
               </div>
               </div>
               
        </div>
    );
};

export default OrderCart;