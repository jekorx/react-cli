export const getTimeInfo = str => {
  if (!str) return ''
  const date = new Date(str)
  const time = new Date().getTime() - date.getTime() // 现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) return ''
  if (time / 1000 < 60) return '刚刚'
  if (time / 60000 < 60) return parseInt(time / 60000, 10) + '分钟前'
  if (time / 3600000 < 24) return parseInt(time / 3600000, 10) + '小时前'
  if (time / 86400000 < 31) return parseInt(time / 86400000, 10) + '天前'
  if (time / 2592000000 < 12) return parseInt(time / 2592000000, 10) + '月前'
  return parseInt(time / 31536000000, 10) + '年前'
}
