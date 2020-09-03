import React from "react";
import {CartItemStyled, ItemDetailsStyled} from "./CartItem.styles";

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
  <CartItemStyled>
    <img src={imageUrl} alt="item"/>
    <ItemDetailsStyled className='item-details'>
      <span>{name}</span>
      <span>{quantity} x ${price}</span>
    </ItemDetailsStyled>
  </CartItemStyled>
);

export default CartItem;
