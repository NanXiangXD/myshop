<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const items = [
  { name: 'Home', icon: 'wap-home' },
  { name: 'Category', icon: 'apps-o' },
  { name: 'Message', icon: 'chat-o' },
  { name: 'Cart', icon: 'shopping-cart-o' },
  { name: 'User', icon: 'user-o' }
]
</script>

<template>
  <router-view />
  <van-tabbar route active-color="#FF8000" fixed>
    <van-tabbar-item v-for="item in items" :key="item.name" :to="{ name: item.name }" :icon="item.icon" />
  </van-tabbar>
</template>
