import React from 'react';
import { connect } from 'react-redux';
import ItemDetails from '../item-details';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';
import './item-list.css';

const ItemList = ({ books }) => {
  const items = books.map(item => <ItemDetails key={item.id} book={item} />);
  return (
    <ul className="item-list__list">{items}</ul>
  );
};

class ItemListContainer extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { books, error, loading } = this.props;
    return (
      <div className="item-list">
        {loading && <Spinner />}
        {error && <ErrorIndicator />}
        {!loading && !error && <ItemList books={books} />}
      </div>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
  fetchData: fetchBooks(dispatch, bookstoreService),
});

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(ItemListContainer);
