<!--
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-02 00:14:09
 * @LastEditTime: 2023-04-09 02:34:21
-->
<template>
  <div>
    <LoadingGroup :pending="pending" :error="error">
      <!-- 第一层data下有很多种类型的数据，遍历【v-for】到 swiper类型那个data，才给渲染【v-if】 -->
      <!-- 类似于RecycleView的多布局加载，每个data item来到这里，就根据item.type去加载不同类型的布局！ -->
      <template v-for="(item, index) in data" :key="index">
        <Banner :data="item.data" v-if="item.type == 'swiper'" />
        <ImageNav :data="item.data" v-else-if="item.type == 'icons'" />
        <ImageAd :data="item.data" v-else-if="item.type == 'imageAd'" />
        <ListCard :title="item.title" :data="item.data" v-else-if="item.type == 'list'" />
        <!-- 拼团 -->
        <ListCard :title="item.title" :type="item.listType" :data="item.data" v-else-if="item.type == 'promotion'" />
      </template>
    </LoadingGroup>
  </div>
</template>

<script setup>
useHead({
  title: '呵呵编程首页',
  meta: [
    { name: 'description', content: '首页描述' },
    { name: 'keywords', content: '首页关键词' }
  ]
})

// const { pending, data, refresh, error } = await useFetch('/index', {
const {
  pending,
  data,
  // refresh,
  error
} = await useIndexDataApi()

// 服务端时直接报错
// if(process.server && error.value){
//     throwError(error.value?.data?.data)
// }
</script>
