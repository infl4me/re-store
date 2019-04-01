import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ numItems, total }) => (
  <header className="header">
    <div className="header__logo">
      <Link className="header__logo-link" to="/">ReStore</Link>
    </div>
    <div>
      <span className="header__cart-icon fa fa-shopping-cart" />
      <Link className="header__cart-link" to="/cart">{` ${numItems} items ($${total})`}</Link>
    </div>
  </header>
);

export default Header;