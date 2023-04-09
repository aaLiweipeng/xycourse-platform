/*
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-10 02:52:13
 * @LastEditTime: 2023-04-10 02:52:24
 */
export function useSearchListApi(query) {
  const q = useQueryToString(query)
  return useHttpGet('searchList', `/search${q}`, {
    lazy: true
  })
}
