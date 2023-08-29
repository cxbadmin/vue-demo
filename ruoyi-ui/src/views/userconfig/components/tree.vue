<template>
  <div>
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText"
      size='small'
    >
    </el-input>
    <el-tree
      class="filter-tree"
      highlight-current
      node-key="id"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      :expand-on-click-node="false"
      @node-click="selectNode"
      :current-node-key="selectNodeId"
      ref="tree"
    >
    </el-tree>
  </div>
</template>

<script>

export default {
  name: "treeDiv",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    setSelectNode: {
      type: Function,
      default: function() {}
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  data() {
    return {
      filterText: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      selectNodeId: 0,
    };
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    selectNode(key) {
      console.log(key)
      this.setSelectNode(key);
      this.selectNodeId = key.id;
    }
  },
};
</script>

<style scoped lang="scss">
</style>