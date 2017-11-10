<template>
  <div class="loan-modal-wrapper">
    <div class="loan-modal-dialog">
      <h3 class="loan-dialog-title">{{title}}</h3>
      <div class="operate-wrap">
        <div class="operate-name">金额</div>
        <div class="operate-main">
          <span class="decrease-btn icon-decrease"></span>
          <p class="loan-show-board">{{sum}}</p>
          <span class="plus-btn icon-plus"></span>
        </div>
      </div>
      <div class="operate-wrap">
        <div class="operate-name">年份</div>
        <div class="operate-main">
          <span class="decrease-btn icon-decrease"></span>
          <p class="loan-show-board">{{year}}</p>
          <span class="plus-btn icon-plus"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   *  借款弹出层
   *
   *  @params {Boolean} show - 控制组件显示或隐藏
   *  @params {Integer} type - 控制组件是长期贷款还是短期贷款，0：短期贷款  1：长期贷款 根据贷款类型不同发送不同的请求url 及部分组件内容
   *
   * */
  export default {
    data() {
      return {
        sum: 0,
        year: 1,
        title: ''
      };
    },
    props: {
      loanType: {
        type: Number
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"

  .loan-modal-wrapper
    modal-style()
    .loan-modal-dialog
      dialog-style()
      width: 450px
      height: 240px
      margin-top: -120px
      margin-left: -225px
      background-color: #fff
      border-radius: 10px
</style>
