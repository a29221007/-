import { createStore } from 'vuex'
import user from '@/store/modules/user'
import category from '@/store/modules/category'
import cart from '@/store/modules/cart'

import createPersistedstate from 'vuex-persistedstate'

export default createStore({
  modules: {
    user,
    category,
    cart
  },
  plugins: [
    createPersistedstate({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart', 'category']
    })
  ]
})
