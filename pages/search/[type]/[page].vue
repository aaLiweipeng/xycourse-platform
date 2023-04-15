<!--
 * @Descripttion: 搜索结果页
 * @Author: lwp
 * @Date: 2023-04-09 17:51:15
 * @LastEditTime: 2023-04-15 22:36:43
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
      >
        {{ item.label }}
      </UiTabItem>
    </UiTab>

    <!-- 结果页加载态、错误态、正文区 -->
    <LoadingGroup :pending="pending" :error="error">
      <n-grid :x-gap="20" :cols="4">
        <n-gi v-for="(item, index) in rows" :key="index">
          <CourseListItem :item="item" />
        </n-gi>
      </n-grid>
      <div class="flex justify-center items-center mt-5 mb-10">
        <n-pagination
          size="large"
          :page="page"
          :item-count="total"
          :page-size="limit"
          :on-update:page="handlePageChange"
        />
      </div>
    </LoadingGroup>
  </div>
</template>

<script setup>
import { NGrid, NGi, NPagination } from 'naive-ui'
const route = useRoute()
const title = ref(route.query.keyword) // 获取query参数关键词
// const title = computed(() => route.query.keyword) // 获取query参数关键词
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

// 页面数据请求、分页请求 Start ---------  后面这部分装起来了 --> usePage
// const page = ref(parseInt(route.params.page)) // 分页：页码
// const limit = ref(10) // 分页：每页数量

// // const { data, pending, error, refresh } = await useSearchListApi({
// const {
//   data,
//   pending,
//   error,
//   refresh
// } = await useSearchListApi(() => {
//   return {
//     page: page.value,
//     keyword: encodeURIComponent(title.value),
//     type: type.value
//   }
// })

// // 【旧方案】
// // 搜索触发 keyword改动，通过computed 进而触发title改动
// // title改动，通过此 watch，触发数据重新请求，
// // 不然在搜索结果页使用搜索框，不会刷新页面结果数据！
// // watch(
// //   title, // 监听对象
// //   async () => {
// //     const result = await useSearchListApi({
// //       page: page.value,
// //       keyword: encodeURIComponent(title.value),
// //       type: type.value
// //     })
// //     data = result?.data
// //   },
// //   {
// //     immediate: true
// //   }
// // )
//
// const rows = computed(() => data.value?.rows ?? []) // 接口返回的正文数据 默认值[]
// const total = computed(() => data.value?.count ?? 0) // 分页：数据总数 默认值0

// // 分页器 切换分页时回调；
// // 此时这里跳转新的page路由; 页面刷新, page ref值由此改变; 绑定page的np组件UI也改变了
// const handlePageChange = (p) => {
//   navigateTo({
//     params: {
//       ...route.params,
//       page: p
//     },
//     query: {
//       ...route.query
//     }
//   })
// }
//  End ---------

const {
  page,
  limit,
  total,
  handlePageChange,
  rows,
  pending,
  error,
  refresh
} = await usePage(({ page, limit }) => useSearchListApi(() => {
  return {
    page,
    keyword: encodeURIComponent(title.value),
    type: type.value
  }
}))

// 新方案
const stop = watch(() => route.query.keyword, (newVal) => {
  title.value = newVal
  refresh()
})

onBeforeUnmount(() => stop())

definePageMeta({
  middleware: ['search']
})
</script>
