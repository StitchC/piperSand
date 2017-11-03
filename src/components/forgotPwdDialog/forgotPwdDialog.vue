<template>
  <transition name="forgotPwd-dialog-fade">
    <div class="forgotPwd-dialog-wrapper" v-show="show">
      <div class="forgotPwd-dialog-content">
        <span class="close-btn" @click="closeDialog">✖</span>
        <h3 class="dialog-title">找回密码</h3>
        <p class="dialog-hint">你的登陆密码会发送到你填写的邮箱地址</p>
        <div class="dialog-input-wrap">
          <input v-model="findPwdAc" @focus="onFocus" type="text" placeholder="请填写正确的邮箱地址" class="mail-input">
          <transition name="hint-slide">
            <div class="hint" v-show="findPwdAcHintStatus.show">{{findPwdAcHintStatus.txt}}</div>
          </transition>
        </div>
        <div class="submit-btn" @click="getPwd">获取密码</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  /**
   * 找回密码提示框组件：
   * @param {Boolean} show - 控制组件的显示或隐藏
   * @param {String} account - 组件显示的时候输入框的默认内容
   *
   *
   * @event dialog-close  - 组件点击关闭按钮的时候通知父组件将其关闭
   *
   * */

  const ACCOUNT_REG = /^[\w\d]+@[\w\d]+\.[\w]+$/;
  export default {
    data() {
      return {
        findPwdAc: '',
        findPwdAcHintStatus: {
          show: false,
          txt: ''
        }
      };
    },
    props: {
      show: {
        type: Boolean
      },
      account: {
        type: String
      }
    },
    methods: {
      getPwd() {
        if (!ACCOUNT_REG.test(this.findPwdAc)) {
          this.findPwdAcHintStatus.show = true;
          this.findPwdAcHintStatus.txt = '邮箱不正确';
        }
      },
      onFocus() {
        this.findPwdAcHintStatus.show = false;
      },
      closeDialog() {
        this.findPwdAcHintStatus.show = false;
        this.findPwdAcHintStatus.txt = '';
        this.$emit('dialog-close');
      }
    },
    watch: {
      account(val, oldVal) {
        this.findPwdAc = val;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .forgotPwd-dialog-wrapper
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0,0,0,0.6)
    z-index: 50
    &.forgotPwd-dialog-fade-enter
      opacity: 0
    &.forgotPwd-dialog-fade-enter-active
      transition: all .4s linear
    &.forgotPwd-dialog-fade-enter-to
      opacity: 1
    &.forgotPwd-dialog-fade-leave-to
      opacity: 0
    &.forgotPwd-dialog-fade-leave-active
      transition: all .4s linear
    .forgotPwd-dialog-content
      position: absolute
      top: 50%
      left: 50%
      width: 320px
      height: 180px
      margin: -90px 0 0 -160px
      background-color: #fff
      .close-btn
        position: absolute
        display: inline-block
        top: 8px
        right: 10px
        width: 20px
        height: 20px
        line-height: 20px
        border-radius: 50%
        background-color: #ccc
        color: #666
        font-size: 14px
        text-align: center
        cursor: pointer
      .dialog-title
        line-height: 40px
        text-align: center
        font-size: 16px
        font-weight: 800
      .dialog-hint
        line-height: 40px
        text-align: center
        font-size: 14px
      .dialog-input-wrap
        position: relative
        width: 100%
        height: 35px
        border-top: 1px solid #969696
        border-bottom: 1px solid #969696
        overflow: hidden
        .mail-input
          display: block
          width: 100%
          height: 35px
          padding-left: 10px
          font-size: 14px
          &:focus
            outline: none
        .hint
          position: absolute
          top: 0
          right: 10px
          height: 35px
          line-height: 35px
          color: #c31b20
          font-size: 14px
          &.hint-slide-enter
            right: 0
            opacity: 0
          &.hint-slide-enter-active
            transition: all .4s ease
          &.hint-slide-enter-to
            right: 10px
            opacity: 1
          &.hint-slide-leave-to
            right: 0
            opacity: 0
          &.hint-slide-leave-active
            transition: all .4s ease
      .submit-btn
        width: 100px
        height: 38px
        line-height: 38px
        margin: 15px auto 0 auto
        background-color: #2b9e4f
        text-align: center
        font-size: 14px
        color: #fff
        cursor: pointer
        &:hover
          background-color: #2ab361
</style>
