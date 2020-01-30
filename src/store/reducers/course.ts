
import * as actionTypes from '../actions/actionTypes'
import { Storage } from '../../services/storage-services'

const initialState = {
    courses: null,
    course: null,
    processing: false,
    error: null
}

const courseReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case actionTypes.courseConstants.FETCH_COURSE_REQUEST:
            return {
                ...state,
                processing: true,
                error: {}
            };
        case actionTypes.courseConstants.FETCH_COURSE_FAILURE:
            return {
                ...state,
                processing: false,
                courses:null,
                error: action.errors.response.data
            };
        case actionTypes.courseConstants.FETCH_COURSE_SUCCESS:
            return {
                ...state,
                courses: action.courses,
                processing: false
            };
        default:
            return state;
    }
}

export default courseReducer








