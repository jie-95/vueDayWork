//1111111111111111111111111111111

import axios from 'axios';
// axios.default.baseUrl = 'http://localhost:3000';
const request = axios.create({
    baseURL: 'http://localhost:3000',
})
// export default axios;
export default request;