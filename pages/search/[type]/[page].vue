<!--
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-09 17:51:15
 * @LastEditTime: 2023-04-10 02:46:38
-->
<template>
  <div>
    <h5 class="text-lg my-3">"{{ title }}"的搜索相关结果</h5>
    <UiTab>
      <!-- 拿路由type 跟tab的value 做判断，相同则亮 -->
      <!-- handleClick点击之后会切换路由，自然会带动active 切换亮的是哪个tab -->
      <UiTabItem
        :active="type === item.value"
        v-for="(item, index) in tabs"
        :key="index"
        @click="handleClick(item.value)"
        >{{ item.label }}</UiTabItem
      >
    </UiTab>
  </div>
</template>

<script setup>
const route = useRoute()
const title = ref(route.query.keyword) // 获取query参数关键词
const type = ref(route.params.type)

// 关键词设置到标题上
useHead({ title })

// tabs组件渲染数据源
const tabs = [
  {
    label: '课程',
    value: 'course'
  },
  {
    label: '专栏',
    value: 'column'
  }
]

const handleClick = (t) => {
  navigateTo({
    params: {
      ...route.params,
      type: t
    },
    query: {
      ...route.query
    }
  })
}

definePageMeta({
  middleware: ['search']
})
</script>
