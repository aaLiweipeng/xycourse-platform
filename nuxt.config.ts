/*
 * @Descripttion: 
 * @Author: lwp
 * @Date: 2023-03-28 00:42:47
 * @LastEditTime: 2023-04-08 22:04:52
 */
import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - 呵呵编程',
      title: '呵呵编程', // 网站标题
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'zh-cn'
      },
      meta: [
        { name: 'description', content: '呵呵编程描述' },
        { name: 'keywords', content: '呵呵编程关键词' }
      ],
      script: [
        // { src:"http://xxx.js" }
      ],
      link: [
        // { rel:"stylesheet",href:"http://xxx.css" }
      ]
    }
  },
  css: ['@/assets/main.css'],
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer']
        : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include: process.env.NODE_ENV === 'development' ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone'] : []
    }
  },
  buildModules: ['nuxt-windicss'],
  modules: ['nuxt-windicss']
})
