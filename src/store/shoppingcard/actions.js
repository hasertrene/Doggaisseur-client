import axios from "axios";
import { apiUrl } from "../../config/constants";

export const SHOPPINGCARD_DETAILS_FETCHED = "SHOPPINGCARD_DETAILS_FETCHED";

const shoppingCardDetailsFetched = (card) => ({
  type: SHOPPINGCARD_DETAILS_FETCHED,
  payload: card,
});

export const fetchShoppingCardById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/XXXXXXXXXXXXXXXXXXXX/${id}`);
    console.log(response);
    dispatch(shoppingCardDetailsFetched(response.data.XXXXXXXXXXXXXXXXXXX));
  };
};
