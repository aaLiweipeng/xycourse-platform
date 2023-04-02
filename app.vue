<!--
 * @Descripttion: 
 * @Author: lwp
 * @Date: 2023-03-28 00:42:47
 * @LastEditTime: 2023-04-02 16:18:18
-->
<template>
  <NConfigProvider inline-theme-disabled>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NConfigProvider>
</template>
<script setup>
import {
  NConfigProvider
} from "naive-ui"
</script>