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
    }
  },
  actions: {
    async getList ({ commit }) {
      try {
        const { result } = await findAllCategory()
        commit('setList', result)
        console.log('data', result)
      } catch (error) {
        alert(error)
      }
    }
  }
}
