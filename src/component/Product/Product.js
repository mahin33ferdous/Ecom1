import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const{name,price,img,seller,rating}=props.product;
    return (
        <div className='product'>
           <img src={img}/>
           <p className='pname'>{name}</p>
        </div>
    );
};

export default Product;