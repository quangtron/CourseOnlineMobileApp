import { apiVerifyEmail, apiActiveEmail, apiForgetPassword } from "../core/services/verify-email-services";

export const VERIFY_EMAIL_REQUEST = 'VERIFY_EMAIL_REQUEST';
export const VERIFY_EMAIL_SUCCESSED = 'VERIFY_EMAIL_SUCCESSED';
export const VERIFY_EMAIL_FAILED = 'VERIFY_EMAIL_FAILED';
export const ACTIVATE_EMAIL_REQUEST = 'ACTIVATE_EMAIL_REQUEST';
export const ACTIVATE_EMAIL_SUCCESSED = 'ACTIVATE_EMAIL_SUCCESSED';
export const ACTIVATE_EMAIL_FAILED = 'ACTIVATE_EMAIL_FAILED';

const verifyEmailSuccessed = () => ({
    type: VERIFY_EMAIL_SUCCESSED
})

const verifyEmailFailed = () => ({
    type: VERIFY_EMAIL_FAILED
})

const activateEmailSuccessed = (token) => ({
    type: ACTIVATE_EMAIL_SUCCESSED,
    token
})

const activateEmailFailed = () => ({
    type: ACTIVATE_EMAIL_FAILED
})

export const verifyEmail = (dispatch) => (email) => {
    dispatch({type: VERIFY_EMAIL_REQUEST});

    apiVerifyEmail(email)
        .then((res) => {
            if(res.status === 200) {
                console.log('email: ',res.data.message);
                dispatch(verifyEmailSuccessed());
            } else {
                dispatch(verifyEmailFailed());
            }
        })
        .catch((err) => {
            console.log('error:', err);
            dispatch(verifyEmailFailed());
        })
}

export const activateEmail = (dispatch) => (token) => {
    dispatch({type: ACTIVATE_EMAIL_REQUEST});

    apiActiveEmail(token)
        .then((res) => {
            if(res.status === 200) {
                dispatch(activateEmailSuccessed(res.data));
            } else {
                console.log(2)
                dispatch(activateEmailFailed());
            }
        })
        .catch((err) => {
            console.log('error:', err);
            dispatch(activateEmailFailed());
        })
}

export const forgetPassword = (dispatch) => (email) => {
    dispatch({type: VERIFY_EMAIL_REQUEST});

    apiForgetPassword(email)
        .then((res) => {
            if(res.status === 200) {
                console.log('email: ',res.data.message);
                dispatch(verifyEmailSuccessed());
            } else {
                dispatch(verifyEmailFailed());
            }
        })
        .catch((err) => {
            console.log('error:', err);
            dispatch(verifyEmailFailed());
        })
}