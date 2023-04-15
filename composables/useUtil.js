/*
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-09 00:46:19
 * @LastEditTime: 2023-04-15 18:07:31
 */
// 将对象转url参数
export function useQueryToString(query = {}) {
  console.log('start q -- ', query)
  let q = ''
  for (const key in query) {
    if (q == '') {
      q = `?${key}=${query[key]}`
    } else {
      q += `&${key}=${query[key]}`
    }
  }
  console.log('start q -- ', q)
  return q
}
