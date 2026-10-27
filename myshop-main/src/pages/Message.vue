<template>
  <van-cell v-for="item in lists" :key="item" :title="item.title" :value="item.value" :label="item.label" :icon="item.img" />
</template>

<script setup>
const lists = [
  {
    img: '/images/avatar1.jpg',
    title: '食品旗舰店',
    value: '星期一',
    label: "您有一条店铺消息"
  },
  {
    img: '/images/avatar2.jpg',
    title: '水果旗舰店',
    value: '星期二',
    label: "亲爱的果粉："
  },
  {
    img: '/images/avatar3.png',
    title: '订阅号消息',
    value: '星期日',
    label: "水果旗舰店：【新到水果新品————粑粑柑、砂糖橘】"
  },
  {
    img: '/images/avatar4.png',
    title: '消息号内容',
    value: '星期一',
    label: "2026240401083 张珈铭"
  }
]
</script>

<style lang="less" scoped>
.van-cell {
  --van-cell-icon-size: 40px;

  :deep(.van-cell__label) {
    width: 165px;
    margin-top: 2px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>