<template>
  <div class="service">
    <el-row :gutter="20">
      <el-col class="service_row" v-for="(item, index) in cardList" :span="index > 1 ? 24 : 12" :key="index">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><i :class="item.icon"></i>&nbsp;&nbsp;{{ item.name }}</span>
          </div>
          <div class="card_box">
            <el-row>
              <el-col v-for="(v, i) in Object.keys(contentList[item.name])" :key="i" :span="24 / Object.keys(contentList[item.name]).length">
                {{ v }}
              </el-col>
            </el-row>
            <!-- <el-row v-for="(v, i) in Object.keys(contentList[item.name])">
              <el-col v-for="(v, i) in Object.keys(contentList[item.name])" :span="24 / Object.keys(contentList[item.name]).length">
                {{ v }}
              </el-col>
            </el-row> -->
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { cardList, contentList, contentList1 } from './config';

export default {
  data () {
    return {
      cardList: cardList,
      contentList: contentList,
    }
  }
};
</script>

<style scoped lang="scss">
  .service {
    padding: 20px;
    .service_row {
      margin-bottom: 20px;
    }
  }
</style>