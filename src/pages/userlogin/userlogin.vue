<template>
  <div class="login-wrapper">
    <x-particles :id="'myParticles'" :config="particlesConfig"></x-particles>
    <div class="login-title-wrap">
      <h3 class="login-title">PiperSand</h3>
      <p class="login-intro">崭新·轻量·数据化的 ERP 模拟系统</p>
    </div>
    <div class="input-wrapper">
      <div class="switch-wrapper">
        <div class="switch-btn login-btn" :class="{'focus': inputStatus === 0}" @click="inputSwitchClick($event, 0)">登陆</div>
        <div class="switch-btn register-btn" :class="{'focus': inputStatus === 1}" @click="inputSwitchClick($event, 1)">注册</div>
      </div>
      <div class="input-content-wrapper">
        <transition name="input-group-slide" mode="out-in">
          <component :is="curInputGroup" @forgot-pwd="showFotgotPwdDialog"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import particlesConfig from './assets/js/particles.config';
  import loginInputGroup from 'components/loginInputGroup/loginInputGroup.vue';
  import registerInputGroup from 'components/registerInputGroup/registerInputGroup.vue';

  export default {
    name: 'login',
    data() {
      return {
        particlesConfig: {},
        inputStatus: 0,
        forgotPwdDialogShow: false,
        curAccount: '',
        curInputGroup: 'login-input-group'
      };
    },
    created() {
      this.particlesConfig = particlesConfig;
      // 页面初始化时发送请求获取后台的 cookie
      if (!document.cookie.indexOf('csrftoken')) {
        this.$http.get('/get_token');
      }
    },
    components: {
      'login-input-group': loginInputGroup,
      'register-input-group': registerInputGroup
    },
    methods: {
      inputSwitchClick(event, index) {
        this.inputStatus = index;
        if (index === 0) {
          this.curInputGroup = 'login-input-group';
        }else {
          this.curInputGroup = 'register-input-group';
        }
      },
      toggleDialog() {
        this.forgotPwdDialogShow = !this.forgotPwdDialogShow;
      },
      showFotgotPwdDialog(curAccount) {
        this.forgotPwdDialogShow = !this.forgotPwdDialogShow;
        this.curAccount = curAccount;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login-wrapper
    position: relative
    height: 100%
    /*粒子背景图*/
    .x-particles
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-color: #2d2d2d
      .particles-js-canvas-el
        display: block
        width: 100% !important
        height: 100% !important
    .login-title-wrap
      position: absolute
      top: 40px
      left: 0
      width: 100%
      z-index: 10
      .login-title
        color: #fff;
        font-size: 70px
        text-align: center
      .login-intro
        line-height: 40px
        color: #fff
        font-size: 16px
        text-align: center
        word-spacing: 5px
    .input-wrapper
      position: absolute
      top: 180px
      left: 50%
      width: 360px
      height: 380px
      margin-left: -180px
      background-color: rgba(255,255,255,0.2)
      .switch-wrapper
        font-size: 0
        .switch-btn
          display: inline-block
          width: 50%
          height: 45px
          line-height: 45px
          font-size: 16px
          text-align: center
          color: #fff
          cursor: pointer
          transition: all .3s linear
          &.focus
            background-color: rgba(255,255,255,0.8)
            color: #2ecc71
      .input-group-slide-enter
        opacity: 0
        transform: translate3d(-10%,0,0)
      .input-group-slide-enter-active
        transition: all .3s ease
      .input-group-slide-enter-to
        opacity: 1
        transform: translate3d(0,0,0)
      .input-group-slide-leave-to
        opacity: 0
        transform: translate3d(10%,0,0)
      .input-group-slide-leave-active
        transition: all .3s ease
</style>
