<!--
 * @Descripttion: 课程卡片
 * @Author: lwp
 * @Date: 2023-04-07 03:56:09
 * @LastEditTime: 2023-04-08 16:56:26
-->
<template>
  <!-- 卡片 -->
  <!-- footer-style="padding:0;"  除去默认padding，让背景颜色贴边 -->
  <n-card class="cursor-pointer mb-5 shadow-md !border-0" footer-style="padding:0;">
    <!-- 封面 -->
    <template #cover>
      <img :src="item.cover" class="w-[100%] h-[150px]" />
    </template>

    <!-- 卡片底部文本 -->
    <div class="pt-2">
      <!-- truncate 处理文本溢出    font-semibold 加粗 -->
      <span class="font-bold w-full truncate font-semibold">{{ item.title }}</span>
    </div>

    <!-- 卡片默认slot（卡片内容）： 价格部分 -->
    <div class="mt-2 flex items-end">
      <Price :value="item.price" />
      <Price :value="item.t_price" through class="ml-2" />
    </div>

    <!-- 卡片底部 -->
    <!-- "item.group_id || item.flashsale_id" 判断秒杀或拼团 -->
    <template #footer v-if="item.group_id || item.flashsale_id">
      <!-- 配置底部圆角rounded-b -->
      <div class="bg-yellow-500 text-white p-3 text-xs flex items-center rounded-b">
        {{ item.group_id ? '拼团中' : '秒杀中' }}
        <div class="ml-auto flex items-center">
          倒计时
          <CountDown :time="item.end_time" />
        </div>
      </div>
    </template>
  </n-card>
</template>

<script setup>
import { NCard } from 'naive-ui'
defineProps({
  item: Object
})
</script>
