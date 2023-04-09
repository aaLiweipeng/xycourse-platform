<!--
 * @Descripttion: 导航栏
 * @Author: lwp
 * @Date: 2023-04-02 17:04:01
 * @LastEditTime: 2023-04-09 16:57:04
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
          :active="isMenuItemActive(item)"
          @click="handleOpen(item.path)"
        >
          {{ item.name }}
        </ui-menu-item>
      </ui-menu>

      <!-- 这里的marginLeft-auto 用的妙 -->
      <n-button circle class="ml-auto mr-3" @click="openSearch">
        <!-- 搜索图标 -->
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

  <!-- 搜索抽屉 -->
  <SearchBar ref="SearchBarRef" />
</template>

<script setup>
import { NButton, NIcon, NDropdown, NAvatar } from 'naive-ui'
import { Search, PersonCircleOutline as UserIcon, LogOutOutline as LogoutIcon } from '@vicons/ionicons5'

// h函数加载icon
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const route = useRoute()
const menus = [{
  name: '首页',
  path: '/'
}, {
  name: '考试',
  path: '/paper/1',
  match: [{
    name: 'paper-page'
  }]
}, {
  name: '拼团',
  path: '/list/group/1',
  match: [{
    name: 'list-type-page',
    params: {
      type: 'group'
    }
  }]
}, {
  name: '秒杀',
  path: '/list/flashsale/1',
  match: [{
    name: 'list-type-page',
    params: {
      type: 'flashsale'
    }
  }]
}, {
  name: '直播',
  path: '/list/live/1',
  match: [{
    name: 'list-type-page',
    params: {
      type: 'live'
    }
  }]
}, {
  name: '专栏',
  path: '/list/column/1',
  match: [{
    name: 'list-type-page',
    params: {
      type: 'column'
    }
  }]
}, {
  name: '电子书',
  path: '/list/book/1',
  match: [{
    name: 'list-type-page',
    params: {
      type: 'book'
    }
  }]
}, {
  name: '社区',
  path: '/bbs/0/1',
  match: [{
    name: 'bbs-bbs_id-page'
  }]
}, {
  name: '课程',
  path: '/list/course/1',
  match: [{
    name: 'list-type-page',
    params: {
      type: 'course'
    }
  }]
}]

function handleOpen (path) {
  navigateTo(path)
}

// 三层比较 —— path、name、params，要遍历到底，比较最低的一层的值
const isMenuItemActive = (item) => {
  if (item.match) {
    // 遍历 match数组
    const i = item.match.findIndex(el => {
      // 如有有match.name 没有 match.params，
      // 如【paper-page】, 那就不比params，直接判断name
      let res = true

      // 如菜单项元素有 params字段，那需要比较 params字段值 跟 当前路由的params字段值
      if (el.params && typeof el.params == 'object') {
        // 遍历 params字段的key，
        // 取params下 每个key对应值 跟 route的params对应key的值对比,
        // 找到则返回真值, 找不到 就-1了，那接  != -1 就是false了
        res = (Object.keys(el.params).findIndex(key => route.params[key] == el.params[key])) != -1
      }

      // 如果当前元素的的match.name 跟 当前路由的name一样 且（如有params参数，params值也相同）
      return el.name === route.name && res
    })
    return i !== -1 // 不为 -1 就是找到符合的元素了
  }

  // 有写match的，用match匹配规则去匹配；
  // 没写match的，直接用path元素字段 匹配 当前路由路径
  return route.path == item.path
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

const SearchBarRef = ref(null)
const openSearch = () => SearchBarRef.value.open()

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
