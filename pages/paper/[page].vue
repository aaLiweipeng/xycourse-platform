<!--
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-04 04:12:16
 * @LastEditTime: 2023-04-08 21:51:57
-->
<template>
  <div>考试列表 {{ $route.params.page }}</div>
</template>
<script setup>
const route = useRoute()
console.log(route.params.page)

useHead({
  title: '考试列表'
})
</script>
