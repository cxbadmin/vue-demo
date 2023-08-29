<template>
  <el-dialog
    :title="isEdit ? '编辑用户' : '新增用户'"
    :visible="visible"
    @close="resetForm('ruleForm')"
    width="50%"
    class="dialog"
    destroy-on-close
  >
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="12">
          <el-form-item label="用户昵称" prop="users">
            <el-input
              v-model="ruleForm.users"
              size="small"
              placeholder="请输入用户昵称"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="归属部门" prop="department">
            <el-cascader
              :options="options"
              v-model="ruleForm.department"
              size="small"
              style="width: 100%"
              placeholder="请选择归属部门"
            >
            </el-cascader>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="手机号码" prop="mobile">
            <el-input
              v-model="ruleForm.mobile"
              size="small"
              placeholder="请输入手机号码"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮箱" prop="email">
            <el-input
              v-model="ruleForm.email"
              size="small"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="用户名称" prop="user">
            <el-input
              v-model="ruleForm.user"
              size="small"
              placeholder="请输入用户名称"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户密码" prop="password">
            <el-input
              v-model="ruleForm.password"
              size="small"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="状态" prop="status">
        <el-radio-group
          v-model="ruleForm.status"
        >
          <el-radio :label="true">正常</el-radio>
          <el-radio :label="false">停用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注" prop="desc">
        <el-input
          type="textarea"
          v-model="ruleForm.desc"
          :rows="3"
          placeholder="请输入备注"
        >
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm('ruleForm')" size="small">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')" size="small">重置</el-button>
      <el-button @click="resetForm('ruleForm')" size="small">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeModal: {
      type: Function,
      default: () => {}
    },
    options: {
      type: Array,
      default: [],
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    editRow: {
      type: Object,
      default: null,
    }
  },
  watch: {
    isEdit: function(newVal) {
      if (newVal && this.editRow) {
        setTimeout(() => {
          this.toEditRow(this.editRow);
        }, 10)
      }
    }
  },
  data() {
    return {
      ruleForm: {
        users: '',
        department: '',
        mobile: '',
        email: '',
        user: '',
        password: '',
        status: null,
        desc: ''
      },
      rules: {
        users: [
          { required: true, message: '请输入用户昵称', trigger: 'blur' },
        ],
        department: [
          { required: true, message: '请选择部门', trigger: 'change' },
        ],
        user: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        status: [
          { required: true, message: '请选择状态', trigger: 'blur' },
        ],
      }
    };
  },
  methods: {
    toEditRow(row) {
      this.ruleForm = {
        users: this.editRow.users,
        department: [this.editRow.department],
        mobile: this.editRow.mobile,
        email: this.editRow.email,
        user: this.editRow.user,
        password: this.editRow.password,
        status: this.editRow.status,
        desc: this.editRow.desc
      };
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '新增成功',
            type: 'success'
          });
          this.closeModal();
        } else {
          this.$message({
            message: '新增失败',
            type: 'error'
          });
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
      this.closeModal();
    }
  },
};
</script>

<style>
  .dialog-footer {
    text-align: center;
  }
  .dialog {
      ::v-deep .el-dialog__body {
      padding: 30px 20px 0 !important;
    }
  }
</style>
