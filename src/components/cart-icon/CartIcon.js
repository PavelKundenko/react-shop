import React from "react";
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {CartIconStyles, ItemCount, ShoppingIconStyled} from "./CartIcon.styles";


const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconStyles onClick={toggleCartHidden}>
    <ShoppingIconStyled />
    <ItemCount>{itemCount}</ItemCount>
  </CartIconStyles>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
