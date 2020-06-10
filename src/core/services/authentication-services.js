export const login = (username, password) => {
    if(username.toLowerCase() === 'admin'){
        if(password === '123456'){
            return {status: 200, user: {username, token: 'abc123', fullname: 'Administrator'}}
        } else {
            return {status: 404, errorString: 'Username & Password are not match!'}
        }
    }

    return {status: 404, errorString: 'User is not existed!'}
}