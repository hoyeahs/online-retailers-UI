<template>
  <section class="block">
    <header class="block-head">
      <a v-if="moreTitle" href="JavaScript:;" @click.prevent="$emit('click-more', $event)">{{moreTitle}}</a>
      <strong>{{title}}</strong>
    </header>
    <div class="block-content">
      <slot>Content!</slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    moreTitle: {
      type: String,
      default: 'More'
    },
    title: {
      type: String,
      default: '块标题'
    }
  },
  mounted () {
    console.log(this.$slots.default[0])
  }
}
</script>

<style lang="scss" scoped>
  .block {
    padding: retRem(30);
    background-color: white;
    font-size: retRem(36);
  }
  .block-head {
    a {
      position: relative;
      top: retRem(5);
      font-size: retRem(26);
      float: right;
      text-decoration: none;
      color: #999;
    }
  }
  .block-content {
    margin-top: retRem(20);
  }
</style>
