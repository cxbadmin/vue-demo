<template>
  <div class="carousel">
    <div class="carousel_left">
      <div>
        {{ data.title }}
      </div>
      <div>
        {{ data.desc }}
      </div>
    </div>
    <img :src="data.img" />
  </div>
</template>

<script>

export default {
  name: "CarouselCard",
  props: ['data'],
};
</script>

<style scoped lang="scss">
  .carousel {
    .carousel_left {
      width: 50%;
      display: inline-block;
      vertical-align: top;
      padding-top: 24px;
      padding-right: 30px;
      padding-left: 70px;
      & > div:first-child {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 30px;
      }
      & > div:last-child {
        color: #5a5d68;
        font-size: 14px;
      }
    }
    img {
      width: 35%;
      height: 200px;
      vertical-align: middle;
    }
  }
</style>