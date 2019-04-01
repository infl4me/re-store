import React from 'react';
import { connect } from 'react-redux';
import './cart-table.css';

const CartTable = (props) => {
  const {
    items, onIncrease, onDecrease, onDelete, orderTotal,
  } = props;
  const renderRow = (item, idx) => {
    const {
      id, name, count, total,
    } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button onClick={() => onIncrease(id)} type="button" className="btn btn-plus">
            <span className="fa fa-plus-circle" />
          </button>
          <button onClick={() => onDecrease(id)} type="button" className="btn btn-minus">
            <span className="fa fa-minus-circle" />
          </button>
          <button onClick={() => onDelete(id)} type="button" className="btn btn-trash">
            <span className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="cart-table">
      <h2 className="cart-table__title">Your Order</h2>
      <table className="cart-table__table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>

      <div className="cart-table__total">
        {`Total: $${orderTotal}`}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => ({
  items: cartItems,
  orderTotal,
});

const mapDispatchToProps = () => ({
  onIncrease: id => console.log(`increase ${id}`),
  onDecrease: id => console.log(`decrease ${id}`),
  onDelete: id => console.log(`delete ${id}`),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
