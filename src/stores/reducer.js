import { combineReducers } from "redux";
import { login } from "./modules/auth/reducer";

const rootReducer = combineReducers({
  login,
});

export default rootReducer;
