<!--
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-09 23:20:06
 * @LastEditTime: 2023-04-10 02:16:59
-->
<template>
  <span class="tab-item" :class="{ 'tab-item-active': active }">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<style>
.tab-item {
  @apply py-3 px-8 text-gray-700 text-sm cursor-pointer flex-shrink-0; /* 默认灰色字体 */
}
.tab-item:hover {
  @apply text-blue-400; /* hover时 文字搞蓝色 */
}
.tab-item-active {
  border-bottom: 2px solid; /* 底边搞边框出来 */
  @apply text-blue-400 border-blue-400; /* 文字、边框搞成蓝色 */
}
</style>
