<!--
 * @Descripttion: 广告位组件【一定制化的img】
 * @Author: lwp
 * @Date: 2023-04-07 03:12:37
 * @LastEditTime: 2023-04-07 03:14:10
-->
<template>
  <img
    v-for="(item, index) in data"
    :src="item.src"
    :key="index"
    class="w-[100%] h-[100px] rounded mb-6 cursor-pointer"
    @click="$commonOpen(item)"
  />
</template>
<script setup>
defineProps({
  data: Array
})
</script>
