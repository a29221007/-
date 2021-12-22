import axios from 'axios'
// 导入 store 模块
import store from '@/store'
// 导入router模块
import router from '@/router'
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
// 创建axios的实例对象
const instance = axios.create({
  baseURL,
  timeout: 5000
})

// 请求拦截
instance.interceptors.request.use((config) => {
  // 在请求头添加token字段
  const { profile } = store.state.user
  console.log(profile.token)
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use((config) => {
  return config.data
}, (error) => {
  // 判断响应状态码是否为401
  if (error.response && error.response.status === 401) {
    // 1、清除token
    store.commit('user/setProfile', {})
    // 2、跳转时带上当前的路径
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(error)
})

// 请求工具函数
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
