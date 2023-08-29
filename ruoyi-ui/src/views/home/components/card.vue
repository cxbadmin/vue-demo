<template>
  <div class="card" :style="{backgroundImage: 'url(' + data.bg + ')' }">
    <img :src="data.logo" />
    <div class="card_title">
      {{ data.name }}
    </div>
    <div class="card_desc">
      {{ data.desc }}
    </div>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: ['data'],
};
</script>

<style scoped lang="scss">
  .card {
    padding: 60px 16px 16px 16px;
    position: relative;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    &:hover {
      box-shadow: 0px 0px 8px #dad7d7;
    }
    img {
      width: 100px;
      height: 100px;
      position: absolute;
      top: -50px;
      left: 0;
    }
    .card_title {
      font-size: 18px;
      font-weight: 600;
      z-index: 9;
      margin-bottom: 15px;
    }
    .card_desc {
      color: #5a5d68;
    }
  }
</style>