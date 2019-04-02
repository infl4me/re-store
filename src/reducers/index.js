
import updateItemList from './itemList';
import updateCart from './cart';

const reducer = (state, action) => ({
  itemList: updateItemList(state, action),
  cart: updateCart(state, action),
});

export default reducer;
