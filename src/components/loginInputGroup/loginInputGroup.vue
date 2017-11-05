<template>
  <div class="login-input-content">
    <div class="input-out-frame">
      <input v-model="loginAccount" @focus="onFocus($event, loginAcStatus)" type="text" placeholder="请输入账号">
      <transition name="hint-slide">
        <div class="hint login-ac-hint" v-show="loginAcStatus.show">{{loginAcStatus.txt}}</div>
      </transition>
    </div>
    <div class="input-out-frame">
      <input v-model="loginPwd" type="password" placeholder="请输入密码">
    </div>
    <div class="forgot-pwd" @click="forgotPwd">忘记密码？</div>
    <div class="login-btn" @click="onLogin">登陆</div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ACCOUNT_REG = /^[\w\d]+@[\w\d]+\.[\w]+$/;

  export default {
    data() {
      return {
        loginAccount: '',
        loginPwd: '',
        loginAcStatus: {
          show: false,
          txt: ''
        }
      };
    },
    methods: {
      onFocus(event, option) {
        option.show = false;
      },
      onLogin() {
        if (!ACCOUNT_REG.test(this.loginAccount)) {
          this.loginAcStatus.show = true;
          this.loginAcStatus.txt = '邮箱地址错误';
          this.loginAccount = '';
        }
      },
      forgotPwd() {
        this.$emit('forgot-pwd', this.loginAccount);
      }
    }
  };
</script>

<style lang="stylus">
  .login-input-content
    position: absolute
    top: 50px
    left: 0
    width: 100%
    &.input-content-slide-enter
      opacity: 0
    &.input-content-slide-enter-to
      opacity: 1
    &.input-content-slide-enter-active
      transition: all .5s ease
    &.input-content-slide-leave-to
      opacity: 0
    &.input-content-slide-leave-active
      transition: all .3s ease
    .input-out-frame
      position: relative
      width: 100%
      height: 40px
      margin-top: 30px
      .hint
        position: absolute
        top: 0
        right: 18px
        height: 40px
        line-height: 40px
        font-size: 14px
        color: #c31b20
        &.hint-slide-enter
          right: 0px
          opacity: 0
        &.hint-slide-enter-active
          transition: all .4s ease
        &.hint-slide-enter-to
          right: 18px
          opacity: 1
        &.hint-slide-leave-to
          right: 0px
          opacity: 0
        &.hint-slide-leave-active
          transition: all .4s ease
      input
        display: block
        width: 90%
        height: 40px
        line-height: 40px
        margin: 0 auto
        padding-left: 10px
        font-size: 14px
        border: 0px
        background-color: rgba(255,255,255,0.5)
        transition: all .3s linear
        &:focus
          outline: none
          background-color: rgba(255,255,255,0.8)
          border: 1px solid #2ecc71
    .forgot-pwd
      width: 90%
      margin: 15px auto 0 auto
      text-align: right
      color: #fff
      font-size: 14px
      cursor: pointer
    .login-btn
      width: 90%
      height: 40px
      line-height: 40px
      margin: 15px auto 0 auto
      padding: 0 5px
      background-color: #2b9e4f
      cursor: pointer
      color: #fff
      font-size: 14px
      text-align: center
      &:hover
        background-color: #2ab361
</style>
