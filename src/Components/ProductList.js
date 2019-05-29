import React, { Component, Fragment } from 'react'
import Product from './Product'
import Title from './Title';
import {storeProducts} from '../Data/data';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {

  state={
    products:storeProducts
  }
  render() {
    console.log(this.state.products)
    return (
      <Fragment>
        <div className="div py-5">
          <div className="div container">
          <Title name="our" title="products"></Title>
            <div className="div row">
            <ProductConsumer>
{(value)=>{
return value.products.map((product)=>{
return <Product key={product.id} product={product}  />
})
}}

            </ProductConsumer>

            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
