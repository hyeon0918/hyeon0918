// Food.js

import React, { Component } from 'react'

export class Food extends Component {
   state = {
      price : 10000,
      discountPrice : 0,
   }

   discount = () => {
      this.setState( current => (

      { discountPrice : current.price * 0.7 }
      ))
   }
  render() {
   const { price, discountPrice } = this.state;
    return (
      <>
         <div>Food</div>
         <h1>Food 가격 : { price }</h1>
         <h2>할인가격 : { discountPrice }</h2>
         <button onClick = { this.discount }> 30% 할인</button>
   </>
   )
  }
}

export default Food;