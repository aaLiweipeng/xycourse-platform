/*
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-08 22:43:53
 * @LastEditTime: 2023-04-08 23:06:40
 */
export function useIndexDataApi() {
  return useHttpGet('IndexData', '/index', {
    lazy: true
  })
}

export function useGroupDataApi(query) {
  const qParams = useQueryToString(query)
  return useHttpGet('groupData', `/group/list${qParams}`)
}
