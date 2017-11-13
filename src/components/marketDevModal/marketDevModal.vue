<template>
  <transition name="market-dev-modal-fade">
    <div class="market-dev-wrapper" v-show="show">
      <div class="market-dev-dialog">
        <div class="market-dev-close-btn-wrap">
          <span class="close-btn" @click="closeDialog">✖</span>
        </div>
        <h3 class="market-dev-dialog-title">新市场开拓</h3>
        <p class="market-dev-dialog-intro">点击右侧按钮开启新市场</p>
        <div class="market-dev-main-wrap">
          <div class="market-intro-wrap">
            <transition-group tag="div" name="intro-item-slide" model="out-in">
              <div class="intro-item" key="intro-item-1" v-show="showIntroIndex === 0" :class="{'on-checked': m1 === true}">
                <div class="logo icon-local-market"></div>
                <h3 class="intro-title">本地市场</h3>
                <p class="intro-txt">你将会在本地开拓更大的市场</p>
              </div>
              <div class="intro-item" key="intro-item-2" v-show="showIntroIndex === 1" :class="{'on-checked': m2 === true}">
                <div class="logo icon-district-market"></div>
                <h3 class="intro-title">区域市场</h3>
                <p class="intro-txt">你将会在指定区域开拓更大的市场</p>
              </div>
              <div class="intro-item" key="intro-item-3" v-show="showIntroIndex === 2" :class="{'on-checked': m3 === true}">
                <div class="logo icon-domestic-market"></div>
                <h3 class="intro-title">国内市场</h3>
                <p class="intro-txt">你将会在国内开拓更大的市场</p>
              </div>
              <div class="intro-item" key="intro-item-4" v-show="showIntroIndex === 3" :class="{'on-checked': m4 === true}">
                <div class="logo icon-asia-market"></div>
                <h3 class="intro-title">亚洲市场</h3>
                <p class="intro-txt">你将会在亚洲开拓更大的市场</p>
              </div>
              <div class="intro-item" key="intro-item-5" v-show="showIntroIndex === 4" :class="{'on-checked': m5 === true}">
                <div class="logo icon-international-market"></div>
                <h3 class="intro-title">国际市场</h3>
                <p class="intro-txt">你将会在国际开拓更大的市场</p>
              </div>
            </transition-group>
            <div class="confirm-dev-market-btn" :class="{'disabled': hasSelected === false, 'enabled': hasSelected === true}">提交开拓申请</div>
          </div>
          <ul class="market-select-list">
            <li class="select-market-item" @mouseover="selectItemOnmouseon($event, 0)" :class="{'on-checked': m1 === true}">
              <span class="icon icon-local-market"></span>
              <p class="select-item-txt">本地市场</p>
              <input type="checkbox" v-model="m1">
            </li>
            <li class="select-market-item" @mouseover="selectItemOnmouseon($event, 1)" :class="{'on-checked': m2 === true}">
              <span class="icon icon-district-market"></span>
              <p class="select-item-txt">区域市场</p>
              <input type="checkbox" v-model="m2">
            </li>
            <li class="select-market-item" @mouseover="selectItemOnmouseon($event, 2)" :class="{'on-checked': m3 === true}">
              <span class="icon icon-domestic-market"></span>
              <p class="select-item-txt">国内市场</p>
              <input type="checkbox" v-model="m3">
            </li>
            <li class="select-market-item" @mouseover="selectItemOnmouseon($event, 3)" :class="{'on-checked': m4 === true}">
              <span class="icon icon-asia-market"></span>
              <p class="select-item-txt">亚洲市场</p>
              <input type="checkbox" v-model="m4">
            </li>
            <li class="select-market-item" @mouseover="selectItemOnmouseon($event, 4)" :class="{'on-checked': m5 === true}">
              <span class="icon icon-international-market"></span>
              <p class="select-item-txt">国际市场</p>
              <input type="checkbox" v-model="m5">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  /**
   *
   * 开拓新市场模态框组件
   *
   * @params {Boolean} show - 控制组件的显示或隐藏
   *
   * @event market-dev-modal-close - 触发父组件关闭模态框
   * */

  export default {
    data() {
      return {
        m1: false,
        m2: false,
        m3: false,
        m4: false,
        m5: false,
        showIntroIndex: 0
      };
    },
    props: {
      show: {
        type: Boolean
      }
    },
    methods: {
      init() {
        for(let i = 1; i < 5; i++) {
          this['m' + i] = false;
        }
      },
      selectItemOnmouseon(event, index) {
        this.showIntroIndex = index;
      },
      closeDialog() {
        this.init();
        this.$emit('market-dev-modal-close');
      }
    },
    computed: {
      hasSelected() {
        let result = false;
        for(let i = 1; i < 5; i++) {
          if(this['m' + i] === true) {
            result = true;
          }
        }
        return result;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"

  .market-dev-wrapper
    modal-style()
    fade-animate('market-dev-modal-fade',0,1)
    .market-dev-dialog
      dialog-style()
      width: 800px
      height: 480px
      margin-top: -240px
      margin-left: -400px
      background-color: #fff
      border-radius: 5px
      .market-dev-close-btn-wrap
        line-height: 25px
        text-align: right
        .close-btn
          close-btn-style()
      .market-dev-dialog-title
        line-height: 25px
        text-align: center
      .market-dev-dialog-intro
        font-size: 14px
        text-align: center
      .market-dev-main-wrap
        width: 95%
        margin: 15px auto 0 auto
        font-size: 0
        .market-intro-wrap
          position: relative
          display: inline-block
          vertical-align: middle
          width: 75%
          height: 300px
          .intro-item-slide-enter
            transform: translate3d(-40px,0,0)
            opacity: 0
          .intro-item-slide-enter-active
            transition: all .4s linear
          .intro-item-slide-enter-to
            transform: translate3d(0,0,0)
            opacity: 1
          .intro-item-slide-leave-to
            transform: translate3d(40px,0,0)
            opacity: 0
          .intro-item-slide-enter-active
            transition: all .4s linear
          .intro-item
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            &.on-checked
              .logo,
              .intro-title,
              .intro-txt
                color: #2eae57
            .logo
              margin-top: 30px
              font-size: 180px
              text-align: center
              transition: all .3s linear
            .intro-title
              font-size: 18px
              text-align: center
            .intro-txt
              margin-top: 15px
              font-size: 14px
              text-align: center
        .market-select-list
          display: inline-block
          vertical-align: middle
          width: 20%
          .select-market-item
            position: relative
            width: 70px
            height: 70px
            margin: 5px auto 0 auto
            background-color: #cccccc
            border-radius: 5px
            cursor: pointer
            transition: all .3s linear
            &.on-checked
              background-color: #2ecc71
            &:hover
              box-shadow: 0 8px 10px rgba(0,0,0,0.3)
            &:first-child
              margin-top: 0
            .icon
              display: inline-block
              width: 100%
              margin-top: 20px
              font-size: 25px
              text-align: center
            .select-item-txt
              text-align: center
              font-size: 12px
            input
              position: absolute
              top: 0
              left: 0
              width: 100%
              height: 100%
              opacity: 0
              cursor: pointer
        .confirm-dev-market-btn
          width: 180px
          height: 35px
          line-height: 35px
          margin-top: 50%
          margin-left: 195px
          text-align: center
          font-size: 14px
          cursor: pointer
          &.disabled
            background-color: #393939
            color: #ccc
          &.enabled
            background-color: #2ecc71
            color: #fff
</style>
