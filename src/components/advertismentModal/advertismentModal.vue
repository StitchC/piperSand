<template>
  <transition name="adv-invest-modal-fade">
    <div class="adv-invest-modal-wrapper" v-show="show">
      <div class="adv-invest-dialog">
        <div class="adv-invest-close-btn-wrap">
          <span class="close-btn" @click="close">✖</span>
        </div>
        <h3 class="adv-invest-title">广告投放</h3>
        <p class="adv-invest-hint">请在单元格中输入投放广告的金额</p>
        <table class="adv-invest-list">
          <thead>
            <tr>
              <th> </th>
              <th>p1产品</th>
              <th>p2产品</th>
              <th>p3产品</th>
              <th>p4产品</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <span class="icon icon-local-market"></span>本地市场
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
          </tr>
          <tr>
            <td>
              <span class="icon icon-district-market"></span>区域市场
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
          </tr>
          <tr>
            <td>
              <span class="icon icon-domestic-market"></span>国内市场
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
          </tr>
          <tr>
            <td>
              <span class="icon icon-asia-market"></span>亚洲市场
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
          </tr>
          <tr>
            <td>
              <span class="icon icon-international-market"></span>国际市场
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
            <td>
              <input type="text">
            </td>
          </tr>
          </tbody>
        </table>
        <div class="adv-invest-confirm-btn">确认投放资金</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  /**
   *
   *  广告投放模态框组件
   *
   *  @params {Boolean} show - 控制组件的显示或隐藏
   *
   *  @event adv-invest-close - 触发父组件关闭模态框
   * */

  export default{
    props: {
      show: {
        type: Boolean
      }
    },
    methods: {
      close() {
        this.$emit('adv-invest-close');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"

  .adv-invest-modal-wrapper
    modal-style()
    fade-animate('adv-invest-modal-fade',0,1)
    .adv-invest-dialog
      dialog-style()
      width: 800px
      height: 420px
      margin-left: -400px
      margin-top: -210px
      padding: 0 0 15px 0
      background-color: #fff
      border-radius: 5px
      .adv-invest-close-btn-wrap
        line-height: 30px
        text-align: right
        .close-btn
          close-btn-style()
      .adv-invest-title
        line-height: 30px
        text-align: center
      .adv-invest-hint
        line-height: 30px
        text-align: center
        font-size: 14px
      .adv-invest-list
        display: block
        width: 90%
        margin: 15px auto 0 auto
        border: 1px solid #ccc
        thead
          tr
            line-height: 30px
            border-bottom: 1px solid #ccc
            th
              text-align: center
              font-size: 14px
              border-left: 1px solid #ccc
              &:first-child
                width: 85px
              &:first-child
                border-left: 0
        tbody
          tr
            line-height: 42px
            border-bottom: 1px solid #ccc
            &:last-child
              border-bottom: 0
            &:nth-child(2n - 1)
              background-color: #e8e8e8
            td
              border-left: 1px solid #ccc
              text-align: center
              font-size: 14px
              &:first-child
                width: 85px
                border-left: 0
              input
                display: inline-block
                width: 65%
                height: 30px
                line-height: 30px
                border-bottom: 1px solid #666
                text-align: center
                background: none
                &:focus
                  outline: none
      .adv-invest-confirm-btn
        width: 120px
        height: 38px
        line-height: 38px
        margin: 20px auto 0 auto
        background-color: #2ecc71
        color: #fff
        text-align: center
        font-size: 14px
        cursor: pointer
</style>
