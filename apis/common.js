/*
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-10 02:52:13
 * @LastEditTime: 2023-04-15 17:14:04
 */
export function useSearchListApi(query) {
  return useHttpGet(
    'searchList',
    () => {
      const q = useQueryToString(query())
      return `/search${q}`
    },
    {
      lazy: true
    }
  )
}
