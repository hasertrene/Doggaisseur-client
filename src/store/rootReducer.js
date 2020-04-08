import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import services from "./services/reducer";
import feedback from "./feedback/reducer";
import shoppingcart from "./shoppingcart/reducer";

export default combineReducers({
  appState,
  user,
  services,
  feedback,
  shoppingcart,
});
