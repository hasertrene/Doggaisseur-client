import { SHOPPINGCART_DETAILS_FETCHED, NEW_CART_ITEM } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOPPINGCART_DETAILS_FETCHED:
      return [...state, ...action.payload];
    case NEW_CART_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};
