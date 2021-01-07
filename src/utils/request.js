import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

service.interceptors.request.use(
  config => {

  },
  error => {
    console.error(error)
    Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service
