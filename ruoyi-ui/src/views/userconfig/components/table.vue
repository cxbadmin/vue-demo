<template>
  <transition name="fade-transform" mode="out-in">
    <div>
      <el-row style="margin-bottom: 20px;" v-show="flag">
        <el-col :span="8">
          用户名称：
          <el-input
            placeholder="请输入用户名称"
            v-model="user"
            size="small"
            style="width: calc(100% - 6rem)"
          >
          </el-input>
        </el-col>
        <el-col :span="8">
          手机号码：
          <el-input
            placeholder="请输入手机号码"
            v-model="mobile"
            size="small"
            style="width: calc(100% - 6rem)"
          >
          </el-input>
        </el-col>
        <el-col :span="8" style="text-align: right;">
          <el-button type="primary" size="small" @click="search">搜索</el-button>
          <el-button style="margin-left: 20px;" size="small" @click="reset">重置</el-button>
        </el-col>
      </el-row>
      <div class="operate">
        <div>
          <el-button size="mini" @click="add" plain type="primary" icon="el-icon-plus">新增</el-button>
        </div>
        <div>
          <el-tooltip class="item" effect="dark" :content="flag ? '隐藏搜索' : '显示搜索'" placement="top">
            <el-button icon="el-icon-search" circle size="mini" @click="hideSearch"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="刷新数据" placement="top">
            <el-button icon="el-icon-refresh" circle size="mini" @click="queryTableData(selectNodeId)"></el-button>
          </el-tooltip>
          <el-button icon="el-icon-menu" circle size="mini" @click="openModal"></el-button>
        </div>
      </div>
      <el-table
        v-loading="isLoading"
        element-loading-background = "rgba(255, 255, 255, .5)"
        element-loading-text = "加载中，请稍后..."
        element-loading-spinner = "el-icon-loading"
        :data="tableData"
        :border="true"
        style="width: 100%"
        size="small"
      >
        <el-table-column
          prop="id"
          label="用户编号"
          width="80"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="user"
          label="用户名称"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="users"
          label="用户昵称"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="department"
          label="部门"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="手机号"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="80"
          align="center"
        >
          <template slot-scope="scope">
            <el-switch v-model="scope.row.status"></el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width="120"
          align="center"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-popconfirm
              title="确认删除?"
              @confirm="handleDelete(scope.$index, scope.row)"
            >
              <el-button
                size="mini"
                type="text"
                slot="reference"
              >
                删除
              </el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next, sizes, jumper"
        :page-sizes="[10, 20, 50, 100]"
        @size-change="pageSizeChange"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="currentChange"
        :total="100">
      </el-pagination>
      <modal :visible="visible" :closeModal="closeModal"></modal>
      <addmodal :visible="addVisible" :closeModal="closeAddModal" :options="treeOptions" :isEdit="isEdit" :editRow="editRow">
      </addmodal>
    </div>
  </transition>
</template>

<script>
import modal from './modal';
import addmodal from './addmodal';

export default {
  props: {
    selectNodeId: {
      type: Number,
      default: 0,
    },
    treeOptions: {
      type: Array,
      default: [],
    },
  },
  watch: {
    selectNodeId: function(newVal, oldVal) {
      this.queryTableData(newVal)
    }
  },
  created() {
    if (this.selectNodeId) {
      this.queryTableData(this.selectNodeId)
    }
  },
  components: { modal, addmodal },
  // created() {
  //   this.queryTableData()
  // },
  data() {
    return {
      user: '',
      mobile: '',
      tableData: [],
      flag: true,
      visible: false,
      addVisible: false,
      isLoading: false,
      isEdit: false,
      editRow: null,
      pageSize: 10,
      currentPage: 1,
    };
  },
  methods: {
    currentChange(current) {
      this.currentPage = current;
    },
    pageSizeChange(pageSize) {
      this.pageSize = pageSize
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    selectNode(key) {
      this.setSelectNode(key);
    },
    search() {
      this.queryTableData({ user: this.user, mobile: this.mobile })
    },
    reset() {
      this.user = '';
      this.mobile = '';
    },
    queryTableData(id) {
      this.isLoading = true;
      this.$store.dispatch('queryTableData', { id }).then((res) => {
        this.isLoading = false;
        this.tableData = res;
      }).catch(err => {
        this.isLoading = false;
      });
    },
    hideSearch() {
      this.flag = !this.flag;
    },
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    },
    closeAddModal() {
      this.editRow = null;
      this.isEdit = false;
      this.addVisible = false;
    },
    add() {
      this.addVisible = true;
    },
    handleEdit(index, row) {
      this.isEdit = true;
      this.addVisible = true;
      this.editRow = row;
    },
    handleDelete(index, row) {
      this.$message({
        type: 'success',
        message: '删除成功',
      });
      console.log(index);
      console.log(row);
    }
  },
};
</script>

<style>
  .operate {
    margin-bottom: 4px;
    & > div {
      display: inline-block;
      width: 50%;
    }
    & > div:last-child {
      text-align: right;
    }
    ::v-deep .el-carousel__button {
      background-color: orange !important;
    }
  }
  .pagination {
    margin-top: 10px;
    text-align: right;
  }
</style>
