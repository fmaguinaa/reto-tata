import axios from 'axios';
// Actions
export const GET_USER_API_REQUEST = 'GET_USER_API_REQUEST';
export const GET_USER_API_SUCCESS = 'GET_USER_API_SUCCESS';
export const GET_USER_API_INVALID = 'GET_USER_API_INVALID';
export const GET_USER_API_ERROR = 'GET_USER_API_ERROR';

export function getUser() {
    return (dispatch) => {
        //Begin Request
        dispatch({type: GET_USER_API_REQUEST});
        return axios
            .get(`https://randomuser.me/api`, {
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then((response)=>{
                if(response.data) {
                    dispatch({type: GET_USER_API_SUCCESS, data: response.data.results});
                } else {
                    dispatch({
                        type: GET_USER_API_INVALID,
                        data: null,
                        error: "API no disponible",
                        response: true
                    });
                }
                return response;
            })
            .catch(error => {
                // Error Request
                let newError = "API no disponible";
                let response = Boolean(error.response);
                dispatch({type: GET_USER_API_ERROR, error:newError, response: response});
                return error;
            });
    };
}