// import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
// import 'vue-directive-image-previewer/dist/assets/style.css'

// const initImagePreviewer = Vue => {
//   // Vue.use(VueDirectiveImagePreviewer)
//   Vue.use(VueDirectiveImagePreviewer, {
//     type: 'move', // copy or move
//     background: { // or : background: '#000'
//       color: 'rgba(0, 0, 0, 0.9)' // or rgba or rgb     // or image: 'url(xxx)'
//     },
//     maxWidth: '100%',
//     animate: {
//       duration: 500,
//       // delay: 100,
//       func: 'ease'
//     },
//     clickMethod: 'click' // click or doubleClick
//   })
// }

// export default initImagePreviewer

import VuePhotoPreview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

const initImagePreviewer = Vue => {
  const options = {
    fullscreenEl: false // 关闭全屏按钮
  }
  Vue.use(VuePhotoPreview, options)
}

export default initImagePreviewer
