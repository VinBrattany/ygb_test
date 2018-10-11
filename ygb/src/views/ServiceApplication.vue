<template>
  <mt-loadmore :top-method="loadTop" ref="loadmore">
    <timeline :listData="serviceApplicationList"></timeline>
  </mt-loadmore>
</template>

<script>
import Timeline from '@/components/Timeline'
import { mapGetters } from 'vuex'

export default {
  name: 'service-application',
  data () {
    return {}
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
      this.refreshData()
    },
    initData () {
      this.$store.dispatch('fetchServiceApplicationList').then(res => {
        this.$previewRefresh()
      }).catch(_ => {
        // console.log(_)
      })
    },
    refreshData () {
      this.$store.dispatch('fetchServiceApplicationList').then(res => {
        this.$previewRefresh()
        console.log('refresh')
        this.$refs.loadmore.onTopLoaded()
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
