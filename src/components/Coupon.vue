<template>
  <div class="coupon">
    <div class="coupon-main">
      <div class="coupon-main-price">
        <span class="coupon-main__price">
          <span>￥<strong>{{faceValue}}</strong></span>
        </span>
        <a @click.prevent="$emit('receive')">立即领券</a>
      </div>
      <div class="coupon-main-desc">
        {{des || '此券无说明'}}
      </div>
    </div>
    <div class="coupon-name">{{type || '满减券'}}</div>
  </div>
</template>

<script>
export default {
  props: {
    faceValue: {
      type: Number,
      value: 10
    },
    des: String,
    type: String
  }
}
</script>

<style lang="scss" scoped>
  .coupon {
    width: retRem(308);
    height: retRem(170);
    padding: retRem(15);
    box-sizing: border-box;
    background: url('../assets/images/coupon_bg.png') no-repeat 0 0 / 4.10667rem 2.26667rem;
    &-main {
      height: retRem(105);
      &-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: retRem(60);
        padding: 0 retRem(10);
        a {
          width: retRem(120);
          height: retRem(40);
          background-color: white;
          font-size: retRem(20);
          color: #ff2620;
          border-radius: retRem(20);
          text-decoration: none;
          text-align: center;
          line-height: retRem(40);
        }
      }
      &__price {
        font-size: retRem(20);
        strong {
          font-size: retRem(36);
        }
      }
      &-desc {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: retRem(20);
      }
      color:white;
    }

    &-name {
      height: retRem(35);
      font-size: retRem(20);
    }
  }
</style>
