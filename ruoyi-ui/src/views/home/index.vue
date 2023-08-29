<template>
  <div class="home">
    <section class="header">
      <div>
        <div class="title">
          可泛化的领域知识学习与计算引擎
        </div>
        <div>
          国家科技创新2030 “新一代人工智能” 首批重大项目<br />
          一整套可服务于知识密集型行业共性需求的知识计算工具，算法与体系<br />
          浙江大学联合顶尖学术机构、行业领军企业联合建设
        </div>
      </div>
      <div>
        <img :src="HEADER_BG" style="width: 100%" />
      </div>
    </section>
    <section class="content">
      <Title message="OpenKS特色" />
      <el-row :gutter="80">
        <el-col :span="8" v-for="(item, index) in oneList" :key="index">
          <Card :data="item"></Card>
        </el-col>
      </el-row>
    </section>
    <section class="content">
      <Title message="新闻动态" />
      <div class="block">
        <el-carousel height="260px">
          <el-carousel-item v-for="(item, index) in newsList" :key="index">
            <CarouselCard :data="item"></CarouselCard>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>
    <section class="content">
      <Title message="贡献单位" />
      <div class="contributing_unit1">
        <div v-for="(item, index) in logoList" :key="index">
          <img :src="item" />
        </div>
      </div>
      <div class="contributing_unit2">
        <div v-for="(item, index) in logoList1" :key="index">
          <img :src="item" />
        </div>
      </div>
    </section>
    <section class="content footer">
      <div>
        版权所有 OpenKS知目 可泛化的领域知识学习与计算引擎
      </div>
      <div>
        技术支持 杭州量知数据科技有限公司
      </div>
    </section>
  </div>
</template>

<script>
import Title from './components/title';
import Card from './components/card';
import CarouselCard from './components/carouselcard';
import { oneList, logoList, logoList1 } from './config';

export default {
  name: "Index",
  components: { Title, Card, CarouselCard },
  data() {
    return {
      HEADER_BG: require('@/assets/images/home/homeLogo.png'),
      oneList,
      logoList,
      logoList1,
      newsList: []
    };
  },
  created() {
    this.queryCarouselList({});
  },
  methods: {
    queryCarouselList(params) {
      this.$store.dispatch('queryNewsList', params).then((res) => {
        this.newsList = res;
      })
    }
  },
  
};
</script>

<style scoped lang="scss">
  .home {
    // padding: 16px;
    .header {
      padding: 16px;
      background: linear-gradient(136deg, #fafbfb 0%, #ebeff8 100%);
      & > div:first-child {
        width: 50%;
        height: 100%;
        display: inline-block;
        vertical-align: top;
        // text-align: right;
        padding: 60px 24px 0 6%;
      }
      & > div:last-child {
        width: 50%;
        height: 100%;
        display: inline-block;
      }
      .title {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 24px;
      }
    }
    .content {
      padding: 20px 100px 40px 100px;
      ::v-deep .el-carousel__button {
        background-color: orange !important;
      }
    }
    & > .content:nth-child(2n + 1) {
      background: linear-gradient(136deg, #fafbfb 0%, #ebeff8 100%);
    }
    .footer {
      text-align: center;
      padding: 20px 100px 20px 100px;
      color: #5a5d68;
      font-size: 14px;
    }
    .contributing_unit1 {
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
      div {
        width: 16.6%;
        text-align: center;
        display: inline-block;
        height: 7.2rem;
        img {
          width: 8.2rem;
          height: 7.2rem;
          vertical-align: middle;
        }
      }
    }
    .contributing_unit2 {
      width: 100%;
      padding: 0;
      margin: 0;
      div {
        width: 16.6%;
        display: inline-block;
        vertical-align: top;
        height: 7.2rem;
        text-align: center;
        img {
          width: 8.2rem;
          height: 7.2rem;
          vertical-align: top;
        }
      }
    }
  }
</style>