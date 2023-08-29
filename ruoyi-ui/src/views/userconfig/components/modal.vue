<template>
  <el-dialog
    title="提示"
    :visible.sync="visible"
    @close="closeModal"
    width="50%"
  >
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeModal">取 消</el-button>
      <el-button type="primary" @click="closeModal">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>

export default {
  // name: "modal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeModal: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
</style>