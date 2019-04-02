const booksLoaded = newBooks => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks,
});

const booksRequested = () => ({ type: 'FETCH_BOOKS_REQUEST' });
const booksError = err => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload: err,
});

const bookAddedToCart = id => ({
  type: 'ADD_BOOK_TO_CART',
  payload: id,
});

const bookIncreasedInCart = id => ({
  type: 'INCREASE_BOOK_IN_CART',
  payload: id,
});

const bookDecreasedInCart = id => ({
  type: 'DECREASE_BOOK_IN_CART',
  payload: id,
});

const bookDeleteInCart = id => ({
  type: 'DELETE_BOOK_IN_CART',
  payload: id,
});

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)));
};

export {
  fetchBooks,
  bookAddedToCart,
  bookIncreasedInCart,
  bookDecreasedInCart,
  bookDeleteInCart,
};
