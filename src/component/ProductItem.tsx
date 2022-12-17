import React from "react";
import {Product} from '../App'

/*Prop is an object and inside we have each of the item that is passed by the name
* product and the type of the product is Product*/

type Prop = {
product: Product
}

export default function ProductItem({product} : Prop) {

  return (
      <div>
       <div>Name: {product.title}</div>
          <div>Description: {product.description}</div>
          <div>Category: {product.category}</div>
          <div>Ratings:{product.rating.rate}</div>
          <img src={product.image}/>

     </div>
  );
}
