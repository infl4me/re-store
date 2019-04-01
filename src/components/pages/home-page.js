import React from 'react';
import ItemList from '../item-list';
import CartTable from '../cart-table';

const HomePage = () => (
  <React.Fragment>
    <ItemList />
    <CartTable />
  </React.Fragment>
);

export default HomePage;
