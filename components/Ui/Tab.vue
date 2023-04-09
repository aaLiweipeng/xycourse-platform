<!--
 * @Descripttion: tab父布局
 * @Author: lwp
 * @Date: 2023-04-09 23:20:06
 * @LastEditTime: 2023-04-10 02:16:30
-->
<template>
  <div class="tab">
    <slot />
  </div>
</template>

<style>
/* 宽铺满  白底  圆角 */
.tab {
  @apply w-full flex overflow-x-auto bg-white mb-4 rounded;
}
</style>
