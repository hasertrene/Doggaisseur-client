import { SHOPPINGCART_DETAILS_FETCHED } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOPPINGCART_DETAILS_FETCHED:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
