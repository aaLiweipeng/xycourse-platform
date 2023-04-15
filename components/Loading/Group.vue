<!--
 * @Descripttion: 全局页面加载组件封装
 * @Author: lwp
 * @Date: 2023-04-09 02:25:38
 * @LastEditTime: 2023-04-16 00:11:40
-->
<template>
  <div>
    <template v-if="loading">
      <slot name="loading">
        <LoadingSkeleton />
      </slot>
    </template>

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
import { onBeforeUnmount } from 'vue'
import { NButton, NResult } from 'naive-ui'
const props = defineProps({
  pending: {
    type: Boolean,
    default: false
  },
  error: {
    type: [String, Boolean, Symbol],
    default: false
  }
})

const loading = ref(false) // loading骨架加载组件的开关
const stop = watchEffect(() => {
  if (props.pending && !loading.value) {
    // 如果页面加载中（pending）且 loading为空
    loading.value = true
  } else {
    setTimeout(() => {
      // watchEffect第一次调用时 如上，
      // 再次调用时，必是stop被调用 或者loading为false 或者pending为false（任务加载完成）,
      // 以上这三种情况，都要置loading为false
      loading.value = false
    }, 200)
  }
})
onBeforeUnmount(() => stop())
</script>
