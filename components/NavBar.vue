<!--
 * @Descripttion: 导航栏
 * @Author: lwp
 * @Date: 2023-04-02 17:04:01
 * @LastEditTime: 2023-04-03 01:38:22
-->
<template>
  <div class="navbar">
    <div class="container flex items-center h-[60px]">
      <!-- text属性 无边框，文本按钮 -->
      <n-button text class="!text-xl !font-bold">呵呵编程</n-button>

      <div>导航区域</div>

      <!-- 这里的marginLeft-auto 用的妙 -->
      <n-button circle class="ml-auto mr-3">
        <template #icon>
          <n-icon>
            <Search />
          </n-icon>
        </template>
      </n-button>

      <!-- <n-button secondary strong>登录</n-button> -->
      <!-- https://www.naiveui.com/zh-CN/os-theme/components/dropdown -->
      <n-dropdown :options="userOptions">
        <!-- 下拉菜单外露图标 -->
        <n-avatar
          round
          size="small"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </n-dropdown>
    </div>
  </div>
  <div class="w-[100%] h-[80px]"></div>
</template>

<script setup>
import { NButton, NIcon, NDropdown, NAvatar } from "naive-ui";
import { Search } from "@vicons/ionicons5";
import {
  PersonCircleOutline as UserIcon,
  LogOutOutline as LogoutIcon,
} from "@vicons/ionicons5";

// h函数加载icon
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};

// 下拉菜单选项
const userOptions = [
  {
    label: "用户中心",
    key: "center",
    icon: renderIcon(UserIcon),
  },
  {
    label: "退出",
    key: "logout",
    icon: renderIcon(LogoutIcon),
  },
];
</script>

<style>
.navbar {
  z-index: 1000;
  @apply bg-white fixed top-0 left-0 right-0 shadow-sm;
}
</style>
