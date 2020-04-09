import {
  SHOPPINGCART_DETAILS_FETCHED,
  NEW_CART_ITEM,
  CLEAR_SHOPPING_CART,
} from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOPPINGCART_DETAILS_FETCHED:
      return [...action.payload];
    case NEW_CART_ITEM:
      return [...state, action.payload];
    case CLEAR_SHOPPING_CART:
      return [];
    default:
      return state;
  }
};
