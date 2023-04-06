/*
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-07 02:33:15
 * @LastEditTime: 2023-04-07 02:33:54
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('commonOpen', (item) => {
    if (item.type == 'webview') {
      window.open(item.url)
    } else if (item.type == 'course') {
      navigateTo(`/detail/course/${item.course_id}`)
    }
  })
})
