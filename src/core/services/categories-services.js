import axios from 'axios';

export const apiGetAllCategories = () => {
    return axios.get('https://api.itedu.me/category/all')
}