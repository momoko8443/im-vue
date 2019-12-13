import axios from 'axios';

function login(username, password){
    return axios.post('/api/auth',
        {
            username:username,
            password: password
        }
    )
}

export default {
    login,
}