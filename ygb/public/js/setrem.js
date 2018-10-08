function setRem () {
  var dpr = window.devicePixelRatio
  var fontSize
  var docEl = document.documentElement

  if (!docEl) return

  if (window.devicePixelRatio >= 1.5) {
    dpr = 2
  }
  docEl.setAttribute('data-dpr', dpr)

  var userAgent = navigator.userAgent
  if (userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || userAgent.match(/Android/i)) {
    fontSize = docEl.clientWidth / 7.5

    if (fontSize < 50) {
      // fontSize = 50;
    } else if (fontSize > 75) {
      fontSize = 75
    }
    docEl.style.fontSize = fontSize + 'px'
    return
  }

  docEl.style.fontSize = '50px'
};

setRem()
