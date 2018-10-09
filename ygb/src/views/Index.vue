<template>
  <div class="page-index">
    <div class="page-wrap">
      <!-- tabcontainer -->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="HomePage">
          <home :business-type="businessType"></home>
        </mt-tab-container-item>
        <mt-tab-container-item id="MessagePage">
          <mt-cell class="page-part" title="当前选中" :value="selected" />
        </mt-tab-container-item>
        <mt-tab-container-item id="TrackPage">
          <mt-cell class="page-part" title="当前选中" :value="selected" />
        </mt-tab-container-item>
        <mt-tab-container-item id="MinePage">
          <div class="page-part">
            <!-- cell -->
            <!-- <mt-cell v-for="n in 13" :title="'我的 ' + n"/> -->
          </div>
          <router-link to="/">
          <!-- button -->
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="HomePage">
        <img slot="icon" src="@/assets/100x100.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="MessagePage">
        <img slot="icon" src="@/assets/100x100.png">
        消息
      </mt-tab-item>
      <mt-tab-item id="TrackPage">
        <img slot="icon" src="@/assets/100x100.png">
        轨迹
      </mt-tab-item>
      <mt-tab-item id="MinePage">
        <img slot="icon" src="@/assets/100x100.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Home from '@/components/Home'

export default {
  name: 'index',
  data () {
    return {
      selected: 'HomePage',
      businessType: [
        {
          name: '巡查录入',
          imgSrc: require('@/assets/img/home/hsss.png'),
          path: ''
        },
        {
          name: '专家库',
          imgSrc: require('@/assets/img/home/hsss.png'),
          path: ''
        },
        {
          name: '养户查询',
          imgSrc: require('@/assets/img/home/hsss.png'),
          path: ''
        },
        {
          name: '资料下载',
          imgSrc: require('@/assets/img/home/hsss.png'),
          path: ''
        },
        {
          name: '数据上传',
          imgSrc: require('@/assets/img/home/hsss.png'),
          path: ''
        },
        {
          name: '领料审核',
          imgSrc: require('@/assets/img/home/hsss.png'),
          path: ''
        },
        {
          name: '签到',
          imgSrc: require('@/assets/img/home/hsss.png'),
          path: ''
        },
        {
          name: '处方审核',
          imgSrc: require('@/assets/img/home/hsss.png'),
          path: ''
        },
        {
          name: '巡查计划',
          imgSrc: require('@/assets/img/home/hsss.png'),
          path: ''
        },
        {
          name: '采样管理',
          imgSrc: require('@/assets/img/home/hsss.png'),
          path: ''
        },
        {
          name: '服务申请',
          imgSrc: require('@/assets/img/home/hsss.png'),
          path: '/serviceapplication'
        },
        {
          name: '巡查图片',
          imgSrc: require('@/assets/img/home/hsss.png'),
          path: ''
        }
      ]
    }
  },
  components: {
    Home
  },
  watch: {
    
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/less/func";

.page-index {
  overflow: hidden;
  height: 100vh;

  .page-wrap {
    overflow: auto;
    height: 100%;
    .px2rem(padding-bottom, 60);
  }
}
</style>
