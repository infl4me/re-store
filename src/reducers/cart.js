const initialState = {
  items: [],
  orderTotal: 0,
};

export default (state, action) => {
  if (state === undefined) return initialState;

  const { cart: cartState } = state;

  const updateItem = (newItem, id) => (
    cartState.items.reduce((acc, item) => {
      if (item.id === id) {
        return [...acc, newItem];
      }
      return [...acc, item];
    }, [])
  );

  const removeItem = id => cartState.items.filter(item => item.id !== id);

  const updateState = (multiplier = 1, book) => {
    const id = book ? book.id : action.payload;
    const item = book || cartState.items.find(el => el.id === id);
    const newOrderTotal = cartState.orderTotal + (item.price * multiplier);
    const newItem = {
      ...item,
      count: item.count + multiplier,
      total: item.total + item.price * multiplier,
    };
    const newItems = newItem.count <= 0 ? removeItem(id) : updateItem(newItem, id);

    return {
      orderTotal: newOrderTotal,
      items: newItems,
    };
  };

  switch (action.type) {
    case 'ADD_BOOK_TO_CART': {
      const bookId = action.payload;
      const { title, price } = state.itemList.books.find(book => book.id === bookId);
      const item = cartState.items.find(({ id }) => id === bookId);
      if (item) {
        return updateState(1, item);
      }

      const newItem = {
        id: bookId,
        title,
        count: 1,
        price,
        total: price,
      };

      return {
        orderTotal: cartState.orderTotal + price,
        items: [...cartState.items, newItem],
      };
    }
    case 'INCREASE_BOOK_IN_CART':
      return updateState();

    case 'DECREASE_BOOK_IN_CART':
      return updateState(-1);

    case 'DELETE_BOOK_IN_CART': {
      const item = cartState.items.find(el => el.id === action.payload);
      return updateState(-item.count, item);
    }

    default:
      return cartState;
  }
};
