import { Dispatch } from "redux";

import * as actionTypes from "./actionTypes";
import GraphQlApi from "../../services/graphqlApis";

import APIRequest from "../../services/api-services";
import APIServiceError from "../../services/error-services";
import { ICourse } from "../../interfaces";

const BaseURL = process.env.BASE_URL || "http://localhost:1000";
const Request = new APIRequest(BaseURL);

const graphQlRequest = new GraphQlApi();

export function get_level_courses(level: number) {
  function success(courses: ICourse) {
    return { type: actionTypes.courseConstants.FETCH_COURSE_SUCCESS, courses };
  }

  return async (dispatch: Dispatch) => {
    try {
      const courses = await graphQlRequest.getLevelCourses(level);
      console.log("action_course", courses);
      dispatch(success(courses));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export function getLecturers(page: number) {
  function request() {
    return { type: actionTypes.courseConstants.FETCH_LECTURERS_REQUEST };
  }
  function success(lecturers: any) {
    console.log("action", lecturers);
    return {
      type: actionTypes.courseConstants.FETCH_LECTURERS_SUCCESS,
      lecturers,
    };
  }
  function failure(errors: any) {
    return {
      type: actionTypes.courseConstants.FETCH_LECTURERS_FAILURE,
      errors,
    };
  }

  return async (dispatch: Dispatch) => {
    try {
      await dispatch(request());
      const lecturers = await Request.getLecturers(page);
      console.log("action_lecturers", lecturers);
      dispatch(success(lecturers));
    } catch (error) {
      if (error instanceof APIServiceError) {
        console.log("error in getting lecturer", error);
        dispatch(failure(error));
      }
    }
  };
}
