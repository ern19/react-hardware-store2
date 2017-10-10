import React, { Component } from 'react'
import Product from './Product'

class CartView extends Component {
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
                  quantity={product.quantity}
                />
                <button onClick={() => this.props.deleteProductFromCartList(index)}>Remove from cart</button>
              </div>
            )
          }) }
        </div>
      </div>
    )
  }
}

export default CartView
