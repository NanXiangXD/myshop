<template>
  <van-card
    class="home-top__card"
    v-for="item in goodsList"
    :key="item.tag"
    :title="item.name"
    :desc="item.goods_brief"
    :price="item.retail_price"
    :origin-price="item.origin_price"
    :thumb="item.list_pic_url"
    :tag="item.tag"
  />
</template>

<script setup>
const goodsList = [
    {
        retail_price: '299.00',
        name: '26240401083 张珈铭',
        goods_brief: '一级桑蚕丝，轻盈、透气、柔软',
        list_pic_url: '/images/top1.jpg',
        tag: 'TOP1'
    },
    {
        retail_price: '88.00',
        origin_price: '98.00',
        name: '儿童摇摇马',
        goods_brief: '安全、不会侧翻、爸妈放心',
        list_pic_url: '/images/top2.jpg',
        tag: 'TOP2'
    },
    {
        retail_price: '128.00',
        origin_price: '168.00',
        name: '可躺可睡休闲懒人沙发',
        goods_brief: '轻松看书、社交、办公、舒适放松',
        list_pic_url: '/images/top3.jpg',
        tag: 'TOP3'
    },
    {
        retail_price: '199.00',
        origin_price: '205.00',
        name: '儿童积木 拼装玩具',
        goods_brief: '大颗粒 家长更放心 不易吞咽、安全性高',
        list_pic_url: '/images/top4.jpg',
        tag: 'TOP4'
    },
    {
        retail_price: '89.00',
        origin_price: '99.00',
        name: '扭扭车 1——3 岁男女宝宝',
        goods_brief: '儿童扭扭车万向轮 防侧翻大人新款摇摆扭扭车',
        list_pic_url: '/images/top5.jpg',
        tag: 'TOP5'
    }
]
</script>


<style lang="less" scoped>
h3 {
    font-size: 22px;
    line-height: 30px;
    margin: 0.5rem 0;
    text-align: center;
}

.van-card {
    background-color: #f9f9f9;
    margin: 0px;
    text-align: left;

    :deep(.van-card__title),
    :deep(.van-card__desc),
    :deep(.van-card__price) {
        text-align: left;
    }


}
    :deep(.van-card__tag .van-tag) {
        background: #ff4f0a !important;
        // padding: 1px 4px;
        // border-radius: 2px;
    }

    :deep(.van-card__price) {
        color: #ff0000;
    }
</style>
