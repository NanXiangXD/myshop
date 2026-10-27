<template>
    <div class="home-new">
        <h3 class="home-new__title">每周上新</h3>
        <ul class="home-new__list">
            <li class="home-new__item" v-for="item in newList" :key="item.id">
                <img class="home-new__img" :src="item.list_pic_url" :alt="item.name">
                <div class="home-new__name">{{ item.name }}</div>
                <div class="home-new__price"><span class="home-new__symbol">￥</span>{{ item.retail_price }}</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const newList = ref([
    { id: 1, name: '懒人小沙发', list_pic_url: '/images/new1.jpg', retail_price: '128.00' },
    { id: 2, name: '2026240401082 谭晓枫', list_pic_url: '/images/new2.jpg', retail_price: '89.00' },
    { id: 3, name: '简约一字夹发夹', list_pic_url: '/images/new3.jpg', retail_price: '12.8' },
    { id: 4, name: '毛线小兔子耳朵发夹', list_pic_url: '/images/new4.jpg', retail_price: '9.9' },
])
</script>

<style scoped lang="less">
.home-new {
    .home-new__title {
        width: 50%;
        margin: 0 auto;
        padding-top: 8px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        border-top: 2px solid gray;
    }

    .home-new__list {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        list-style: none;
        background-color: #f9f9f9;

        .home-new__item {
            width: 50%;
            box-sizing: border-box;
            padding: 10px;
            text-align: center;
        }

        .home-new__img {
            width: 100%;
            display: block;
        }

        .home-new__name,
        .home-new__price {
            font-size: 12px;
        }

        .home-new__symbol {
            color: #ff8000;
        }
    }
}
</style>
