import axios from "axios";

export const apiLogin = (email, password) => {
    return axios.post('https://api.itedu.me/user/login', {
        email,
        password
    })
}