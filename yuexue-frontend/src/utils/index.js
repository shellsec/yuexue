// 删除Cookie
export function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}
// 获取某一时间与当前时间间隔
export function getInterval(dateString) {
  const _1sec = 1000
  const _1min = _1sec * 60
  const _1hour = _1min * 60
  const _1day = _1hour * 24

  let date = new Date(dateString)
  let interval = Date.now() - date
  if (interval < _1min) {
    return Math.floor(interval / _1sec) + '秒前'
  }
  if (interval < _1hour) {
    return Math.floor(interval / _1min) + '分钟前'
  }
  if (interval < _1day) {
    return Math.floor(interval / _1hour) + '小时前'
  }
  if (interval < 3 * _1day) {
    return Math.floor(interval / _1day) + '天前'
  }
  return date.toLocaleDateString()
}