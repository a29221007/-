// 主页相关的接口

// 导入request模块
import request from '@/utils/request'

// 1、获取品牌数据
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}
