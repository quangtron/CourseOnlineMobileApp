import axios from 'axios';

export const apiVerifyEmail = (email) => {
    return axios.post('https://api.itedu.me/user/send-activate-email', { email });
}

export const apiActiveEmail = (token) => {
    return axios.put('https://api.itedu.me/user/activate-email', {token});
}

export const apiForgetPassword = (email) => {
    return axios.post('https://api.itedu.me/user/forget-pass/send-email', {email});
}