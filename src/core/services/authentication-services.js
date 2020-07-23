import axios from "axios";

export const apiLogin = (email, password) => {
    return axios.post('https://api.itedu.me/user/login', {
        email,
        password
    })
}

export const apiCheckOwnCourse = (id, token) => {
    return axios.get(`https://api.itedu.me/user/check-own-course/${id}`, {
        headers: { Authorization: `Bearer ${token}`}
    })
}