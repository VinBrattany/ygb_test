<template>
  <mt-loadmore :top-method="loadTop" ref="loadmore">
    <timeline :listData="listData"></timeline>
  </mt-loadmore>
</template>

<script>
import Timeline from '@/components/Timeline'

export default {
  name: 'service-application',
  data () {
    return {
      listData: [
        {
          datetime: '2018-09-11',
          rearer: 'abc',
          problemDesc: 'aaa',
          problemType: 'ds',
          imgList: [
            {
              src: require('@/assets/IMG_0625.png'),
              name: 'enen'
            },
            {
              src: require('@/assets/IMG_0638.jpg'),
              name: 'emem'
            },
            {
              src: require('@/assets/IMG_0001.png'),
              name: 'eeee'
            },
            {
              src: require('@/assets/IMG_0001.png'),
              name: 'aaaa'
            },
            {
              src: require('@/assets/IMG_0001.png'),
              name: 'eeee'
            }
          ]
        },
        {
          datetime: '2018-09-11',
          rearer: 'abc',
          problemDesc: 'aaa',
          problemType: 'ds'
        },
        {
          datetime: '2018-09-11',
          rearer: 'abc',
          problemDesc: 'aaa',
          problemType: 'ds'
        },
        {
          datetime: '2018-09-11',
          rearer: 'abc',
          problemDesc: 'aaa',
          problemType: 'ds'
        },
        {
          datetime: '2018-09-11',
          rearer: 'abc',
          problemDesc: 'aaa',
          problemType: 'ds'
        },
        {
          datetime: '2018-09-11',
          rearer: 'abc',
          problemDesc: 'aaa',
          problemType: 'ds'
        },
        {
          datetime: '2018-09-11',
          rearer: 'abc',
          problemDesc: 'aaa',
          problemType: 'ds'
        }
      ]
    }
  },
  methods: {
    loadTop () {
      console.log('loadmore')
      this.$refs.loadmore.onTopLoaded()
    }
  },
  components: {
    Timeline
  }
}
</script>

<style lang="less" scoped>

</style>
