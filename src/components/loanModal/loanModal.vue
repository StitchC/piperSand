<template>
  <transition name="loan-modal-fade">
    <div class="loan-modal-wrapper" v-show="show">
      <div class="loan-modal-dialog">
        <div class="loan-modal-close-btn-wrap">
          <span class="close-btn" @click="closeLoanModal">✖</span>
        </div>
        <h3 class="loan-dialog-title">{{dialogTitle}}</h3>
        <div class="operate-wrap">
          <div class="operate-name">金额</div>
          <div class="operate-main">
            <span class="decrease-btn icon-decrease" @click="decMoney"></span>
            <input class="loan-show-board" type="text" v-model="sum">
            <span class="plus-btn icon-plus" @click="plusMoney"></span>
          </div>
        </div>
        <div class="operate-wrap">
          <div class="operate-name">年期</div>
          <div class="operate-main">
            <span class="decrease-btn icon-decrease" @click="decYear"></span>
            <p class="loan-year-show">{{year}}</p>
            <span class="plus-btn icon-plus" @click="plusYear"></span>
          </div>
        </div>
        <div class="confirm-loan-btn">确认借款</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  /**
   *  借款弹出层
   *
   *  @params {Boolean} show - 控制组件显示或隐藏
   *  @params {Integer} type - 控制组件是长期贷款还是短期贷款，0：短期贷款  1：长期贷款 根据贷款类型不同发送不同的请求url 及部分组件内容
   *
   *  @event loan-modal-close - 点击模态框关闭按钮后触发事件通知父组件
   * */
  export default {
    data() {
      return {
        sum: 0,
        year: 1,
        dialogTitle: ''
      };
    },
    props: {
      loanType: {
        type: Number
      },
      show: {
        type: Boolean
      }
    },
    methods: {
      initDialog() {
        this.sum = 0;
        this.year = 1;
      },
      decMoney() {
        if(this.sum < 0) {
          return;
        }

        this.sum = parseInt(this.sum) - 500;
      },
      decYear() {
        if(this.year === 1) {
          return;
        }
        this.year = parseInt(this.year) - 1;
      },
      plusMoney() {
        this.sum = parseInt(this.sum) + 500;
      },
      plusYear() {
        if(this.year >= 6) {
          return;
        }

        this.year = parseInt(this.year) + 1;
      },
      closeLoanModal() {
        // 关闭模态框的时候初始化对话框里面的内容 再触发事件
        this.initDialog();
        this.$emit('loan-modal-close');
      }
    },
    watch: {
      loanType(val) {
        if (val === 0) {
          this.dialogTitle = '短期贷款';
        }else {
          this.dialogTitle = '长期贷款';
        }
      },
      sum(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置 sum
        this.sum = parseInt(result);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"

  .loan-modal-wrapper
    modal-style()
    fade-animate('loan-modal-fade',0,1)
    .loan-modal-dialog
      dialog-style()
      width: 450px
      height: 240px
      margin-top: -120px
      margin-left: -225px
      background-color: #fff
      border-radius: 10px
      overflow: hidden
      .loan-modal-close-btn-wrap
        text-align: right
        .close-btn
          close-btn-style()
      .loan-dialog-title
        line-height: 38px
        text-align: center
        font-size: 15px
      .operate-wrap
        height: 40px
        line-height: 40px
        margin-bottom: 15px
        font-size: 0
        .operate-name
          display: inline-block
          width: 80px
          line-height: 40px
          font-size: 14px
          text-align: center
        .operate-main
          display: inline-block
          line-height: 40px
          padding-left: 20px
          font-size: 14px
          span
            display: inline-block
            vertical-align: middle
            width: 20px
            height: 20px
            line-height: 20px
            border: 1px solid #555555
            border-radius: 5px
            text-align: center
            cursor: pointer
          input
            display: inline-block
            vertical-align: middle
            width: 180px
            height: 30px
            line-height: 30px
            border: 1px solid #555555
            border-radius: 5px
            text-align: center
            &:focus
              outline: none
          .loan-year-show
            display: inline-block
            vertical-align: middle
            width: 180px
            height: 30px
            line-height: 30px
            text-align: center
      .confirm-loan-btn
        confirm-btn-enable()
</style>
