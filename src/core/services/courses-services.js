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

export const apiSearchCourse = (token, keyword, opt, offset, limit) => {
    return axios.post('https://api.itedu.me/course/searchV2', { token, keyword, opt, offset, limit })
}

export const apiSearchHistory = (token) => {
    return axios.get('https://api.itedu.me/course/search-history', {
        headers: { Authorization: `Bearer ${token}`}
    })
}

export const apiGetLesson = (token, lessonId) => {
    return axios.post('https://api.itedu.me/exercise/student/list-exercise-lesson', { lessonId }, {
        headers: { Authorization: `Bearer ${token}`}
    })
}

export const apiDeleteSearchHistory = (token, id) => {
    return axios.delete(`https://api.itedu.me/course/delete-search-history/${id}`, {
        headers: { Authorization: `Bearer ${token}`}
    })
}