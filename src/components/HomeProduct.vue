<template>
    <van-grid :column-num="2" square :gutter="2" :border="false">
        <van-grid-item v-for="item in brandList" :key="item.id" class="home-product__item">
            <img class="home-product__img" :src="item.pic_url" :alt="item.name">
            <div class="home-product__label">{{ item.name }}</div>
        </van-grid-item>
    </van-grid>
</template>

<script setup>
import { ref } from 'vue'

const brandList = ref([
    { id: 1, name: '直播', pic_url: '/images/product1.png' },
    { id: 2, name: '推荐', pic_url: '/images/product2.png' },
    { id: 3, name: '补贴', pic_url: '/images/product3.png' },
    { id: 4, name: '分享', pic_url: '/images/product4.png' }
])
</script>

<style scoped lang="less">
.home-product__item {
    position: relative;
    overflow: hidden;

    .home-product__img {
        width: 110%;
    }

    .home-product__label {
        position: absolute;
        top: 10px;
        left: 10px;
        color: #fff;
        font-weight: bold;
        font-size: 0.8em;
        background-color: red;
        border-radius: 10%;
    }
}
</style>
