<!--
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-07 03:56:01
 * @LastEditTime: 2023-04-09 00:45:53
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
      <n-gi v-for="(item, index) in pdata" :key="index">
        <!-- 课程卡片 -->
        <CourseList :item="item" />
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup>
import { NButton, NGrid, NGi } from 'naive-ui'

const props = defineProps({
  title: String,
  data: Array,
  type: {
    type: String,
    default: 'course'
  }
})

// 默认数据是pdata
const pdata = ref(props.data || [])
if (props.type === 'group') {
  // 如果是拼团，进入下一步请求   limit=8 取前8个
  const { data } = await useGroupDataApi({
    page: 1,
    usable: 1,
    limit: 8
  })

  pdata.value = data.value?.rows ?? []
}
</script>
