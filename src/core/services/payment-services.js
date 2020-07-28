import axios from 'axios';

export const apiGetCourseInfoForPayment = (id) => {
    return axios.get(`https://api.itedu.me/payment/get-course-info/${id}`);
}

export const apiGetFreeCourse = (courseId, token) => {
    return axios.post('https://api.itedu.me/payment/get-free-courses', {
        courseId,
    }, {headers: { Authorization: `Bearer ${token}`}});
}