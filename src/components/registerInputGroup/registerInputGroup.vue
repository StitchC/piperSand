<template>
  <div class="register-input-content">
    <div class="input-out-frame">
      <input v-model="registerAccount" @focus="onFocus($event, regAcStatus)" type="text" placeholder="请输入正确的邮箱">
      <transition name="hint-slide">
        <div class="hint reg-ac-hint" v-show="regAcStatus.show">{{regAcStatus.txt}}</div>
      </transition>
    </div>
    <div class="input-out-frame">
      <input v-model="registerUsername" @focus="onFocus($event, regUsernameStatus)" type="text" placeholder="用户名 6-8位数字或英 中文字符">
      <transition name="hint-slide">
        <div class="hint reg-username-hint" v-show="regUsernameStatus.show">{{regUsernameStatus.txt}}</div>
      </transition>
    </div>
    <div class="input-out-frame">
      <input v-model="registerPwd" @focus="onFocus($event, regPwdStatus)" type="password" placeholder="密码 8-16位非中文任意字符">
      <transition name="hint-slide">
        <div class="hint reg-pwd-hint" v-show="regPwdStatus.show">{{regPwdStatus.txt}}</div>
      </transition>
    </div>
    <div class="register-btn" @click="onRegister">注册PiperSand</div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ACCOUNT_REG = /^[\w\d]+@[\w\d]+\.[\w]+$/;
  const PWD_REG = /^.{8,16}$/;
  const USERNAME_REG = /^[\w\d\u4E00-\u9FA5\u9FA6-\u9FCB\u3400-\u4DB5\u20000-\u2A6D\u62A700-\u2B734\u2B740-\u2B81D]{1,8}$/u;

  export default {
    data() {
      return {
        registerAccount: '',
        registerUsername: '',
        registerPwd: '',
        // 输入框错误提示元素控制属性
        regAcStatus: {
          show: false,
          txt: ''
        },
        regUsernameStatus: {
          show: false,
          txt: ''
        },
        regPwdStatus: {
          show: false,
          txt: ''
        }
      };
    },
    methods: {
      onFocus(event, option) {
        option.show = false;
      },
      onRegister() {
        if (!ACCOUNT_REG.test(this.registerAccount)) {
          this.regAcStatus.show = true;
          this.regAcStatus.txt = '请填写正确的邮箱地址';
          this.registerAccount = '';
        }

        if (!USERNAME_REG.test(this.registerUsername)) {
          this.regUsernameStatus.show = true;
          this.regUsernameStatus.txt = '请填写正确的用户名';
          this.registerUsername = '';
        }

        if (!PWD_REG.test(this.registerPwd)) {
          this.regPwdStatus.show = true;
          this.regPwdStatus.txt = '请填写正确的用户密码';
          this.registerPwd = '';
        }
      }
    }
  };
</script>

<style lang="stylus">
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
