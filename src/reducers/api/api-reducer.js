import {
    GET_USER_API_REQUEST,
    GET_USER_API_SUCCESS,
    GET_USER_API_ERROR,
    GET_USER_API_INVALID,
} from "../../actions/api/api";

var stateInitital = {
    getUserApi: {
        response: false,
        success: false,
        data: null,
        error: null,
        loading: false,
    },
};

const apiReducer = (state = stateInitital, action) => {
    switch (action.type) {
        case GET_USER_API_REQUEST:
            return {
                ...state,
                getUserApi: {
                    ...state.getUserApi,
                    loading: true,
                },
            };
        case GET_USER_API_SUCCESS:
            return {
                ...state,
                getUserApi: {
                    ...state.getUserApi,
                    data: action.data,
                    success: true,
                    response: true,
                    loading: false,
                    error: null,
                    extra: action.extra,
                },
            };
        case GET_USER_API_ERROR:
            return {
                ...state,
                getUserApi: {
                    ...state.getUserApi,
                    data: null,
                    extra: null,
                    success: false,
                    loading: false,
                    response: action.response,
                    error: action.error,
                },
            };

        case GET_USER_API_INVALID:
            return {
                ...state,
                getUserApi: {
                    ...state.getUserApi,
                    data: null,
                    extra: null,
                    success: false,
                    loading: false,
                    response: action.response,
                    error: action.error,
                },
            };
        default:
            return state;
    }
};

export default apiReducer;
