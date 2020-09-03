import React from "react";
import {connect} from 'react-redux';

import {clearItemFromCart, addItem, removeItem} from "../../redux/cart/cart.actions";

import {Arrow, CheckoutItemStyled, ImageContainer, Quantity, RemoveButton} from "./CheckoutItem.styles";

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemStyled>
      <ImageContainer>
        <img src={imageUrl} alt="Item"/>
      </ImageContainer>
      <span>{name}</span>
      <Quantity>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <div>{quantity}</div>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <span>{price}</span>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemStyled>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
