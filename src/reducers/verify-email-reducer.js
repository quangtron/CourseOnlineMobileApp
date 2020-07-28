import { VERIFY_EMAIL_SUCCESSED, VERIFY_EMAIL_FAILED, VERIFY_EMAIL_REQUEST, ACTIVATE_EMAIL_REQUEST, ACTIVATE_EMAIL_SUCCESSED, ACTIVATE_EMAIL_FAILED } from "../actions/verify-email-action";

export const verifyEmailReducer = (preState, action) => {
    console.log('reducer verify: ', action);
    switch (action.type) {
        case VERIFY_EMAIL_REQUEST:
            return {...preState, isVerifying: true}
        case VERIFY_EMAIL_SUCCESSED:
            return {...preState, isVerifying: false, isVerifyed: true}
        case VERIFY_EMAIL_FAILED:
            return {...preState, isVerifying: false, isVerifyed: false}
        case ACTIVATE_EMAIL_REQUEST:
            return {...preState, isActivating: true}
        case ACTIVATE_EMAIL_SUCCESSED:
            return {...preState, isActivating: false, isActivated: true, access_token: action.token}
        case ACTIVATE_EMAIL_FAILED:
            return {...preState, isActivating: false, isActivated: false}
        default:
            throw new Error();
    }
}