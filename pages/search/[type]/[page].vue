<!--
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-09 17:51:15
 * @LastEditTime: 2023-04-09 21:14:43
-->
<template>
  <div>{{ $route.params.type }} ~ {{ $route.params.page }}</div>
</template>

<script setup>
definePageMeta({
  middleware: ['search']
})
</script>
