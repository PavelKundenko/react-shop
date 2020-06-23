import React from "react";
import { connect } from 'react-redux';
import './Header.styles.scss';
import {Link} from "react-router-dom";
import { createStructuredSelector } from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className="options">
      <Link to='/shop' className='option'>
        Shop
      </Link>
      <Link to='/contact' className='option'>
        Contact
      </Link>
      {
        currentUser ?
          (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>)
          :
          (<Link to='/signin' className='option'>Sign In</Link>)
      }
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown/>
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);