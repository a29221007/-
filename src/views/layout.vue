<template>
  <AppNavbar></AppNavbar>
  <AppHeader></AppHeader>
  <AppHeaderSticky></AppHeaderSticky>
  <main class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <AppFooter></AppFooter>
</template>

<script>
// 导入同步通栏组件
import AppNavbar from '@/components/app-navbar.vue'
// 导入顶部菜单栏
import AppHeader from '@/components/app-header.vue'
// 导入底部结构
import AppFooter from '@/components/app-footer.vue'
// 导入吸顶导航菜单
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'xtx-layout',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang='less'>
.app-body{
  min-height: 600px;
}
</style>
