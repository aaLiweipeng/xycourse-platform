<!--
 * @Descripttion: 
 * @Author: lwp
 * @Date: 2023-04-02 00:14:09
 * @LastEditTime: 2023-04-05 23:28:05
-->
<template>
    <div>
        {{ data }}
    </div>
</template>
<script setup>
const { 
    data
} = await useFetch("/index",{
    key:"IndexData",
    baseURL:"http://demonuxtapi.dishait.cn/pc",
    headers:{
        appid:"bd9d01ecc75dbbaaefce"
    },
    // 响应之前数据处理
    transform:(res)=>{
        return res.data
    }
})
</script>
