<!--
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-07 03:56:01
 * @LastEditTime: 2023-04-08 02:43:13
-->
<template>
  <div>
    <!-- 列表标题 -->
    <div class="flex mb-3">
      <span class="text-lg">{{ title }}</span>
      <n-button quaternary class="ml-auto">查看更多</n-button>
    </div>

    <!-- 列表内容 -->
    <n-grid x-gap="12" :cols="4" class="mb-6">
      <n-gi v-for="(item, index) in data" :key="index">
        <!-- 课程卡片 -->
        <CourseList :item="item" />
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup>
import { NButton, NGrid, NGi } from 'naive-ui'

defineProps({
  title: String,
  data: Array
})
</script>
