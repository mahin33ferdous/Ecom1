import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../fakeData/utilities/fakedb';

const Shop = () => {
    const [products, setProduct]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

    useEffect(()=>{
      const storedCart=getShoppingCart()
      console.log("first",products)
      const savedCart=[]
       for(const id in storedCart)
       { const addedProduct=products.find(product=>product.id==id)
        if(addedProduct){
            const quantity=storedCart[id]
            addedProduct.quantity=quantity;
            console.log(addedProduct)
            savedCart.push(addedProduct)
        }
         setCart(savedCart)
       }
    },[products])
    const handleCart=(products)=>{
        
        //const newCart=[...cart,products]
        let newCart=[]
        const exists=cart.find(product=>product.id===products.id)
        if(!exists){
            products.quantity=1;
            newCart=[...cart,products]
        }
        else{
            const rest=cart.filter(product=>product.id!==products.id)
            exists.quantity=exists.quantity+1
            newCart=[...rest,exists]
        }
        setCart(newCart)
        addToDb(products.id)
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