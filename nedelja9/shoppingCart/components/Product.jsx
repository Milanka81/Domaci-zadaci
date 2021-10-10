import React from 'react';


const Product = (props) => {
  const {product, onAdd} = props
  

  return (
    <div>
      <h3>{product.name}</h3>
      <p>€{product.price}</p>
      <p>{product.info}</p>      

      <button onClick={() => onAdd(product)}>Add To Cart</button>
  
    </div>
  )
}
export default Product