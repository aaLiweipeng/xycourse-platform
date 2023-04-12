<!--
 * @Descripttion: 自定义图片加载组件
 * @Author: lwp
 * @Date: 2023-04-07 03:56:09
 * @LastEditTime: 2023-04-13 03:56:29
-->
<template>
  <img :src="src" v-bind="$attrs" @error="handleImageError" :style="{ 'object-fit': objectFit }" />
</template>
<script setup>
defineProps({
  src: String,
  objectFit: {
    type: String,
    default: 'cover'
  }
})

// 图片加载错误时，使用默认图片加载
const handleImageError = (e) => {
  e.target.src = '/fail.png'
}
</script>
