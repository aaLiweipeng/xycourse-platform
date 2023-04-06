<!--
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-07 03:56:09
 * @LastEditTime: 2023-04-07 04:22:54
-->
<template>
  <!-- 卡片 -->
  <n-card class="cursor-pointer mb-5 shadow-md !border-0">
    <!-- 封面 -->
    <template #cover>
      <img :src="item.cover" class="w-[100%] h-[150px]" />
    </template>

    <!-- 卡片底部文本 -->
    <div class="pt-2">
      <!-- truncate 处理文本溢出    font-semibold 加粗 -->
      <span class="font-bold w-full truncate font-semibold">{{ item.title }}</span>
    </div>
    <div class="mt-2 flex">价格</div>
  </n-card>
</template>

<script setup>
import { NCard } from 'naive-ui'
defineProps({
  item: Object
})
</script>
