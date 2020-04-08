import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectCardId } from "./selectors";

export const SHOPPINGCART_DETAILS_FETCHED = "SHOPPINGCART_DETAILS_FETCHED";
export const NEW_CART_ITEM = "NEW_CART_ITEM";

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

const newCartItem = (service) => ({
  type: NEW_CART_ITEM,
  payload: service,
});

export const addService = (serviceId, service) => {
  return async (dispatch, getState) => {
    dispatch(newCartItem(service));
    const cartId = selectCardId(getState());
    const response = await axios.patch(`${apiUrl}/${cartId}`, { serviceId });
  };
};
