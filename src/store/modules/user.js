// 用户模块
export default {
  namespaced: true,
  state () {
    return {
      // 用户信息
      profile: {
        id: '',
        avatar: '',
        nickname: '123',
        account: '',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    setProfile (state, data) {
      state.profile = data
    }
  }
}
