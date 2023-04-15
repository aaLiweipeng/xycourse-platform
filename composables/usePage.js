/*
 * @Descripttion: 页面请求、分页请求 方法封装
 * @Author: lwp
 * @Date: 2023-04-15 22:16:50
 * @LastEditTime: 2023-04-15 22:20:53
 */
export async function usePage(initListApiCallback) {
  const route = useRoute()
  const page = ref(parseInt(route.params.page))
  const limit = ref(10)

  const { data, pending, error, refresh } = await initListApiCallback({
    page: page.value,
    limit: limit.value
  })

  // rows乃是数据键，如你的接口用的是data、list，那这里就写data、list
  const rows = computed(() => data.value?.rows ?? [])
  const total = computed(() => data.value?.count ?? 0)

  // 分页请求
  const handlePageChange = (p) => {
    navigateTo({
      params: {
        ...route.params,
        page: p
      },
      query: {
        ...route.query
      }
    })
  }

  return {
    page,
    limit,
    data,
    pending,
    error,
    refresh,
    rows,
    total,
    handlePageChange
  }
}
