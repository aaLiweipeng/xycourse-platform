<!--
 * @Descripttion: 导航栏
 * @Author: lwp
 * @Date: 2023-04-02 17:04:01
 * @LastEditTime: 2023-04-04 05:15:54
-->
<template>
  <div class="navbar">
    <div class="container flex items-center h-[60px]">
      <!-- text属性 无边框，文本按钮 -->
      <n-button text class="!text-xl !font-bold">呵呵编程</n-button>

      <!-- <div class="menu">
            <div class="menu-item" v-for="(item, index) in menus" :key="index"
              :class="{ 'menu-item-active': route.path == item.path }" @click="handleOpen(item.path)">
              {{ item.name }}
            </div>
          </div> -->
      <ui-menu>
        <ui-menu-item
          v-for="(item, index) in menus"
          :key="index"
          :active="route.path == item.path"
          @click="handleOpen(item.path)"
        >
          {{ item.name }}
        </ui-menu-item>
      </ui-menu>

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
        <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
      </n-dropdown>
    </div>
  </div>
  <div class="w-[100%] h-[80px]"></div>
</template>

<script setup>
import { NButton, NIcon, NDropdown, NAvatar } from 'naive-ui'
import { Search } from '@vicons/ionicons5'
import { PersonCircleOutline as UserIcon, LogOutOutline as LogoutIcon } from '@vicons/ionicons5'

// h函数加载icon
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const route = useRoute()
const menus = [
  {
    name: '首页',
    path: '/'
  },
  {
    name: '考试',
    path: '/paper/1' // url/分页
  },
  {
    name: '拼团',
    path: '/list/group/1' // url/公共列表类型/分页
  },
  {
    name: '秒杀',
    path: '/list/flashsale/1'
  },
  {
    name: '直播',
    path: '/list/live/1'
  },
  {
    name: '专栏',
    path: '/list/column/1'
  },
  {
    name: '电子书',
    path: '/list/book/1'
  },
  {
    name: '社区',
    path: '/bbs/0/1' // url/社区id/分页
  },
  {
    name: '课程',
    path: '/list/course/1'
  }
]
function handleOpen(path) {
  navigateTo(path)
}
// NavBar右侧icon 下拉菜单选项
const userOptions = [
  {
    label: '用户中心',
    key: 'center',
    icon: renderIcon(UserIcon)
  },
  {
    label: '退出',
    key: 'logout',
    icon: renderIcon(LogoutIcon)
  }
]
</script>

<style>
.navbar {
  z-index: 1000;
  @apply bg-white fixed top-0 left-0 right-0 shadow-sm;
}

.menu {
  @apply flex items-center px-4;
}

.menu-item {
  transition: all 0.2s;
  /* 让hover的显隐 有一个隐约的过程 */
  /* 圆角 蓝底蓝字的hover */
  @apply px-2 py-1 mx-1 cursor-pointer rounded hover: (bg-blue-50 text-blue-700) active:( !bg-blue-100);
}

.menu-item-active {
  @apply !bg-blue-100 !text-blue-600;
}
</style>
