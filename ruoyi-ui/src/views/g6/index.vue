<template>
  <div class="g6">
    <div class="tree_box">
      <g6Tree></g6Tree>
    </div>
    <div class="tree_box">
      <g6Radial></g6Radial>
    </div>
  </div>
  
</template>

<script>
import g6Tree from './components/g6Tree';
import g6Radial from './components/g6Radial';
export default {
  components: { g6Tree, g6Radial }
};
</script>

<style scoped lang="scss">
  .g6 {
    padding: 20px;
    .tree_box {
      width: 50%;
      height: calc(100vh - 90px);
      padding: 20px;
      border: 1px solid #E0E0E0;
      display: inline-block;
      vertical-align: top;
    }
    & > .tree_box:first-child {
      border-right: none;
    }
  }
</style>