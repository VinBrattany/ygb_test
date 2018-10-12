<template>
  <div class="wrapper">
    <div class="swipe-wrapper">
      <mt-swipe>
        <mt-swipe-item class="swipe-item-1 item">1</mt-swipe-item>
        <mt-swipe-item class="swipe-item-2 item">2</mt-swipe-item>
        <mt-swipe-item class="swipe-item-3 item">3</mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="section">
      <div class="icon-item"
        v-for="(item, index) in businessType"
        :key="index"
        @click="gotoPage(item.path)">
        <div class="icon">
          <img :src="item.imgSrc" :alt="item.name">
        </div>
        <div class="icon-name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },
  props: {
    // 业务种类
    businessType: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    gotoPage (path) {
      if (path) {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/less/func";

.wrapper {
  .swipe-wrapper {
    .px2rem(height, 140);
    .swipe-item-1 {
      background-color: blue;
    }
    .swipe-item-2 {
      background-color: red;
    }
    .swipe-item-3 {
      background-color: green;
    }
    .item{
      text-align: center;
      font-size: 40px;
      color: white;
    }
  }
  .section {
    border-top: 1px solid grey;
    border-left: 1px solid grey;
    .icon-item {
      display: inline-block;
      width: 33.33%;
      border-bottom: 1px solid grey;
      border-right: 1px solid grey;
      .px2rem(padding, 10);
      .icon {
        .px2rem(width, 40);
        .px2rem(height, 40);
        margin: 0 auto;
        img {
          .px2rem(width, 40);
          .px2rem(height, 40);
        }
      }
      .icon-name {
        .px2rem(margin-top, 4);
        text-align: center;
        .px2rem(font-size, 14);
        .px2rem(line-height, 20);
        color: rgba(29,29,29,1);
      }
    }
  }
}
</style>
