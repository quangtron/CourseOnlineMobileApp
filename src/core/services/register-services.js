import axios from 'axios';

export const apiRegister = (username, email, phone, password) => {
    return axios.post('https://api.itedu.me/user/register', {
        username,
        email,
        phone,
        password
    });
}