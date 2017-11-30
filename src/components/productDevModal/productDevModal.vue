<template>
  <transition name="product-dev-modal-fade">
    <div class="product-dev-wrapper" v-show="show">
      <div class="product-dev-dialog">
        <div class="prodcut-dev-dialog-close-btn-wrapper">
          <span class="close-btn" @click="closeModal">✖</span>
        </div>
        <h3 class="product-dev-dialog-title">产品研发</h3>
        <p class="product-dev-dialog-hint">点击选择需要研发的产品</p>
        <div class="select-dev-type-wrap">
          <div class="dev-type-item" :class="{'on-checked': p1 === true}">
            <div class="item-inner">
              <span class="dev-type-item-icon icon-delivered"></span>
              <p class="item-title">p1产品</p>
            </div>
            <input type="checkbox" v-model="p1">
          </div>
          <div class="dev-type-item" :class="{'on-checked': p2 === true}">
            <div class="item-inner">
              <span class="dev-type-item-icon icon-delivered"></span>
              <p class="item-title">p2产品</p>
            </div>
            <input type="checkbox" v-model="p2">
          </div>
          <div class="dev-type-item" :class="{'on-checked': p3 === true}">
            <div class="item-inner">
              <span class="dev-type-item-icon icon-delivered"></span>
              <p class="item-title">p3产品</p>
            </div>
            <input type="checkbox" v-model="p3">
          </div>
          <div class="dev-type-item" :class="{'on-checked': p4 === true}">
            <div class="item-inner">
              <span class="dev-type-item-icon icon-delivered"></span>
              <p class="item-title">p4产品</p>
            </div>
            <input type="checkbox" v-model="p4">
          </div>
        </div>
        <div class="confirm-dev-btn enabled" @click="confirmDev">开始研发</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  /**
   * 产品研发模态框组件
   *
   * @params {Boolean} show - 控制组件隐藏或显示
   * @params {Integer} index - 保存对应按钮的index
   *
   * @event on-confirm - 点击确认按钮的时候 触发父组件事件 将对应按钮设为disabled
   * @event product-dev-modal-close - 触发父组件事件关闭子组件
   * */
  export default {
    data() {
      return {
        p1: false,
        p2: false,
        p3: false,
        p4: false
      };
    },
    props: {
      show: {
        type: Boolean
      },
      index: {
        type: Number
      }
    },
    methods: {
      init() {
        // 初始化组件函数
        for(let i = 1; i < 5; i++) {
          this['p' + i] = false;
        }
      },
      confirmDev() {
        // 确认研发按钮点击时 先判断按钮是否可以被点击
        // 然后再遍历一次 data 里面的 p1 - p4 数据
        // 如果值为true 的就推进数组再发送ajax 给后台
        /*
        if(this.hasSelected === false) {
          return;
        }
        */
        let resultArr = [];
        for(let i = 1; i < 5; i++) {
          if(this['p' + i] === true) {
            resultArr.push('p' + i);
          }
        }
        this.$emit('on-confirm', this.index);
        this.$emit('product-dev-modal-close');
      },
      closeModal() {
        this.init();
        this.$emit('product-dev-modal-close');
      }
    },
    computed: {
      hasSelected() {
        let result = false;
        for(let i = 1; i < 5; i++) {
          if(this['p' + i] === true) {
            result = true;
          }
        }
        return result;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"
  @import "../../common/css/variable.styl"

  .product-dev-wrapper
    modal-style()
    fade-animate('product-dev-modal-fade',0,1)
    .product-dev-dialog
      dialog-style()
      width: 400px
      height: 320px
      margin-top: -160px
      margin-left: -200px
      border-radius: 5px
      background-color: #fff
      overflow: hidden
      .prodcut-dev-dialog-close-btn-wrapper
        line-height: 30px
        text-align: right
        .close-btn
          close-btn-style()
      .product-dev-dialog-title
        line-height: 30px
        text-align: center
      .product-dev-dialog-hint
        text-align: center
        font-size: 14px
      .select-dev-type-wrap
        margin-top: 20px
        text-align: center
        .dev-type-item
          position: relative
          display: inline-block
          width: 80px
          height: 80px
          margin-left: 10px
          background-color: $disable-or-deactive
          border-radius: 5px
          text-align: center
          transition: all .3s linear
          &.on-checked
            background-color: $enable-or-active
            .dev-type-item-icon,
            .item-title
              color: $btn-enable-font-color
          &:first-child
            margin-left: 0
          .item-inner
            height: 100%
            .dev-type-item-icon
              display: inline-block
              margin-top: 20px
              font-size: 30px
            .item-title
              font-size: 14px
          input
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            opacity: 0
            cursor: pointer
      .confirm-dev-btn
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 38px
        line-height: 38px
        text-align: center
        font-size: 14px
        transition: all .3s linear
        &.disabled
          confitm-btn-disable()
        &.enabled
          confirm-btn-enable()
</style>
