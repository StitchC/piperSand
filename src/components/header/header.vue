<template>
  <div class="header">
    <div class="user">
      <span class="user-name" @click="toggleToolList">Stitch</span>
      <transition name="tool-list-slide">
        <ul class="tool-list" v-show="tooListShowStatus">
          <li class="tool-item"><a href="#">个人信息</a></li>
          <li class="tool-item"><a href="#">个人统计</a></li>
          <li class="tool-item">退出</li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        tooListShowStatus: false
      };
    },
    methods: {
      toggleToolList() {
        this.tooListShowStatus = !this.tooListShowStatus;
      }
    }
  };
</script>

<style lang="stylus">
  @import "../../common/css/variable.styl"

  .header
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 55px
    background-color: #4b4b4b
    text-align: right
    .nav
      display: inline-block
      height: 55px
      font-size: 0
      .nav-item
        display: inline-block
        height: 55px
        line-height: 55px
        padding: 0 12px
        font-size: $normal-font-size
        &:hover
          background-color: $theme-color
        a
          color: #fff
    .user
      display: inline-block
      position: relative
      height: 55px
      line-height: 55px
      margin: 0 40px
      padding: 0 10px
      cursor: pointer
      .user-name
        color: #fff
      .tool-list
        position: absolute
        top: 55px
        left: 50%
        width: 120px
        margin-left: -60px
        background-color: #4b4b4b
        &.tool-list-slide-enter
          transform: translate3d(0, -10%, 0)
          opacity: 0
        &.tool-list-slide-enter-active
          transition: all .4s ease
        &.tool-list-slide-enter-to
          transform: translate3d(0,0,0)
          opacity: 1
        &.tool-list-slide-leave-to
          transform: translate3d(0, -10%, 0)
          opacity: 0
        &.tool-list-slide-leave-active
          transition: all .4s ease
        .tool-item
          line-height: 40px
          text-align: center
          color: #fff
          font-size: $normal-font-size
          cursor: pointer
          &:hover
            background-color: $theme-color
          a
            color: #fff
</style>
