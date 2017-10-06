import React, { Component } from 'react'
import Product from './Product'

class ShopView extends Component {
  render () {
    return (
      <div>
        <h2>Cart</h2>
        <div>
          { this.props.cartList.map((product, index) => {
            return (
              <div key={index}>
                <Product
                  productName={product.productName}
                  price={product.price}
                  description={product.description}
                />
                <button onClick={() => this.props.addToCart(index)}>Add To Cart</button>
              </div>
            )
          }) }
        </div>
      </div>
    )
  }
}

export default ShopView
