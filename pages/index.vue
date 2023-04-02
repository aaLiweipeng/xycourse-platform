<!--
 * @Descripttion: 
 * @Author: lwp
 * @Date: 2023-04-02 00:14:09
 * @LastEditTime: 2023-04-02 19:30:05
-->
<template>
    <div>
        <div>
            <nuxt-link to="/test">test</nuxt-link>
            <nuxt-link to="/test-2">test-2</nuxt-link>
        </div>
        index
        <n-icon size="40">
            <Search />
        </n-icon>
    </div>
</template>
<script setup>
import {
    NIcon
} from "naive-ui"
import {
    Search
} from "@vicons/ionicons5"
</script>
