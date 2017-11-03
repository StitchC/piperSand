<template>
  <transition name="alert-dialog-fade">
    <div class="alert-dialog-wrapper" v-show="show">
      <div class="alert-dialog-content">{{txt}}</div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  /**
   * 警告框组件（自动关闭）
   *
   * 参数：
   * txt:
   *  类型: String
   *  设置警告框的提示内容
   *
   * show:
   *  类型: Boolean
   *  控制警告框的显示或隐藏
   *
   * delay:
   *  类型: Integer
   *  控制警告框多少毫秒后隐藏
   *
   *
   * 事件:
   *   alert-dialog-hide: 延迟达到delay 值是触发父组件事件隐藏警告框
   *
   * eg:
   * <alert-dialog :show="alertDialogShowStatus" :delay="2000" txt="'hahahahah'" @alert-dialog-hide="alertDialogHide"></alert-dialog>
   * */
  export default {
    props: {
      txt: {
        type: String
      },
      show: {
        type: Boolean,
        default: false
      },
      delay: {
        type: Number
      }
    },
    watch: {
      show(val) {
        if(val === true) {
          setTimeout(() => {
            this.$emit('alert-dialog-hide');
          }, this.delay);
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .alert-dialog-wrapper
    position: fixed
    bottom: 120px
    left: 50%
    width: 120px
    margin-left: -60px
    padding: 5px 12px
    background-color: #000
    box-shadow: 0 0 15px rgba(0,0,0,0.4)
    text-align: center
    z-index: 99
    &.alert-dialog-fade-enter
      opacity: 0
    &.alert-dialog-fade-enter-active
      transition: all .4s ease
    &.alert-dialog-fade-enter-to
      opacity: 1
    &.alert-dialog-fade-leave-to
      opacity: 0
    &.alert-dialog-fade-leave-active
      transition: all .4s ease
    .alert-dialog-content
      color: #fff
</style>
