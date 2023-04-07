<!--
 * @Descripttion: 价格组件封装
 * @Author: lwp
 * @Date: 2023-04-08 03:21:22
 * @LastEditTime: 2023-04-08 03:28:16
-->
<template>
  <span :class="through ? 'text-gray-500 text-xs line-through' : 'text-rose-500 font-bold'">
    {{ parseFloat(value) == 0 ? '免费' : '￥' + value }}
  </span>
</template>
<script setup>
defineProps({
  value: {
    type: [String, Number],
    default: 0
  },
  through: {
    type: Boolean,
    default: false
  }
})
</script>
