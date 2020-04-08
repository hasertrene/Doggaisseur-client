import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectUser } from "../../store/user/selectors";

export const SHOPPINGCART_DETAILS_FETCHED = "SHOPPINGCART_DETAILS_FETCHED";

const shoppingCartDetailsFetched = (cart) => ({
  type: SHOPPINGCART_DETAILS_FETCHED,
  payload: cart,
});

export const fetchShoppingCartById = (id) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());

    const response = await axios.get(`${apiUrl}/cart`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("WHAT IS CART RESPONSE", response);
    dispatch(shoppingCartDetailsFetched(response.data.items));
  };
};
