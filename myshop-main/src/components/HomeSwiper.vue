<template>
    <van-swipe class="home-swiper" :autoplay="3000" lazy-render indicator-color="#FF8000" indicator-size="6px"
        @change="onChange">
        <van-swipe-item v-for="item in banners" :key="item.id" class="home-swiper__item">
            <!-- <van-image class="home-swiper__image" :src="item.url" :alt="item.title" width="100%" height="100%"
                fit="cover" lazy-load @click="onClick(item)" /> -->
                <img :src="item.url" alt="" width="100%" height="100%" style="object-fit: cover;">
        </van-swipe-item>
    </van-swipe>
</template>

<script setup>
import { ref } from 'vue'
import { showToast } from 'vant'

const banners = ref([
    { id: 1, title: 'banner1', url: '/images/banner1.jpg' },
    { id: 2, title: 'banner2', url: '/images/banner2.jpg' }
])

const current = ref(0)

const onChange = (index) => {
    current.value = index
}

const onClick = (item) => {
    showToast('点击轮播图：' + item.title)
}
</script>

<style scoped lang="less">
.home-swiper {
    width: 100%;

    .home-swiper__item {
        width: 100%;
        height: 180px;
    }

    .home-swiper__image {
        width: 100%;
        height: 100%;
    }
}
</style>
