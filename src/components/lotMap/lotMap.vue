<template>
  <transition name="factory-modal-fade">
    <div class="factory-modal-wrapper" v-show="show">
      <span class="close-btn icon-close" @click="close">✖</span>
      <div class="lot-wrapper">
        <ul class="factory-intro">
          <li class="intro-item small-factory"><i class="icon icon-factory"></i>小型工厂</li>
          <li class="intro-item middle-factory"><i class="icon icon-factory"></i>中型工厂</li>
          <li class="intro-item large-factory"><i class="icon icon-factory"></i>大型工厂</li>
        </ul>
        <div class="lot-item" :data-id="item" v-for="item in lots" v-tooltip="{content: '点击地块购置工厂', classes: 'tooltip-style'}">
          <span class="lot-title">地块{{item}}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  /**
   * 工厂选项模态框
   * 参数:
   * show:
   *  类型: boolean
   *
   * 事件:
   * close  触发父元素关闭模态框
   *
   *
   * */
  export default {
    data() {
      return {
        lots: [1, 2, 3, 4, 5]
      };
    },
    props: {
      show: {
        type: Boolean
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"

  .factory-modal-wrapper
    modal-style()
    fade-animate('factory-modal-fade',0,1)
    .close-btn
      position: absolute
      top: 20px
      right: 20px
      color: #fff
      font-size: 30px
      cursor: pointer
      transition: all .5s ease
      &:hover
        transform: rotate(90deg)
    .lot-wrapper
      position: absolute
      top: 70px
      bottom: 30px
      left: 20px
      right: 20px
      padding: 20px 10px
      background-color: #fff
      border-radius: 15px
      text-align: center
      .factory-intro
        position: absolute
        top: 20px
        left: 20px
        .intro-item
          font-size: 15px
          .icon
            font-weight: bold
          &.small-factory > .icon
            color: #2dae55
          &.middle-factory > .icon
            color: #0080a9
          &.large-factory > .icon
            color: #d21a22
      .lot-item
        position: relative
        display: inline-block
        width: 15%
        height: 100%
        margin-right: 10px
        background-color: #cacaca
        cursor: pointer
        transition: all .4s ease
        &:last-child
          margin: auto
        &:hover
          background-color: #2ecc71
          box-shadow: 0 10px 20px rgba(0,0,0,0.4)
          transform: scale(1.05)
        .lot-title
          position: absolute
          top: 50%
          left: 0
          width: 100%
          height: 38px
          line-height: 38px
          margin-top: -19px
          font-size: 20px
          text-align: center
  .tooltip-style
    padding: 5px
    font-size: 14px
    background-color: #333333
    border-radius: 5px
    .tooltip-inner
      color: #fff
</style>
