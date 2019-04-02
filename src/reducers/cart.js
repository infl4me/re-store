const initialState = {
  items: [],
  orderTotal: 145,
};

export default (state, action) => {
  if (state === undefined) return initialState;

  const { cart: cartState } = state;

  const inc = ({ count, price, total }) => ({ count: count + 1, total: total + price });
  const dec = ({ count, price, total }) => (
    count <= 1 ? null : { count: count - 1, total: total - price }
  );

  const updateItem = fn => ({
    ...cartState,
    items: cartState.items.reduce((acc, item) => {
      if (item.id === action.payload) {
        const newParams = fn(item);
        return newParams ? [...acc, { ...item, ...newParams }] : acc;
      }
      return [...acc, item];
    }, []),
  });

  switch (action.type) {
    case 'ADD_BOOK_TO_CART': {
      const bookId = action.payload;
      const { title, price } = state.itemList.books.find(book => book.id === bookId);
      const item = cartState.items.find(({ id }) => id === bookId);
      if (item) {
        return updateItem(inc);
      }

      const newItem = {
        id: bookId,
        title,
        count: 1,
        price,
        total: price,
      };

      return {
        ...cartState,
        items: [...cartState.items, newItem],
      };
    }
    case 'INCREASE_BOOK_IN_CART':
      return updateItem(inc);

    case 'DECREASE_BOOK_IN_CART':
      return updateItem(dec);

    case 'DELETE_BOOK_IN_CART':
      return updateItem(() => null);

    default:
      return cartState;
  }
};
