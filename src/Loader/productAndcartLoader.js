import { getShoppingCart } from "../fakeData/utilities/fakedb"

export const productAndcartLoader= async()=>{
     const productData= await fetch('products.json')
     const product=await productData.json()

     const saveCart=getShoppingCart();
     const previousCart=[]
     for(const id in saveCart){
        const addedProduct=product.find(p=>p.id===id)
        console.log(addedProduct)
        if(addedProduct){
            const quantity=saveCart[id]
            addedProduct.quantity=quantity
            previousCart.push(addedProduct)
        }
    }
     return {product,previousCart};
}