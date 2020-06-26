import * as actionTypes from "../actions/actionTypes";
import Request from "../../services/api-services";

const api = new Request(process.env.BASE_URL);

const initialState = {
  token: null,
  user: null,
  isAuth: api.isloggedIn(),
  error: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.authConstants.LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        isAuth: false,
        error: action.errors.message,
      };
    case actionTypes.authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        isAuth: true,
        error: null,
      };
    case actionTypes.authConstants.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.student,
      };
    case actionTypes.authConstants.LOGOUT:
      return {
        ...state,
        token: null,
        isAuth: false,
        user: null,
        error: null,
      };
    case actionTypes.authConstants.SIGNUP_FAILURE:
      return {
        ...state,
        token: null,
        isAuth: false,
        error: action.errors.response.data,
      };
    case actionTypes.authConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.token,
        isAuth: true,
        error: null,
      };
    case actionTypes.authConstants.UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
