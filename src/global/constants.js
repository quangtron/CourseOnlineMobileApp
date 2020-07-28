export const ScreenKey = {
    Home: 'Home',
    Browse: 'Browse',
    Download: 'Download',
    Search: 'Search',
    ListCourses: 'ListCourses',
    Splashscreen: 'Splashscreen',
    Login: 'Login',
    MainTab: 'MainTab',
    CourseDetail: 'CourseDetail',
    Setting: 'Setting',
    SkillDetail: 'SkillDetail',
    All: 'Kết quả',
    Courses: 'Courses',
    Paths: 'Paths',
    Authors: 'Authors',
    Profile: 'Profile',
    Register: 'Register',
    ForgetPassword: 'ForgetPassword',
    VerifyPassword: 'VerifyPassword',
    Subscription: 'Subscription',
    AuthorDetail: 'AuthorDetail',
}

export const Images = {
    NewReleases: require('../../assets/newCourse.jpg'),
    Recommended: require('../../assets/recommend.jpg'),
    Code: require('../../assets/code.jpg'),
}

export const ArrayTimes = [
    {
        name: 'Từ 0 đến 5 giờ',
        condition: {
            min: 0,
            max: 4.9,
        }
    },
    {
        name: 'Từ 5 đến 10 giờ',
        condition: {
            min: 5,
            max: 9.9,
        }
    },
    {
        name: 'Từ 10 đến 20 giờ',
        condition: {
            min: 10,
            max: 19.9,
        }
    },
    {
        name: 'Hơn 20 giờ',
        condition: {
            min: 20,
            max: 1000,
        }
    },
]

export const ArrayPrices = [
    {
        name: 'Miễn phí',
        condition: {
            max: 0,
        }
    },
    {
        name: 'Dưới 200.000đ',
        condition: {
            min: 1,
            max: 200000,
        }
    },
    {
        name: 'Từ 200.000đ đến 500.000đ',
        condition: {
            min: 200000,
            max: 499999,
        }
    },
    {
        name: 'Từ 500.000đ đến 1 triệu',
        condition: {
            min: 500000,
            max: 999999,
        }
    },
    {
        name: 'Từ 1 triệu đến 2 triệu',
        condition: {
            min: 1000000,
            max: 1999999,
        }
    },
    {
        name: 'Trên 2 triệu',
        condition: {
            min: 2000000,
            max: 100000000,
        }
    },
]

export const ArraySelect = [
    { label: "Giá tăng dần", value: {name: "price", rule: "ASC"} },
    { label: "Giá giảm dần", value: {name: "price", rule: "DESC"} },
    { label: "Mới nhất", value: {name: "updatedAt", rule: "DESC"} },
    { label: "Bán chạy nhất", value: {name: "soldNumber", rule: "DESC"} },
  ]