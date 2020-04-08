<template>
  <div :class="`whitespace whitespace-${size}`" :style="{backgroundColor: color}"></div>
</template>

<script>
export default {
  props: {
    size: {
      validate (value) {
        return ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) > -1
      },
      default: 'xs'
    },
    color: String
  }
}
</script>

<style lang="scss" scoped>
  $height: retRem(6);
  $sizes: xs sm md lg xl;
  $start: 1;

  .whitespace {
    @each $size in $sizes {
      &-#{$size} {
        height: $height * $start;
      }
      $start: $start + 1
    }
  }
</style>
