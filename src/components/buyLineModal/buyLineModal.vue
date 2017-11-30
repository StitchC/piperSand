<template>
  <transition name="buy-line-modal-fade">
    <div class="buy-line-modal-wrapper" v-show="show">
      <div class="buy-line-modal-dialog">
        <div class="buy-line-modal-close-btn-wrap">
          <span class="buy-line-close-btn" @click="close">✖</span>
        </div>
        <h2 class="buy-line-dialog-title">购买生产线</h2>
        <div class="line-select-wrap">
          <h2 class="select-title">
            <span class="txt">生产线类型</span>
          </h2>
          <div class="line-selector-item-contetn">
            <div class="line-selector-item" :class="{'active': type === 'hand'}">
              <span class="icon icon-buy-beltline"></span>
              手动生产线
              <input type="radio" value="hand" name="type" v-model="type">
            </div>
            <div class="line-selector-item" :class="{'active': type === 'auto'}">
              <span class="icon icon-buy-beltline"></span>
              自动生产线
              <input type="radio" value="auto" name="type" v-model="type">
            </div>
            <div class="line-selector-item" :class="{'active': type === 'flex'}">
              <span class="icon icon-buy-beltline"></span>
              弹性生产线
              <input type="radio" value="flex" name="type" v-model="type">
            </div>
          </div>
          <h2 class="select-title">
            <span class="txt">产品类型</span>
          </h2>
          <div class="line-selector-item-contetn">
            <div class="line-selector-item" :class="{'active': product === 'p1'}">
              <span class="icon icon-delivered"></span>
              p1
              <input type="radio" value="p1" name="product" v-model="product">
            </div>
            <div class="line-selector-item" :class="{'active': product === 'p2'}">
              <span class="icon icon-delivered"></span>
              p2
              <input type="radio" value="p2" name="product" v-model="product">
            </div>
            <div class="line-selector-item" :class="{'active': product === 'p3'}">
              <span class="icon icon-delivered"></span>
              p3
              <input type="radio" value="p3" name="product" v-model="product">
            </div>
            <div class="line-selector-item" :class="{'active': product === 'p4'}">
              <span class="icon icon-delivered"></span>
              p4
              <input type="radio" value="p4" name="product" v-model="product">
            </div>
          </div>
        </div>
        <div class="confirm-buy-line-btn" :class="{'enable': type && product, 'disable': !type || !product}">{{btnTxt}}</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  /**
   * 购买生产线模态框组件
   *
   * @param {Boolean} show - 控制模态框的显示或隐藏
   *
   * */

  export default {
    data() {
      return {
        type: '',
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
        this.type = '';
        this.product = '';
      },
      close() {
        this.init();
        this.$emit('buy-line-modal-close');
      }
    },
    computed: {
      btnTxt() {
        if(this.type && this.product) {
          return '确认购置厂房';
        }else if(this.type && !this.product) {
          return '请选择产品类型';
        }else if(!this.type && this.product) {
          return '请选择生产线类型';
        }else if(!this.type && !this.product) {
          return '请选择';
        }
      }
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"

  .buy-line-modal-wrapper
    modal-style()
    fade-animate('buy-line-modal-fade',0,1)
    .buy-line-modal-dialog
      dialog-style()
      width: 560px
      height: 400px
      margin-top: -200px
      margin-left: -280px
      background-color: #fff
      border-radius: 5px
      .buy-line-modal-close-btn-wrap
        height: 35px
        line-height: 35px
        text-align: right
        .buy-line-close-btn
          close-btn-style()
      .buy-line-dialog-title
        text-align: center
      .line-select-wrap
        .select-title
          width: 150px
          height: 1px
          line-height: 1px
          margin: 15px auto 0 auto
          border-top: 1px solid #666
          text-align: center
          .txt
            padding: 0 15px
            background-color: #fff
        .line-selector-item-contetn
          text-align: center
          .line-selector-item
            position: relative
            display: inline-block
            vertical-align: middle
            width: 70px
            height: 70px
            margin: 15px 0 15px 10px
            background-color: #9e9e9e
            border-radius: 5px
            text-align: center
            font-size: 12px
            transition: all .5s ease
            &.active
              background-color: #2ecc71
              color: #fff
              .icon
                color: #fff
            &:first-child
              margin: 15px 0 15px 0
            .icon
              display: block
              margin-top: 15px
              margin-bottom: 5px
              font-size: 20px
              text-align: center
            input
              position: absolute
              top: 0
              left: 0
              width: 100%
              height: 100%
              opacity: 0
              cursor: pointer
      .confirm-buy-line-btn
        width: 150px
        height: 38px
        line-height: 38px
        margin: 15px auto 0 auto
        text-align: center
        font-size: 14px
        cursor: pointer
        &.enable
          background-color: #2ecc71
          color: #fff
        &.disable
          color: #ccc
          background-color: #666
</style>
