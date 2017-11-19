<template>
  <transition name="buy-factory-modal-fade">
    <div class="buy-factory-wrapper" v-show="show">
      <div class="buy-factory-dialog">
        <div class="buy-factory-dialog-close-btn-wrap">
          <span class="buy-factory-close-btn" @click="close">✖</span>
        </div>
        <h3 class="buy-factory-dialog-title">为{{lotIndex}}号地块购置 / 租赁厂房</h3>
        <p class="dialog-hint-txt">请选择购买类型及厂房规格</p>
        <div class="factory-select-wrap">
          <div class="factory-buy-type-select">
            <h3 class="select-title">
              <span>购买类型</span>
            </h3>
            <div class="select-item-wrap">
              <div class="select-type-item" :class="{'selected': type === 'buy'}">
                <div class="buy-type-icon">买</div>
                <input type="radio" name="buy-type" value="buy" v-model="type">
              </div>
              <div class="select-type-item" :class="{'selected': type === 'lend'}">
                <div class="buy-type-icon">租</div>
                <input type="radio" name="buy-type" value="rent" v-model="type">
              </div>
            </div>
          </div>
          <div class="factory-size-select">
            <h3 class="select-title">
              <span>厂房规格</span>
            </h3>
              <div class="size-select-item" :class="{'selected': size === 'large'}">
                <span class="size-type-icon large-size icon-factory"></span>
                <p class="size-txt">大型厂房</p>
                <input type="radio" name="buy-size" value="big" v-model="size">
              </div>
              <div class="size-select-item" :class="{'selected': size === 'middle'}">
                <span class="size-type-icon middle-size icon-factory"></span>
                <p class="size-txt">中型厂房</p>
                <input type="radio" name="buy-size" value="medium" v-model="size">
              </div>
              <div class="size-select-item" :class="{'selected': size === 'small'}">
                <span class="size-type-icon small-size icon-factory"></span>
                <p class="size-txt">小型厂房</p>
                <input type="radio" name="buy-size" value="small" v-model="size">
              </div>
          </div>
          <div class="factory-intro-wrap">
            <transition-group name="factory-size-hint-slide" tag="div" model="out-in">
              <div class="hint-txt" key="1" v-show="size === 'large'">
                <h3>大型厂房</h3>
                <p>大型厂房拥有5条生产线 生产效率极高</p>
              </div>
              <div class="hint-txt" key="2" v-show="size === 'middle'">
                <h3>中型厂房</h3>
                <p>中型厂房拥有4条生产线 生产效率不俗大型厂房 性价比较高</p>
              </div>
              <div class="hint-txt" key="3" v-show="size === 'small'">
                <h3>小型厂房</h3>
                <p>小型厂房拥有3条生产线 生产效率较低</p>
              </div>
            </transition-group>
          </div>
        </div>
        <div class="confirm-buy-factory-btn" :class="{'enable': type !== '' && size !== '', 'disabled': type === '' || size === ''}">{{setBtnTxt}}</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">

  /**
   *  购置厂房弹出层组件
   *
   *  @params {Boolean} show - 控制组件的显示或隐藏
   *  @params {Integer} lotIndex - 获取用户点击的地块编号
   *
   *  @event buy-factory-modal-close - 组件关闭时触发事件通知父组件隐藏
   * */

  export default {
    data() {
      return {
        type: '',
        size: '',
        btnTxt: ''
      };
    },
    props: {
      show: {
        type: Boolean
      },
      lotIndex: {
        type: Number
      }
    },
    methods: {
      init() {
        this.type = '';
        this.size = '';
      },
      close() {
        this.init();
        this.$emit('buy-factory-modal-close');
      }
    },
    computed: {
      setBtnTxt() {
        if(this.type === '' && this.size === '') {
          return '请选择购买类型和厂房规格';
        }

        if(this.type !== '' && this.size === '') {
          return '请选择厂房规格';
        }

        if(this.type === '' && this.size !== '') {
          return '请选择购买类型';
        }

        if(this.type !== '' && this.type === 'buy') {
          return '购置厂房';
        }else {
          return '租借厂房';
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"

  .buy-factory-wrapper
    modal-style()
    fade-animate('buy-factory-modal-fade', 0, 1)
    .buy-factory-dialog
      dialog-style()
      width: 560px
      height: 460px
      margin-top: -230px
      margin-left: -280px
      background-color: #fff
      border-radius: 5px
      .buy-factory-dialog-close-btn-wrap
        line-height: 30px
        text-align: right
        .buy-factory-close-btn
          close-btn-style()
      .buy-factory-dialog-title
        text-align: center
      .dialog-hint-txt
        text-align: center
        font-size: 14px
      .factory-select-wrap
        width: 95%
        margin: 20px auto 0 auto
        .select-title
          width: 140px
          height: 0
          line-height: 1px
          margin: 0 auto
          border-top: 1px solid #4a4a4a
          text-align: center
          span
            padding: 0 20px
            background-color: #fff
            font-size: 14px
        .select-item-wrap
          font-size: 0
          text-align: center
          .select-type-item
            position: relative
            display: inline-block
            width: 50px
            height: 50px
            line-height: 50px
            margin-top: 15px
            margin-left: 25px
            border-radius: 3px
            text-align: center
            background-color: #555555
            transition: all .3s linear
            &.selected
              background-color: #2ecc71
              .buy-type-icon
                color: #fff
                border: 3px solid #fff
            &:first-child
              margin-left: 0
            .buy-type-icon
              display: inline-block
              vertical-align: middle
              width: 35px
              height: 35px
              line-height: 35px
              border-radius: 50%
              border: 3px solid #ccc
              font-size: 14px
              text-align: center
              color: #ccc
              transition: all .3s linear
            input
              position: absolute
              top: 0
              left: 0
              width: 100%
              height: 100%
              opacity: 0
              cursor: pointer
        .factory-size-select
          margin-top: 20px
          text-align: center
          font-size: 0
          .size-select-item
            position: relative
            display: inline-block
            vertical-align: middle
            width: 80px
            height: 80px
            margin-top: 15px
            margin-left: 15px
            border-radius: 5px
            background-color: #4a4a4a
            font-size: 14px
            color: #ccc
            transition: all .3s linear
            &:first-child
              margin-left: 0
            &.selected
              background-color: #2ecc71
              color: #fff
              .size-type-icon
                color: @color
              .size-txt
                color: @color
            .size-type-icon
              display: inline-block
              color: @color
              &.large-size
                margin-top: 12px
                font-size: 40px
              &.middle-size
                margin-top: 20px
                font-size: 30px
              &.small-size
                margin-top: 28px
                font-size: 20px
            .size-txt
              color: @color
            input
              position: absolute
              top: 0
              left: 0
              width: 100%
              height: 100%
              opacity: 0
              cursor: pointer
        .factory-intro-wrap
          position: relative
          width: 100%
          height: 40px
          line-height: 40px
          margin-top: 20px
          .hint-txt
            position: absolute
            top: 0
            left: 0
            width: 100%
            text-align: center
          .factory-size-hint-slide-enter
            opacity: 0
            transform: translate3d(-80px,0,0)
          .factory-size-hint-slide-enter-active
            transition: all .3s ease
          .factory-size-hint-slide-enter-to
            opacity: 1
            transform: translate3d(0,0,0)
          .factory-size-hint-slide-leave-active
            transition: all .3s ease
          .factory-size-hint-slide-leave-to
            opacity: 0
            transform: translate3d(80,0,0)
      .confirm-buy-factory-btn
          width: 210px
          height: 38px
          line-height: 38px
          margin: 60px auto 0 auto
          text-align: center
          font-size: 14px
          cursor: pointer
          &.enable
            background-color: #2ecc71
            color: #fff
          &.disabled
            background-color: #393939
            color: #ccc
</style>
