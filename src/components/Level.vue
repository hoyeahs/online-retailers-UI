<template>
  <div class="level">
    <span class="level-item" v-for="i in level" :key="i"></span>
  </div>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 5
    }
  }
}
</script>

<style lang="scss">
  .level {
    display: flex;
    flex-flow: row nowrap;
    &-item {
      width: retRem(24);
      height: retRem(24);
      margin-right: retRem(6);
      background-color: #999;
      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
