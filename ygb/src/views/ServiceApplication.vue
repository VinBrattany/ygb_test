<template>
  <mt-loadmore :top-method="loadTop" ref="loadmore">
    <timeline :listData="listData"></timeline>
  </mt-loadmore>
</template>

<script>
import Timeline from '@/components/Timeline'
import { mapGetters } from 'vuex'

export default {
  name: 'service-application',
  data () {
    return {
      listData: []
    }
  },
  computed: {
    ...mapGetters({
      serviceApplicationList: 'getServiceApplicationList'
    })
  },
  mounted () {
    this.initData()
  },
  methods: {
    loadTop () {
      console.log('loadmore')
      this.$refs.loadmore.onTopLoaded()
    },
    initData () {
      this.$store.dispatch('fetchServiceApplicationList').then(res => {
        this.listData = this.serviceApplicationList
        this.$previewRefresh()
      }).catch(_ => {
        // console.log(_)
      })
    }
  },
  components: {
    Timeline
  }
}
</script>

<style lang="less" scoped>

</style>
