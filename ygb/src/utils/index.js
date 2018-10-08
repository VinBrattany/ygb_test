export const getUrlParam = (name, url) => {
  if (!url) {
    url = window.location.href
  }

  const reg = new RegExp('[\\[\\]]', 'g')
  name = name.replace(reg, '\\$&')
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url)
  if (!results) return ''
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
export const changeNode = (obj) => {
  if (!obj || !obj.length) { return }
  for (var i = 0; i < obj.length; i++) {
    obj[i].originName = obj[i].name
    if (getLength(obj[i].name) > 40) {
      let name = obj[i].name
      obj[i].name = obj[i].name.substr(0, 20) + '...'
      obj[i].originName = name
    }
    var item = obj[i]
    if (item.hasOwnProperty('children') && item.children.length > 0) {
      changeNode(item.children)
    }
  }
}
export const getLength = (str) => {
  let len = 0
  for (let i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i)
    if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
      len++
    } else {
      len += 2
    }
  }
  return len
}
export const isIOS = () => {
  const u = navigator.userAgent
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}
