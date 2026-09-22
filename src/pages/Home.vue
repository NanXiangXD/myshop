<template>
  <van-search
    v-model="searchValue"
    shape="round"
    show-cancel
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</template>

<script setup>
import { ref } from 'vue'
import { showToast } from 'vant'

const searchValue = ref('')

const onSearch = () => {
  showToast(`搜索：${searchValue.value}`)
}

const onCancel = () => {
  showToast('已取消搜索')
}
</script>