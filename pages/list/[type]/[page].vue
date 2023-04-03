<!--
 * @Descripttion: 
 * @Author: lwp
 * @Date: 2023-04-04 04:12:16
 * @LastEditTime: 2023-04-04 04:13:37
-->
<template>
    <div>
        公共列表 {{ $route.params.type }} ~ {{ $route.params.page }}
    </div>
</template>
<script setup>
const route = useRoute()
console.log(route.params.type, route.params.page)
</script>