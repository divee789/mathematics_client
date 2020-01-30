import { Dispatch } from 'redux'

import * as actionTypes from './actionTypes';
import { Course } from '../types'

import APIRequest from '../../services/api-services';
import APIServiceError from '../../services/error-services';

const BaseURL = process.env.BASE_URL || 'http://localhost:1000';
const Request = new APIRequest(BaseURL);


export function get_level_courses(level: number) {
    function request() {
        return { type: actionTypes.courseConstants.FETCH_COURSE_REQUEST }
    }
    function success(courses: Course) {
        return { type: actionTypes.courseConstants.FETCH_COURSE_SUCCESS, courses }
    }
    function failure(errors: any) {
        return { type: actionTypes.courseConstants.FETCH_COURSE_FAILURE, errors }
    }

    return async (dispatch: Dispatch) => {
        try {
            await dispatch(request())
            const course = await Request.getLevelCourses(level)
            console.log('action_course', course)
            dispatch(success(course))
        } catch (error) {
            if (error instanceof APIServiceError) {
                console.log(error);
                dispatch(failure(error));
                throw error.response.data;
            }
        }
    }
}