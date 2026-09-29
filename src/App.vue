<script setup>
</script>

<template>
  <router-view />
  <van-tabbar route active-color="#FF8000" fixed placeholder>
    <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item :to="{ name: 'category' }" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item :to="{ name: 'message' }" icon="chat-o">消息</van-tabbar-item>
    <van-tabbar-item :to="{ name: 'cart' }" icon="cart-o">购物车</van-tabbar-item>
    <van-tabbar-item :to="{ name: 'user' }" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>