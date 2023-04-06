<!--
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-02 00:14:09
 * @LastEditTime: 2023-04-07 02:18:22
-->
<template>
  <div>
    <template v-if="pending"> 加载中... </template>
    <template v-else-if="error"> 错误提示： {{ error?.data?.data }} </template>

    <!-- 过了加载态、错误态。接下 就是正常内容渲染了 -->
    <template v-else>
      <!-- 第一层data下有很多种类型的数据，遍历【v-for】到 swiper类型那个data，才给渲染【v-if】 -->
      <template v-for="(item, index) in data" :key="index">
        <Banner :data="item.data" v-if="item.type == 'swiper'" />
        <ImageNav :data="item.data" v-else-if="item.type == 'icons'"/>
      </template>
    </template>
  </div>
</template>

<script setup>
const { pending, data, refresh, error } = await useFetch('/index', {
  key: 'IndexData',
  baseURL: 'http://demonuxtapi.dishait.cn/pc',
  headers: {
    appid: 'bd9d01ecc75dbbaaefce'
  },
  // 响应之前数据处理
  transform: (res) => {
    return res.data
  },
  // 是否开启缓存
  // initialCache:false,
  // 懒加载
  lazy: true
})

// 服务端时直接报错
// if(process.server && error.value){
//     throwError(error.value?.data?.data)
// }
</script>
