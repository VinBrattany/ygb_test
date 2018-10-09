<template>
  <!-- 过渡动画 -->
  <transition name="fade">
    <div class="img-view" @click="enlargeImg">
      <!-- 遮罩层 -->
      <div class="img-layer" @touchmove.prevent></div>
      <div class="img" @touchmove.prevent>
        <img :src="imgSrc">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'img-enlarge',
  props: ['imgSrc'],
  methods: {
    enlargeImg () {
      // 发送事件
      this.$emit('clickImg')
    }
  }
}
</script>

<style lang="less" scoped>
  /*动画*/
  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s linear;
    // transform: scale3D(1, 1, 0);
    // transform: translate3D(0, 0, 0);
    z-index: 999;
  }
  .fade-enter,
  .fade-leave-active {
    transform: scale3D(0, 0, 0);
    // transform: translate3D(100%, 0, 0);
    z-index: 999;
  }

  .img-view {
    position: relative;
    width: 100%;
    height: 100%;
    /*遮罩层样式*/
    .img-layer {
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      background: rgba(105, 105, 105, 0.9);
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    /*不限制图片大小，实现居中*/
    .img  {
      img {
        max-width: 100%;
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 1000;
      }
    }
  }
</style>
