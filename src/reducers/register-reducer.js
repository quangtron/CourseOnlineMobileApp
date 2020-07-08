import { REGISTER_REQUEST, REGISTER_SUCCESSD, REGISTER_FAILED } from "../actions/register-action";

export const registerReducer = (preState, action) => {
    console.log('reducer: ', action);
    switch (action.type) {
        case REGISTER_REQUEST:
            return {...preState, isRegistering: true}
        case REGISTER_SUCCESSD:
            return {...preState, isRegistered: true, isRegistering: false, }
        case REGISTER_FAILED:
            return {...preState, isRegistered: false, isRegistering: false, }
        default:
            throw new Error();
    }
}