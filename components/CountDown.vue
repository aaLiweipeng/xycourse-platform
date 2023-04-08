<!--
 * @Descripttion:
 * @Author: lwp
 * @Date: 2023-04-08 16:46:33
 * @LastEditTime: 2023-04-08 20:36:23
-->
<template>
  <div class="count-down">
    <small>{{ data.days }}</small>
    天
    <small>{{ data.hours }}</small>
    :
    <small>{{ data.minutes }}</small>
    :
    <small>{{ data.seconds }}</small>
  </div>
</template>

<script setup>
const props = defineProps({
  time: {
    type: [String, Number],
    default: ''
  }
})

const emit = defineEmits(['start', 'end'])
const data = useCountDown(props.time)

/**
 * @param {*} endTime 到期时间字符串时间戳
 * @return {object} 返回一个 基于computed的响应式的 包含天/时/分/秒 属性的 对象
 */
function useCountDown (endTime) {
  const timeout = ref(0) // 用来做倒计时的变量
  const Timer = ref(null)

  if (typeof endTime === 'string') {
    // 时间字符串转时间戳
    // new Date("2023-04-28T16:00:00.000Z").getTime() ==> 1682697600000
    endTime = new Date(endTime).getTime()
  }

  // 结束时间戳 - 当前时间戳，毫秒转为秒
  timeout.value = (endTime - Date.now()) / 1000

  // 如果timeout<=0, 直接结束【发送end事件】
  if (timeout.value <= 0) return emit('end')

  // 第一次走到这里，Timer.value为null，无妨；
  // 这里防止的同一个周期任务开了两次，于是上一次Timer有值时，要把它关了
  close()

  // 开启倒计时【周期任务，一秒一减，减完关掉，抛事件】
  Timer.value = setInterval(() => {
    timeout.value--
    // 如果 timeout.value <= 0，关闭定时器，触发结束
    if (timeout.value <= 0) {
      close()
      emit('end')
    }
  }, 1000)

  function close () {
    if (Timer.value) clearInterval(Timer.value)
  }

  // 将 秒 转成 天/时/分/秒
  // formatDiffDate 依赖的 timeout 一秒一更，更了就计算，更新timeObj，更新UI
  const timeObj = computed(() => formatDiffDate(timeout.value))

  return timeObj
}

/**
 * 秒 转 天/时/分/秒
 * @param {number} seconds 总秒数
 * @return {object} 把 天/时/分/秒 四个字段作为属性存进一个对象 返回这个对象
 */
function formatDiffDate (seconds) {
  const time = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  if (seconds > 0) {
    time.days = Math.floor(seconds / (60 * 60 * 24)) // 先把整天的秒数筛出来，余数 留给小时
    time.hours = Math.floor(seconds / (60 * 60)) - time.days * 24 // 把整小时数 筛出来，余数 留给分钟【总秒数除以小时，再减掉已经筛出来的】
    time.minutes = Math.floor(seconds / 60) - time.days * 24 * 60 - time.hours * 60 // 先把整分钟数 筛出来，余数 留给秒
    time.seconds = Math.floor(seconds) - time.days * 24 * 60 * 60 - time.hours * 60 * 60 - time.minutes * 60 // 减掉筛出来的秒数，妥了剩下的
  }

  // 手动三元 字符串补零 小于0的给字符串前面补个0
  time.days = time.days < 10 ? '0' + time.days : time.days
  time.hours = time.hours < 10 ? '0' + time.hours : time.hours
  time.minutes = time.minutes < 10 ? '0' + time.minutes : time.minutes
  time.seconds = time.seconds < 10 ? '0' + time.seconds : time.seconds

  return time
}
</script>
<style>
.count-down small {
  background-color: #ffffff;
  border-radius: 2px;
  padding: 2px 3px;
  margin: 0 3px;
  @apply text-yellow-500;
}
</style>
