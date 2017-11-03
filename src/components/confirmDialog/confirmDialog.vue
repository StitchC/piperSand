<template>
  <transition name="confirm-dialog-fade">
    <div class="confirm-dialog-wrapper" v-show="show">
      <div class="dialog-content">
        <p class="dialog-txt">{{txt}}</p>
        <div class="dialot-btn-wrap">
          <span class="btn confirm-btn" @click="onConfirm">确定</span>
          <span class="btn cancel-btn" @click="onCancel">取消</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  /**
   * 警告框组件
   *
   * 参数:
   * txt:
   *  类型: String
   *  初始化警告框的文字内容
   *
   * show:
   *  类型: Boolean
   *  控制警告框的显示或隐藏
   *
   * 事件:
   * on-confirm: 警告框确认按钮点击时触发
   * on-cancel:  警告框取消按钮点击时触发
   * */
  export default {
    props: {
      txt: {
        type: String
      },
      show: {
        type: Boolean
      }
    },
    methods: {
      onConfirm() {
        this.$emit('on-confirm');
      },
      onCancel() {
        this.$emit('on-cancel');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .confirm-dialog-wrapper
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0,0,0,0.5)
    z-index: 99
    &.confirm-dialog-fade-enter
      opacity: 0
    &.confirm-dialog-fade-enter-active
      transition: all .4s ease
    &.confirm-dialog-fade-enter-to
      opacity: 1
    &.confirm-dialog-fade-leave-to
      opacity: 0
    &.confirm-dialog-fade-leave-active
      transition: all .4s ease
    .dialog-content
      position: absolute
      top: 50%
      left: 50%
      width: 350px
      height: 200px
      margin-left: -175px
      margin-top: -100px
      background-color: #fff
      border-radius: 10px
      .dialog-txt
        padding: 20px 12px 0 12px
        font-size: 14px
      .dialot-btn-wrap
        position: absolute
        bottom: 10px
        left: 0
        width: 100%
        height: 40px
        line-height: 40px
        padding: 0 12px
        .btn
          display: inline-block
          width: 60px
          height: 30px
          line-height: 30px
          text-align: center
          color: #fff
          border-radius: 5px
          font-size: 14px
          cursor: pointer
          &.confirm-btn
            background-color: #d61a23
            &:hover
              background-color: #b2171f
          &.cancel-btn
            background-color: #2ecc71
            &:hover
              background-color: #29a456
</style>
