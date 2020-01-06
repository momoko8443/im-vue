import axios from 'axios';
const domain = process.env.VUE_APP_API_SERVER;
function login(username, password){

    return axios.post(domain+'/api/auth',
        {
            username:username,
            password: password
        }
    )
}

export default {
    login,
}