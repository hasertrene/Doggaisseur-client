import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectCardId } from "./selectors";
import { selectUser } from "../../store/user/selectors";

export const SHOPPINGCART_DETAILS_FETCHED = "SHOPPINGCART_DETAILS_FETCHED";
export const NEW_CART_ITEM = "NEW_CART_ITEM";

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

const newCartItem = (service) => ({
  type: NEW_CART_ITEM,
  payload: service,
});

export const addService = (serviceId, quantity) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    const response = await axios.post(
      `${apiUrl}/cart`,
      { quantity, serviceId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("RESPONSE", response);
  };
};

export const orderPlaced = () => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    const response = await axios.delete(
      `${apiUrl}/cart`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
      {}
    );
    console.log("RESPONSE", response);
  };
};
