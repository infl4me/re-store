import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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

const mapStateToProps = ({ cart: { items } }) => ({
  numItems: items.reduce((acc, item) => acc + item.count, 0),
  total: items.reduce((acc, item) => acc + item.total, 0),
});

export default connect(mapStateToProps)(Header);
