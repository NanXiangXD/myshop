<template>
    <div class="detail-header">
        <span class="detail-header__back" @click="onBack">
            <van-icon name="arrow-left" size="20" />
        </span>
        <span class="detail-header__title">商品详情</span>
    </div>
    <div class="detail-content">
        <div class="detail-content__id">商品{{ id }}</div>
        <img class="detail-content__img" :src="picUrl" :alt="name">
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const id = route.params.id
const name = route.query.name
const picUrl = route.query.pic_url

const onBack = () => {
    router.back()
}
</script>

<style scoped lang="less">
.detail-header {
    display: flex;
    align-items: center;
    background-color: orange;
    color: #fff;

    .detail-header__back {
        padding: 10px;
    }

    .detail-header__title {
        font-size: 1.1em;
    }
}

.detail-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;

    .detail-content__id {
        font-size: 1.2em;
        margin-bottom: 20px;
    }

    .detail-content__img {
        width: 80%;
    }
}
</style>