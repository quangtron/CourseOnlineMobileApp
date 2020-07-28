import axios from 'axios';

export const apiGetAllAuthors = () => {
    return axios.get('https://api.itedu.me/instructor');
}

export const apiGetDetailAuthor = (id) => {
    return axios.get(`https://api.itedu.me/instructor/detail/${id}`);
}