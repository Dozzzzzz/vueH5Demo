import axios from 'axios'; 
import { API } from '../config'


// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 根据环境获取不同的baseUrl
axios.defaults.baseURL = API

