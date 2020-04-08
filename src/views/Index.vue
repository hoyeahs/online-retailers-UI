<template>
  <div class="container">
    <h3>星级组件</h3>
    <Level></Level>

    <h3>WhiteSpace组件</h3>
    <WhiteSpace color="#fff"></WhiteSpace>
    <br>
    <WhiteSpace size="md" color="#fff"></WhiteSpace>

    <h3>Block</h3>
    <Block title="权益卡" moreTitle="查看更多" @click-more="clickMore">
      <div class="member-card">
        <img src="@/assets/images/yhk.png" :style="{width: '100%', verticalAlign: 'middle'}" alt="">
      </div>
    </Block>
    <WhiteSpace size="md" color="#eee"></WhiteSpace>
    <Block title="优惠券" moreTitle="更多优惠券" @click-more="clickMore">
      <div class="scroll-area">
        <div class="coupon-list">
          <Coupon v-for="(coupon, index) in coupons" :key="index" class="coupon" v-bind="coupon"></Coupon>
        </div>
      </div>
    </Block>
  </div>
</template>

<script>
import WhiteSpace from '@/components/WhiteSpace.vue'
import Level from '@/components/Level.vue'
import Block from '@/components/Block.vue'
import Coupon from '@/components/Coupon.vue'

export default {
  components: { WhiteSpace, Level, Block, Coupon },
  methods: {
    clickMore (e) {
      console.log(e)
    }
  },
  data () {
    return {
      coupons: [
        {
          faceValue: 10,
          des: '金枪鱼石锅拌饭立减8元',
          type: '折扣券'
        },
        {
          faceValue: 10,
          des: '金枪鱼石锅拌饭立减8元',
          type: '满减券'
        },
        {
          faceValue: 10,
          des: '金枪鱼石锅拌饭立减8元',
          type: '优惠券'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  p {
    background-color: red;
    margin: 0;
  }
  .scroll-area {
    width: 100%;
    overflow-y: scroll;
    @include hide-scroll-bar;
  }
  .coupon-list {
    display: flex;
    flex-flow: row nowrap;
  }
  .coupon {
    flex: 1 0 initial;
    margin-right: retRem(10)
  }
</style>>
