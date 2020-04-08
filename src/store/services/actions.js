import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchServicesSuccess = (services) => ({
  type: "FETCH_SERVICES_SUCCESS",
  payload: services,
});

export const fetchServices = () => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/services`);
    console.log("RESPONSE", response);
    dispatch(fetchServicesSuccess(response.data));
  };
};

// export const fetchCategoriesSuccess = (categories) => ({
//   type: "FETCH_CATEGORIES_SUCCESS",
//   payload: categories,
// });

// export const fetchCategories = () => {
//   return async (dispatch) => {
//     const response = await axios.get(`${apiUrl}/services/categories`);
//     console.log("RESPONSE", response);
//     dispatch(fetchCategoriesSuccess(response.data));
//   };
// };
