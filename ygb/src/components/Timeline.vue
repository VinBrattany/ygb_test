<template>
  <div>
    <!-- <img-enlarge v-if="showImg" @clickImg="viewImg" :imgSrc="imgSrc"></img-enlarge> -->
    <div class="vertical-timeline vertical-container">
      <div class="vertical-timeline-block" v-for="(item, index) in listData"
        :key="index">
        <div class="vertical-timeline-icon">
            <i class="fa fa-briefcase"></i>
        </div>
        <div class="vertical-timeline-content">
          <div class="title-text">{{ item.datetime ? item.datetime : '未知' }}</div>
          <br>
          <div class="text">养户: {{ item.rearer ? item.rearer : '未知' }}</div>
          <div class="text">所属问题: {{ item.problemType ? item.problemType : '未知' }}</div>
          <div class="text">问题描述: {{ item.problemDesc ? item.problemDesc : '未知' }}</div>
          <div class="img-container">
            <div class="img-item"
              v-for="(imgItem, imgIndex) in item.imgList"
              :key="imgIndex">
              <!-- <img v-image-preview="{
                zIndex: 1000,
                src: imgItem.src,
                }"
                class="img"
                :src="imgItem.src"
                :alt="imgItem.name"> -->
                <img :preview="index"
                class="img"
                :src="imgItem.src"
                :alt="imgItem.name">
                <!-- <img class="img"
                :src="imgItem.src"
                :alt="imgItem.name"
                @click="clickImg($event)"> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgEnlarge from '@/components/ImgEnlarge'

export default {
  name: 'timeline',
  data () {
    return {
      showImg: false,
      imgSrc: ''
    }
  },
  props: {
    listData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    ImgEnlarge
  },
  methods: {
    clickImg (e) {
      this.showImg = true
      this.imgSrc = e.currentTarget.src
    },
    viewImg () {
      this.showImg = false
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/less/func";

.vertical-timeline {
  position: relative;
  .px2rem(padding, 0);
  .px2rem(margin-top, 4);
  .px2rem(margin-bottomm, 4);

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    background: #f1f1f1;
    .px2rem(top, 0);
    .px2rem(left, 22);
    .px2rem(width, 4);
  }

  &.vertical-container {
    width: 94%;
    margin: 0 auto;

    &::after {
      /* clearfix */
      content: '';
      display: table;
      clear: both;
    }

    .vertical-timeline-block {
      position: relative;
      .px2rem(margin, 4);
      .px2rem(margin-bottom, 16);

      &::after {
        /* clearfix */
        content: '';
        display: table;
        clear: both;
      }

      .vertical-timeline-icon {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        text-align: center;
        background-color: #87CEEB;
        color: #ffffff;
        border-style: solid;
        border-color: #f1f1f1;
        .px2rem(width, 40);
        .px2rem(height, 40);
        .px2rem(font-size, 16);
        .px2rem(border-width, 3);
      }

      .vertical-timeline-content {
        position: relative;
        background: #f5f5f5;
        border-radius: 0.25em;
        .px2rem(margin-left, 60);
        .px2rem(padding, 8);

        &::before {
          content: '';
          position: absolute;
          right: 100%;
          height: 0;
          width: 0;
          border: solid transparent;
          border-right: solid white;
          border-color: transparent #f5f5f5 transparent transparent;
          .px2rem(top, 16);
          .px2rem(border-width, 7);
          .px2rem(border-right-width, 7);
        }

        &::after {
          /* clearfix */
          content: '';
          display: table;
          clear: both;
        }

        .title-text {
          font-weight: 600;
          .px2rem(font-size, 16);
        }

        .text {
          .px2rem(font-size, 14);
        }

        .img-container {
          overflow: auto;
          clear: both;
          .img-item {
            position: relative;
            float: left;
            width: 20%;
            .px2rem(width, 66);
            .px2rem(height, 66);
            .px2rem(padding-right, 10);
            .px2rem(padding-bottom, 10);
            .img {
              .px2rem(width, 56);
              .px2rem(height, 56);
              .px2rem(border-radius, 6);
            }
          }
        }
      }
    }
  }
}
</style>
