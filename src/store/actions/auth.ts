import * as actionTypes from "./actionTypes";
import APIRequest from "../../services/api-services";
import GraphQlApi from "../../services/graphqlApis";
import APIServiceError from "../../services/error-services";

const authBaseURL = process.env.BASE_URL || "http://localhost:1000";
const authAPIRequest = new APIRequest(authBaseURL);
const graphQlRequest = new GraphQlApi();

export function logout() {
  function request() {
    return { type: actionTypes.authConstants.LOGOUT };
  }
  return async (dispatch: any) => {
    try {
      await authAPIRequest.logout();
      await dispatch(request());
    } catch (error) {
      if (error instanceof APIServiceError) {
        throw error.response.data;
      }
    }
  };
}
export function login(data: any) {
  function failure(errors: any) {
    return { type: actionTypes.authConstants.LOGIN_FAILURE, errors };
  }
  return async (dispatch: any) => {
    try {
      await graphQlRequest.signIn();
    } catch (error) {
      dispatch(failure(error));
    }
  };
}
export function signup(data: any) {
  function success(user: any) {
    return { type: actionTypes.authConstants.SIGNUP_SUCCESS, user };
  }
  function failure(errors: any) {
    return { type: actionTypes.authConstants.SIGNUP_FAILURE, errors };
  }
  return async (dispatch: any) => {
    try {
      const userDetails = await authAPIRequest.signUp(data);
      dispatch(success(userDetails));
    } catch (error) {
      if (error instanceof APIServiceError) {
        dispatch(failure(error));
        throw error.response.data;
      }
    }
  };
}
export function update(data: any) {
  function request() {
    return { type: actionTypes.authConstants.SIGNUP_REQUEST };
  }
  function success(user: any) {
    return { type: actionTypes.authConstants.UPDATE_USER_SUCCESS, user };
  }
  function failure(errors: any) {
    return { type: actionTypes.authConstants.UPDATE_USER_FAILURE, errors };
  }
  return async (dispatch: any) => {
    try {
      await dispatch(request());
      if (data.profile_image) {
        console.log("redux image data", data);
        dispatch(success(data));
        return;
      }
      const userDetails = await authAPIRequest.update(data);
      console.log(userDetails);
      dispatch(success(userDetails));
    } catch (error) {
      if (error instanceof APIServiceError) {
        dispatch(failure(error));
        throw error.response.data;
      }
    }
  };
}
