<template>
  <div class="section">
    <div class="grid-item"
      v-for="(item, index) in gridData"
      :key="index"
      @click="gotoPage(item.path)">
      <div v-if="showIcon" class="grid-icon">
        <img :src="item.imgSrc" :alt="item.name">
      </div>
      <div v-else class="grid-title">{{ item.title }}</div>
      <div class="grid-content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rectangle-grid',
  data () {
    return {}
  },
  props: {
    gridData: {
      type: Object,
      default () {
        return {}
      }
    },
    showIcon: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    enlargeImg () {
      // 发送事件
      this.$emit('clickImg')
    }
  },
  watch: {
    imgStyle (val) {
      this.$set(this.imgStyle, 'top', val + 'px')
    }
  },
  mounted () {
    this.imgStyle.top = (document.body.clientHeight - parseInt(this.$refs.picture.height)) / 2
    console.log(this.imgStyle.top)
  }
}
</script>

<style lang="less" scoped>

</style>
