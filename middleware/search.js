/*
 * @Descripttion: 定义搜索功能的路由中间件
 * @Author: lwp
 * @Date: 2023-04-09 19:47:18
 * @LastEditTime: 2023-04-10 03:21:23
 */
export default defineNuxtRouteMiddleware((to, from) => {
  const { type, page } = to.params // url参数【同navigateTo函数位】
  const { keyword } = to.query // query参数

  // 关键词判空
  if (!keyword || (keyword && keyword.trim() == 0)) {
    return abortNavigation('搜索关键词不能为空')
  }

  // 结果页url、分页参数的 合法性校验
  if (!['course', 'column'].includes(type) || isNaN(+page)) {
    return abortNavigation('页面不存在')
  }
})
