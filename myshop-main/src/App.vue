<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const onClickLeft = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/home')
  }
}
</script>

<template>
  <van-nav-bar v-if="route.meta.isShowNav" :title="route.meta.title" left-arrow fixed placeholder
    @click-left="onClickLeft" />
  <router-view />
  <van-tabbar route active-color="#FF8000" fixed placeholder>
    <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item :to="{ name: 'category' }" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item :to="{ name: 'message' }" icon="chat-o">消息</van-tabbar-item>
    <van-tabbar-item :to="{ name: 'cart' }" icon="cart-o">购物车</van-tabbar-item>
    <van-tabbar-item :to="{ name: 'user' }" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped lang="less">
.van-nav-bar {
  height: 46px;
  background-color: #ff8000;

  :deep(.van-nav-bar__title),
  :deep(.van-icon-arrow-left) {
    color: #fff;
  }
}
</style>
