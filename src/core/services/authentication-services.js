import axios from "axios";

export const apiLogin = (email, password) => {
  return axios.post("https://api.itedu.me/user/login", {
    email,
    password,
  });
};

export const apiCheckOwnCourse = (id, token) => {
  return axios.get(`https://api.itedu.me/user/check-own-course/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const apiLikeCourse = (courseId, token) => {
  return axios.post(
    "https://api.itedu.me/user/like-course",
    { courseId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const apiCheckLikeStatus = (courseId, token) => {
  return axios.get(
    `https://api.itedu.me/user/get-course-like-status/${courseId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const apiGetCoursesLiked = (token) => {
  return axios.get(
    'https://api.itedu.me/user/get-favorite-courses',
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const apiChangeInfoUser = (name, avatar, phone, token) => {
  return axios.put('https://api.itedu.me/user/update-profile', { name, avatar, phone }, {
    headers: { Authorization: `Bearer ${token}` }
  })
}

export const apiRatingCourse = (token, courseId, formalityPoint, contentPoint, presentationPoint, content) => {
  return axios.post('https://api.itedu.me/course/rating-course', { courseId, formalityPoint, contentPoint, presentationPoint, content}, {
    headers: { Authorization: `Bearer ${token}` }
  })
}