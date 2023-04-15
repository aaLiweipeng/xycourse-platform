<!--
 * @Descripttion: 课程列表骨架屏
 * @Author: lwp
 * @Date: 2023-04-16 00:07:17
 * @LastEditTime: 2023-04-16 01:10:54
-->
<template>
  <n-grid :x-gap="20" :cols="4">
    <n-grid-item v-for="i in 8" :key="i">
      <n-card class="mb-5">
        <template #cover>
          <n-skeleton height="150px" width="100%" />
        </template>
        <n-skeleton height="30px" width="50%" class="my-2" />
        <n-skeleton text style="width: 60%" />
      </n-card>
    </n-grid-item>
  </n-grid>
</template>
<script setup>
import { NCard, NSkeleton, NGrid, NGridItem } from 'naive-ui'
</script>
