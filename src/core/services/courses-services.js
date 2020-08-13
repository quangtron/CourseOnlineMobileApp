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

export const apiGetCourseInfo = (id, userId) => {
    return axios.get(`https://api.itedu.me/course/get-course-detail/${id}/${userId}`)
}

export const apiGetMyCourses = (token) => {
    return axios.get('https://api.itedu.me/user/get-process-courses', {
        headers: { Authorization: `Bearer ${token}`}
    })
}

export const apiSearchCourse = (keyword, opt, offset, limit) => {
    return axios.post('https://api.itedu.me/course/search', { keyword, opt, offset, limit })
}

export const apiGetLesson = (token, lessonId) => {
    return axios.post('https://api.itedu.me/exercise/student/list-exercise-lesson', { lessonId }, {
        headers: { Authorization: `Bearer ${token}`}
    })
}