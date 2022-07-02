import { LOG_IN_SUCCESS, LOG_IN_FAILURE } from "./actions/login";

function login(state = [], action) {
  const response = action.response;
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return { ...state, response };
    case LOG_IN_FAILURE:
      return { ...state, response };
    default:
      return state;
  }
}
export { login };
