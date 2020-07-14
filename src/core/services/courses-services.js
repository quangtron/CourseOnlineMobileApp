import axios from "axios";

export const apiNewCourses = (limit, page) => {
    return axios.post('https://api.itedu.me/course/top-new', {
        limit,
        page
    })
}

export const apiTopSell = (limit, page) => {
    return axios.post('https://api.itedu.me/course/top-sell', {
        limit,
        page
    })
}

export const apiTopRate = (limit, page) => {
    return axios.post('https://api.itedu.me/course/top-rate', {
        limit,
        page
    })
}