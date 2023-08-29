<template>
  <div class="render_title">
    {{ message }}
  </div>
</template>

<script>

export default {
  name: "Title",
  props: ['message'],
};
</script>

<style scoped lang="scss">
  .render_title {
    height: 60px;
    line-height: 60px;
    font-size: 32px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 40px;
  }
</style>