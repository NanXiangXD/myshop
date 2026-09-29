<template>
    <van-search v-model="keyword" placeholder="2026240401064-陶若溪" shape="round" @search="onSearch" @cancel="onCancel" show-action />
    <HomeSwiper />
</template>

<script setup>
import { showToast } from 'vant';
import { ref } from 'vue'
import HomeSwiper from '../components/HomeSwiper.vue'

const keyword = ref('')
// console.log(keyword.value)

const onSearch = (value) => {
  // console.log('搜索:', value)
  showToast("搜索内容："+value)
}

const onCancel = ()=>{
  showToast("取消")
}
</script>