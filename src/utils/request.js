import axios from 'axios'
import { API_STATE_ERR } from './constVal'
import { message } from 'antd'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.error(error)
    Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const {state} = response.data
    if (state === API_STATE_ERR) {
      message.error(response.data.message)
    }
    return response.data
  },
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service
