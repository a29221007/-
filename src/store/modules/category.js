// 分类信息
// 导入预算定义好的分类数据，防止页面初次加载出现白屏的现象
import { topCategory } from '@/api/constants'
// 导入获取首页获取全部分类的接口
import { findAllCategory } from '@/api/category'
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList (state, data) {
      state.list = data
    },
    // 定义显示二级类目的盒子方法
    show (state, id) {
      // 找出当前id下open属性，置为true
      const category = state.list.find(item => item.id === id)
      category.open = true
    },
    // 定义隐藏二级类目的盒子方法
    hidden (state, id) {
      // 找出当前id下的open属性，置为false
      const category = state.list.find(item => item.id === id)
      category.open = false
    }
  },
  actions: {
    async getList ({ commit }) {
      try {
        const { result } = await findAllCategory()
        result.forEach(item => (item.open = false))
        commit('setList', result)
      } catch (error) {
        alert(error)
      }
    }
  }
}
