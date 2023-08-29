<template>
  <div class="layout">
    <div class="sider">
      <div class="sider_title">
        管理平台demo
        
      </div>
    </div>
    <div class="right_sider">
      <div class="header">
        header
      </div>
      <div class="content">
        <app-main />
      </div>
      <div class="footer">
        footer
      </div>
    </div>
  </div>
</template>

<script>
import { AppMain, Sidebar } from './components'
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Layout',
  components: {
    AppMain,
    Sidebar,
  },
  computed: {
    ...mapState({
      theme: (state) => {state.settings.theme},
      sideTheme: state => state.settings.sideTheme,
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader,
    }),
    ...mapGetters(["sidebarRouters"]),
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  },
  mounted: function() {
    console.log(this.sidebarRouters)
  }
}
</script>

<style lang="scss" scoped>
  .layout {
  }
  .sider {
    width: 200px;
    height: 100%;
    background-color: red;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    .sider_title {
      color: black;
      font-size: 16px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-weight: 600;
    }
  }
  .right_sider {
    width: calc(100% - 200px);
    background-color: aqua;
    height: 100%;
    position: relative;
    margin-left: 200px;
    .header {
      height: 60px;
      background-color: red;
      width: 100%;
    }
    .content {
      height: calc(100% - 60px);
      background-color: bisque;
      width: 100%;
    }
    .footer {
      height: 30px;
      width: 100%;
      background-color: yellow;
    }
  }
</style>
  