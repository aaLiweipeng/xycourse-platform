<!--
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-03-29 02:50:01
 * @LastEditTime: 2023-04-10 03:14:23
-->
<template>
  <n-result status="500" title="500 服务器错误" :description="props.error.message">
    <template #footer>
      <n-button @click="handleError">回到首页</n-button>
    </template>
  </n-result>
</template>

<script setup>
import { NResult, NButton } from 'naive-ui'
const props = defineProps({
  error: Object
})

console.log('props --- ', props.error.message)
const message = ref('')
message.value = props.error.message
const handleError = () => {
  console.log('props --- ', props.error.message)
  clearError({ redirect: '/' })
}
</script>
