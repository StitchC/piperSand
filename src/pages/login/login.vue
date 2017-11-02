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
        <transition-group name="input-content-slide" model="out-in" tag="div">
          <div class="login-input-content" v-show="inputStatus === 0" :key="0">
            <input type="text" placeholder="请输入账号">
            <input type="password" placeholder="请输入密码">
            <div class="forgot-pwd">忘记密码？</div>
            <div class="login-btn">登陆</div>
          </div>
          <div class="register-input-content" v-show="inputStatus === 1" :key="1">
            <input type="text" placeholder="请输入邮箱">
            <input type="text" placeholder="请输入用户名">
            <input type="password" placeholder="请输入登陆密码">
            <div class="register-btn">注册PiperSand</div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import particlesConfig from './assets/js/particles.config';
  export default {
    name: 'login',
    data() {
      return {
        particlesConfig: {},
        inputStatus: 0
      };
    },
    created() {
      this.particlesConfig = particlesConfig;
    },
    methods: {
      inputSwitchClick(event, index) {
        this.inputStatus = index;
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
          transition: all .5s ease .2s
        &.input-content-slide-leave-to
          opacity: 0
        &.input-content-slide-leave-active
          transition: all .3s ease
        input
          display: block
          width: 90%
          height: 40px
          line-height: 40px
          margin: 30px auto 0 auto
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
      .register-input-content
        position: absolute
        top: 50px
        left: 0
        width: 100%
        &.input-content-slide-enter
          opacity: 0
        &.input-content-slide-enter-to
          opacity: 1
        &.input-content-slide-enter-active
          transition: all .5s ease .2s
        &.input-content-slide-leave-to
          opacity: 0
        &.input-content-slide-leave-active
          transition: all .3s ease
        input
          display: block
          width: 90%
          height: 40px
          line-height: 40px
          margin: 30px auto 0 auto
          padding-left: 10px
          font-size: 14px
          border: 0px
          background-color: rgba(255,255,255,0.5)
          transition: all .3s linear
          &:focus
            outline: none
            background-color: rgba(255,255,255,0.8)
            border: 1px solid #2ecc71
        .register-btn
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
