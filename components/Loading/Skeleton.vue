<!--
 * @Descripttion: 加载中骨架屏封装
 * @Author: lwp
 * @Date: 2023-04-09 02:52:54
 * @LastEditTime: 2023-04-16 00:06:12
-->
<template>
  <n-card v-for="i in 3" :key="i" class="mb-5">
    <!-- 一长一短三中 -->
    <n-skeleton text style="width: 30%" />
    <n-skeleton text :repeat="3" />
    <n-skeleton text style="width: 60%" />
  </n-card>
</template>
<script setup>
import { NCard, NSkeleton } from 'naive-ui'
</script>
