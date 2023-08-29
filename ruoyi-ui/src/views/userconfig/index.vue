<template>
  <div class="user_config">
    <el-row :gutter="20">
      <el-col :span="4" class="left_tree">
        <tree :data="treeList" :setSelectNode="setSelectNode"></tree>
      </el-col>
      <el-col :span="20">
        <tables v-show="selectNodeId" :selectNodeId="selectNodeId" :treeOptions="treeOptions"></tables>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tree from './components/tree';
import tables from './components/table';

export default {
  name: "Index",
  components: { tree, tables },
  data() {
    return {
      treeList: [],
      selectNodeId: null,
      treeOptions: [],
    };
  },
  watch: {
    selectNodeId: function(newVal, oldVal) {
      this.queryTreeList(newVal)
    }
  },
  created() {
    this.queryTreeList(null);
  },
  methods: {
    setSelectNode(key) {
      this.selectNodeId = key.id;
    },
    queryTreeList(id) {
      this.$store.dispatch('queryTreeList').then((res) => {
        const treeOptions = this.dataSource(res.data);
        this.treeList = res.data;
        this.treeOptions = treeOptions;
      }).catch(err => {
        this.isLoading = false;
      });
    },
    dataSource(data) {
      const result = [];
      data.forEach((item) => {
        if (item.children?.length > 0) {
          result.push({
            value: item.id,
            label: item.label,
            children: this.dataSource(item.children),
          })
        } else {
          result.push({ value: item.id, label: item.label })
        }
      })
      return result;
    }
  },
};
</script>

<style scoped lang="scss">
  .user_config {
    padding: 16px;
    .left_tree {
      border-right: 1px solid #E0E0E0;
    }
  }
</style>