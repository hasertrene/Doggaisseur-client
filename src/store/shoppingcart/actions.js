import axios from "axios";
import { apiUrl } from "../../config/constants";

export const SHOPPINGCARD_DETAILS_FETCHED = "SHOPPINGCART_DETAILS_FETCHED";

const shoppingCartDetailsFetched = (cart) => ({
  type: SHOPPINGCART_DETAILS_FETCHED,
  payload: cart,
});

export const fetchShoppingCartById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/XXXXXXXXXXXXXXXXXXXX/${id}`);
    console.log(response);
    dispatch(shoppingCartDetailsFetched(response.data.XXXXXXXXXXXXXXXXXXX));
  };
};
