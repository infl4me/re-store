import React from 'react';
import './item-details.css';

const ItemDetails = ({ book }) => {
  const {
    title, author, price, coverImage,
  } = book;
  return (
    <li className="item">
      <div className="item__img-box">
        <img src={coverImage} alt="book" className="item__img" />
      </div>
      <div className="item__box">
        <h3 className="item__title">{title}</h3>
        <div className="item__author">{author}</div>
        <div className="item__price">{`$${price}`}</div>
        <button className="btn btn-blue item__btn" type="button">Add to cart</button>
      </div>
    </li>
  );
};

export default ItemDetails;
