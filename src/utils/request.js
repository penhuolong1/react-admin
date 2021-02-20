import axios from 'axios'
import { API_STATE_ERR } from './constVal'
import ReactDOM from 'react-dom';
import { message, Spin} from 'antd'
import { isUnderfined, isNull} from '@/utils/tools.js'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

let requestCount = 0
// 显示loading
function showLoading (text = '加载中...') {
  if (requestCount === 0) {
      var dom = document.createElement('div')
      dom.setAttribute('id', 'loading')
      document.body.appendChild(dom)
      ReactDOM.render(<Spin tip={text} size="large"/>, dom)
  }
  requestCount++
}
// 隐藏loading
function hideLoading () {
  requestCount--
  if (requestCount === 0) {
      document.body.removeChild(document.getElementById('loading'))
  }
}
service.interceptors.request.use(
  config => {
    if (config.headers.isLoading) {
      showLoading(config.headers.loadingText)
    }
    return config;
  },
  error => {
    if (error.config.headers.isLoading) {
    hideLoading()

    }
    console.error(error)
    Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    if (response.config.headers.isLoading) {
        hideLoading()
    }
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
