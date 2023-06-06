import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const{name,price,img,seller,ratings}=props.product;
    return (
        <div className='product'>
           <img src={img}/>
           <div className='pinfo'>

           <p className='pname'>{name}</p>
           <p>Price={price}</p>
           <p><small>Seller: {seller}</small></p>
           <p><small>rating: {ratings}stars</small></p>

           </div>
           <button className='btn'>
            <p>Add to cart</p>
           </button>
        </div>
    );
};

export default Product;