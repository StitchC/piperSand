<template>
  <transition name="emergency-buy-modal-fade">
    <div class="emergency-buy-wrapper" v-show="show">
      <div class="emergency-buy-dialog">
        <div class="emergency-buy-close-btn-wrapper">
          <span class="close-btn" @click="closeModal">✖</span>
        </div>
        <h3 class="emergency-buy-title">{{title}}</h3>
        <div class="emrgency-but-list-wrapper">
          <div class="buy-raw">
            <h3 class="buy-raw-title">原材料列表</h3>
            <table class="buy-raw-list">
              <thead>
                <tr>
                  <th>名称</th>
                  <th>数量</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>r1原材料</td>
                  <td><input type="text" v-model="r1"></td>
                </tr>
                <tr>
                  <td>r2原材料</td>
                  <td><input type="text" v-model="r2"></td>
                </tr>
                <tr>
                  <td>r3原材料</td>
                  <td><input type="text" v-model="r3"></td>
                </tr>
                <tr>
                  <td>r4原材料</td>
                  <td><input type="text" v-model="r4"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="buy-product">
            <h3 class="buy-product-title">产品列表</h3>
            <table class="buy-raw-list">
              <thead>
                <tr>
                  <th>名称</th>
                  <th>数量</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>p1产品</td>
                  <td><input type="text" v-model="p1"></td>
                </tr>
                <tr>
                  <td>p2产品</td>
                  <td><input type="text" v-model="p2"></td>
                </tr>
                <tr>
                  <td>p3产品</td>
                  <td><input type="text" v-model="p3"></td>
                </tr>
                <tr>
                  <td>p4产品</td>
                  <td><input type="text" v-model="p4"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="confirm-emergency-buy-btn" :class="{'disable': !valid, 'enable': valid}">{{confirmBtnTxt}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  /**
   * 紧急购买原材料及商品模态框
   *
   *
   * @params {boolean} show - 控制组件显示或隐藏
   * @params {String} type - 控制组件的类型 'buy' 表示紧急购入对话框 'sell' 表示出售库存对话框
   *
   * @event emergency-buy-modal-close - 触发父组件关闭模态框
   * */

  export default {
    data() {
      return {
        title: '',
        confirmBtnTxt: '',
        r1: 0,
        r2: 0,
        r3: 0,
        r4: 0,
        p1: 0,
        p2: 0,
        p3: 0,
        p4: 0
      };
    },
    props: {
      show: {
        type: Boolean
      },
      type: {
        type: String
      }
    },
    methods: {
      init() {
        for(let i = 1; i < 5; i++) {
          this['r' + i] = 0;
          this['p' + i] = 0;
        }
      },
      closeModal() {
        this.init();
        this.$emit('buy-or-sell-modal-close');
      }
    },
    watch: {
      type(val) {
        if(val === 'buy') {
          this.title = '紧急购买';
          this.confirmBtnTxt = '确认购买';
        }else {
          this.title = '出售库存';
          this.confirmBtnTxt = '确认出售';
        }
      },
      r1(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置 r1
        this.r1 = parseInt(result);
      },
      r2(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置 r1
        this.r2 = parseInt(result);
      },
      r3(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置 r1
        this.r3 = parseInt(result);
      },
      r4(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置 r1
        this.r4 = parseInt(result);
      },
      p1(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置 r1
        this.p1 = parseInt(result);
      },
      p2(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置 r1
        this.p2 = parseInt(result);
      },
      p3(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置 r1
        this.p3 = parseInt(result);
      },
      p4(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置 r1
        this.p4 = parseInt(result);
      }
    },
    computed: {
      valid() {
         let result = 0;
         for(let i = 1; i < 5; i++) {
           result += (parseInt(this['r' + i]) + parseInt(this['p' + i]));
         }
         return result > 0;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"

  .emergency-buy-wrapper
    modal-style()
    fade-animate('emergency-buy-modal-fade',0,1)
    .emergency-buy-dialog
      dialog-style()
      width: 800px
      height: 380px
      margin-top: -190px
      margin-left: -400px
      background-color: #fff
      border-radius: 5px
      .emergency-buy-close-btn-wrapper
        line-height: 30px
        text-align: right
        .close-btn
          close-btn-style()
      .emergency-buy-title
        line-height: 30px
        text-align: center
      .emrgency-but-list-wrapper
        margin-top: 25px
        text-align: center
        font-size: 0
        table
          width: 90%
          margin: 15px auto 0 auto
          border: 1px solid #999
          font-size: 14px
          thead
            tr
              line-height: 35px
              th
                border-right: 1px solid #999
                &:last-child
                  border-right: 0
          tbody
            tr
              line-height: 35px
              border-top: 1px solid #999
              td
                border-right: 1px solid #999
                &:last-child
                  border-right: 0
                input
                  height: 25px
                  line-height: 25px
                  border-bottom: 1px solid #666
                  text-align: center
                  &:focus
                    outline: none
        .buy-raw
          display: inline-block
          width: 40%
          margin-right: 20px
          .buy-raw-title
            font-size: 14px
            text-align: center
        .buy-product
          display: inline-block
          width: 40%
          .buy-product-title
            font-size: 14px
            text-align: center
        .confirm-emergency-buy-btn
          width: 250px
          height: 35px
          line-height: 35px
          margin: 20px auto 0 auto
          font-size: 14px
          cursor: pointer
          &.disable
            background-color: #393939
            color: #ccc
          &.enable
            background-color: #2ecc71
            color: #fff

</style>
