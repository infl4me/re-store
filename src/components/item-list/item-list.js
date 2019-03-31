import React from 'react';
import { connect } from 'react-redux';
import ItemDetails from '../item-details';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
import './item-list.css';

class ItemList extends React.Component {
  componentDidMount() {
    const { bookstoreService: { getBooks }, booksLoaded } = this.props;
    getBooks()
      .then((data) => {
        booksLoaded(data);
      });
  }

  render() {
    const { books } = this.props;
    const items = books.map(item => <ItemDetails key={item.id} book={item} />);
    return (
      <ul>{items}</ul>
    );
  }
}

const mapStateToProps = ({ books }) => ({ books });

const mapDispatchToProps = { booksLoaded };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(ItemList);
