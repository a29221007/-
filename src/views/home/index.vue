<template>
  <div class='container'>
    <!-- 首页入口 -->
    <div class="home-entry">
      <!-- 左侧分类 -->
      <HomeCategory></HomeCategory>
      <!-- 轮播图 -->
    </div>
  </div>
</template>

<script>
// 导入左侧分类菜单列表
import HomeCategory from '@/views/home/components/home-category.vue'
export default {
  name: 'xtx-home-page',
  components: {
    HomeCategory
  }
}
</script>

<style scoped lang='less'>
</style>
