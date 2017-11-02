<template>
  <transition name="forgotPwd-dialog-fade">
    <div class="forgotPwd-dialog-wrapper">
      <div class="forgotPwd-dialog-content">
        <h3 class="dialog-title">找回密码</h3>
        <p class="dialog-hint">你的登陆密码会发送到你的填写的邮箱地址</p>
        <input type="text" placeholder="请填写正确的邮箱地址">
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .forgotPwd-dialog-wrapper
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0,0,0,0.6)
</style>
