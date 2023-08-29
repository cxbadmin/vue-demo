<template>
  <div class="charts">
    <el-row :gutter="20">
      <el-col class="service_row" :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>折线图</span>
          </div>
          <div class="chart_box">
            <lineCharts></lineCharts>
          </div>
        </el-card>
      </el-col>
      <el-col class="service_row" :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>柱状图</span>
          </div>
          <div class="chart_box">
            <barCharts></barCharts>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import lineCharts from './components/lineCharts';
import barCharts from './components/barCharts';

export default {
  components: { lineCharts, barCharts },
};
</script>

<style scoped lang="scss">
  .charts {
    padding: 20px;
    .service_row {
      margin-bottom: 20px;
    }
    .chart_box {
      width: 100%;
      height: 30vh;
    }
  }
</style>