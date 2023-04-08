<!--
 * @Descripttion: 全局页面加载组件封装
 * @Author: lwp
 * @Date: 2023-04-09 02:25:38
 * @LastEditTime: 2023-04-09 02:30:30
-->
<template>
  <div>
    <template v-if="pending"> 加载中... </template>

    <template v-else-if="error">
      <n-result class="mt-10" status="500" title="错误提示" :description="error?.data?.data || '页面走丢了~'">
        <template #footer>
          <n-button @click="$router.go(-1)">返回上一页</n-button>
        </template>
      </n-result>
    </template>

    <!-- 过了加载态、错误态。接下 就是正常内容渲染了; 做成slot暴露给外边 -->
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script setup>
import { NButton, NResult } from 'naive-ui'
defineProps({
  pending: {
    type: Boolean,
    default: false
  },
  error: {
    type: [String, Boolean, Symbol],
    default: false
  }
})
</script>
