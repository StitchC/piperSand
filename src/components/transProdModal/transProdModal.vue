<template>
  <transition name="trans-prod-fade">
    <div class="tarns-prod-wrapper" v-show="show">
      <div class="trans-prod-dialog">
        <div class="trans-prod-dialog-close-btn-wrap">
          <span class="trans-prod-close-btn" @click="close">✖</span>
        </div>
        <h2 class="trans-prod-title">生产线转产</h2>
        <div class="product-select-wrap">
          <div class="select-item" :class="{'active': product === 'p1'}">
            <span class="icon icon-delivered"></span>
            p1
            <input type="radio" value="p1" name="product" v-model="product">
          </div>
          <div class="select-item" :class="{'active': product === 'p2'}">
            <span class="icon icon-delivered"></span>
            p2
            <input type="radio" value="p2" name="product" v-model="product">
          </div>
          <div class="select-item" :class="{'active': product === 'p3'}">
            <span class="icon icon-delivered"></span>
            p3
            <input type="radio" value="p3" name="product" v-model="product">
          </div>
          <div class="select-item" :class="{'active': product === 'p4'}">
            <span class="icon icon-delivered"></span>
            p4
            <input type="radio" value="p4" name="product" v-model="product">
          </div>
        </div>
        <div class="confirm-trans-prod-btn" :class="{'enable': this.product, 'disable': !this.product}">{{confirmBtnTxt}}</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  /**
   * 生产线转产模态框组件
   *
   * @param {Boolean} show - 控制组件显示或隐藏
   *
   * */
  export default {
    data() {
      return {
        product: ''
      };
    },
    props: {
      show: {
        type: Boolean
      }
    },
    methods: {
      init() {
        this.product = '';
      },
      close() {
        this.init();
        this.$emit('close-trans-prod');
      }
    },
    computed: {
      confirmBtnTxt() {
        if(!this.product) {
          return '请选择转产类型';
        }else {
          return '确认转产';
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"

  .tarns-prod-wrapper
    modal-style()
    fade-animate('trans-prod-fade', 0, 1)
    .trans-prod-dialog
      dialog-style()
      width: 480px
      height: 320px
      margin-left: -240px
      margin-top: -160px
      background-color: #fff
      border-radius: 5px
      overflow: hidden
      .trans-prod-dialog-close-btn-wrap
        height: 35px
        line-height: 35px
        text-align: right
        .trans-prod-close-btn
          close-btn-style()
      .trans-prod-title
        line-height: 35px
        text-align: center
      .product-select-wrap
        text-align: center
        .select-item
          position: relative
          display: inline-block
          width: 80px
          height: 80px
          margin-left: 10px
          border-radius: 5px
          background-color: #9e9e9e
          transition: all .4s ease
          &.active
            background-color: #2ecc71
            color: #fff
            .icon
              color: #fff
          &:first-child
            margin-left: 0
          .icon
            display: block
            margin-top: 20px
            font-size: 28px
          input
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            opacity: 0
            cursor: pointer
      .confirm-trans-prod-btn
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 35px
        line-height: 35px
        text-align: center
        font-size: 14px
        cursor: pointer
        &.disable
          background-color: #2d2d2d
          color: #ccc
        &.enable
          background-color: #2ecc71
          color: #fff
</style>
