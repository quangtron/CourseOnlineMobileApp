import { apiLogin } from "../core/services/authentication-services";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESSED = 'LOGIN_SUCCESSED';
export const LOGIN_FAILED = 'LOGIN_FAILED';

const loginSuccessed = (data) => ({
    type: LOGIN_SUCCESSED,
    data
})

const loginFailed = (message) => ({
    type: LOGIN_FAILED,
    message
})

export const login = (dispatch) => (email, password) => {
    dispatch({type: LOGIN_REQUEST});

    apiLogin(email, password)
        .then((res) => {
            if(res.status === 200){
                dispatch(loginSuccessed(res.data));
            } else {
                dispatch(loginFailed());
            }
        })
        .catch((err) => {
            console.log('error: ', err.response);
            dispatch(loginFailed(err.response.data.message));
        })
}