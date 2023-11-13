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
      <el-col class="service_row" :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>饼图</span>
          </div>
          <div class="chart_box">
            <pieCharts></pieCharts>
          </div>
        </el-card>
      </el-col>
      <el-col class="service_row" :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>百度地图介入demo</span>
          </div>
          <div class="map_box">
            <mapCharts></mapCharts>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import lineCharts from './components/lineCharts';
import barCharts from './components/barCharts';
import pieCharts from './components/pieCharts';
import mapCharts from './components/mapCharts.vue';

export default {
  components: { lineCharts, barCharts, pieCharts, mapCharts },
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
    .map_box {
      width: 1000px;
      height: 30vh;
    }
  }
</style>