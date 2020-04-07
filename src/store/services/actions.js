import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchServicesSuccess = (services) => ({
  type: "FETCH_SERVICES_SUCCESS",
  payload: services,
});

export const fetchServices = () => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/services`);
    dispatch(fetchServicesSuccess(response.data));
  };
};
