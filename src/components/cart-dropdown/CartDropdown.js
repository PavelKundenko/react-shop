import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector} from "reselect";
import {withRouter} from "react-router";

import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {CartDropdownContainer, CartItemsContainer, EmptyMessage} from "./CartDropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )
      }
    </CartItemsContainer>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>Go to checkout</CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
