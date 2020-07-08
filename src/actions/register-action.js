import { apiRegister } from "../core/services/register-services";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESSD = 'REGISTER_SUCCESSD';
export const REGISTER_FAILED = 'REGISTER_FAILED';

const registerSuccessed = () => ({
    type: REGISTER_SUCCESSD
})

const registerFailed = () => ({
    type: REGISTER_FAILED
})

export const register = (dispatch) => (username, email, phone, password) => {
    dispatch({type: REGISTER_REQUEST});
    
    apiRegister(username, email, phone, password)
        .then((res) => {
            if(res.status === 200){
                console.log('register: ', res.data);
                dispatch(registerSuccessed());
            } else {
                dispatch(registerFailed());
            }
        })
        .catch((err) => {
            console.log('error:', err);
            dispatch(registerFailed());
        })
}