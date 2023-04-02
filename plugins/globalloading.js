/*
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-02 01:37:58
 * @LastEditTime: 2023-04-02 15:47:30
 */
import { createDiscreteApi } from "naive-ui";

export default defineNuxtPlugin((nuxtApp) => {
  const bar = ref(null); // 存储 loadingBar实例

  nuxtApp.hook("app:mounted", (e) => {
    if (!bar.value) {
      // 工厂方法拿到 loadingBar实例应用
      const { loadingBar } = createDiscreteApi(["loadingBar"]);
      bar.value = loadingBar;
    }
    // console.log("app:mounted");
  });

  nuxtApp.hook("page:start", (e) => {
    // 启动loading
    bar.value?.start();
    // console.log("page:start");
  });

  nuxtApp.hook("page:finish", (e) => {
    setTimeout(() => {
      // 结束loading
      bar.value?.finish();
    }, 150);
    // console.log("page:finish");
  });

  nuxtApp.hook("app:error", (e) => {
    // console.log("app:error");

    // 客户端才有window对象 用来展示loading，服务端没有
    if (process.client) {
      setTimeout(() => {
        // 结束loading
        bar.value?.finish();
      }, 150);
    }
  });
});
