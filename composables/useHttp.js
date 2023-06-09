/*
 * @Descripttion: useFetch的封装
 * @Author: lwp
 * @Date: 2023-04-08 22:20:15
 * @LastEditTime: 2023-04-15 17:30:43
 */
const fetchConfig = {
  baseURL: 'http://demonuxtapi.dishait.cn/pc',
  headers: {
    appid: 'bd9d01ecc75dbbaaefce'
  }
}

// 相当于在这里做 请求拦截器 的实现
function useGetFetchOptions (options = {}) {
  options.baseURL = options.baseURL ?? fetchConfig.baseURL
  options.headers = options.headers ?? {
    appid: fetchConfig.headers.appid
  }
  options.initialCache = options.initialCache ?? false
  options.lazy = options.lazy ?? false

  // 用户登录，默认传token

  return options
}

export async function useHttp (key, url, options = {}) {
  options = useGetFetchOptions(options)
  options.key = key

  const res = await useFetch(url, {
    ...options,

    // 相当于响应拦截器
    transform: (res) => {
      return res.data
    }
  })

  return res
}

// GET请求
export function useHttpGet (key, url, options = {}) {
  options.method = 'GET'
  return useHttp(key, url, options)
}

// POST请求
export function useHttpPost (key, url, options = {}) {
  options.method = 'POST'
  return useHttp(key, url, options)
}
