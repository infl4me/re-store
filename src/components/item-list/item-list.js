import React from 'react';
import { connect } from 'react-redux';
import ItemDetails from '../item-details';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookstoreService } from '../hoc';
import * as actions from '../../actions';
import { compose } from '../../utils';
import './item-list.css';

const ItemList = ({ books, onAddedToCart }) => {
  const items = books.map(item => (
    <ItemDetails
      key={item.id}
      onAddedToCart={() => onAddedToCart(item.id)}
      book={item}
    />
  ));
  return (
    <ul className="item-list__list">{items}</ul>
  );
};

class ItemListContainer extends React.Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    const {
      books, error, loading, onAddedToCart,
    } = this.props;
    return (
      <div className="item-list">
        {loading && <Spinner />}
        {error && <ErrorIndicator />}
        {!loading && !error && <ItemList books={books} onAddedToCart={onAddedToCart} />}
      </div>
    );
  }
}

const mapStateToProps = ({ itemList: { books, loading, error } }) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
  fetchBooks: actions.fetchBooks(dispatch, bookstoreService),
  onAddedToCart: id => dispatch(actions.bookAddedToCart(id)),
});

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(ItemListContainer);
