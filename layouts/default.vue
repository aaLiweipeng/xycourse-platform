<!--
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-02 16:17:25
 * @LastEditTime: 2023-04-08 15:28:07
-->
<template>
    <div class="body">
        <NavBar />
        <main class="container">
            <slot />
        </main>
        <PageFooter />
    </div>
</template>
<style>
.body {
    min-width: 1000px;
    /* min-h-screen 相当于  min-height: 100vh */
    @apply bg-gray-100 flex flex-col min-h-screen;
}
</style>
