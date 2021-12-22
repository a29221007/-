// 首页相关的接口

// 导入request请求模块
import request from '@/utils/request'

// 1、请求首页头部所有的分类数据
export const findAllCategory = () => {
  return request('home/category/head', 'get')
}
