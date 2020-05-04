import axios from 'axios'

const api = axios.create({
    baseURL: 'https://mghack-apis.herokuapp.com/usersapi/'
});

export default api;