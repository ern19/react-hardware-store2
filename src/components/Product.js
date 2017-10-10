import React from 'react'

const Product = ({ productName, price, description, quantity }) => {
  return (
    <div>
      <h3>{productName}</h3>
      <h4>${price}</h4>
      <p>{description}</p>
      
      <p>{quantity}</p>
    </div>
  )
}

export default Product
