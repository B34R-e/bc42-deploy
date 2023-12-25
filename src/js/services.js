// Thư viện axios dùng cú pháp require và module.exports của Node.js, nên ta không thể sử dụng cú pháp import của ES6.
// import axios from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';

import axios from 'axios';

const URL = "https://jsonplaceholder.typicode.com/users"

export function getProducts(){
    return axios({
        method: "GET",
        url: URL,
    });
}