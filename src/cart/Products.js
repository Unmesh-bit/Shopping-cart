import React from 'react';
import Product from './Product';

const products =(props)=>{
    return props.products.map((prod, index) => {
    return  <Product
        id={prod.id}
        name={prod.name}
        price={prod.price}/>
    });
}
export default products;