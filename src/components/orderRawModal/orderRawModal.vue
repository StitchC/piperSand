<template>
  <transition name="order-raw-fade">
    <div class="order-raw-wrapper" v-show="show">
      <div class="order-raw-dialog">
        <div class="order-raw-close-btn-wrap">
          <span class="close-btn" @click="closeModal">✖</span>
        </div>
        <h3 class="order-raw-dialog-title">下原材料订单</h3>
        <table class="raw-liset">
         <thead>
         <tr>
           <th>名称</th>
           <th>数量</th>
         </tr>
         </thead>
          <tbody>
          <tr>
            <td>r1原材料</td>
            <td>
              <input type="text" v-model="r1">
            </td>
          </tr>
          <tr>
            <td>r2原材料</td>
            <td>
              <input type="text" v-model="r2">
            </td>
          </tr>
          <tr>
            <td>r3原材料</td>
            <td>
              <input type="text" v-model="r3">
            </td>
          </tr>
          <tr>
            <td>r4原材料</td>
            <td>
              <input type="text" v-model="r4">
            </td>
          </tr>
          </tbody>
        </table>
        <div class="confirm-order-btn" :class="{'disable': !totalvalid, 'enable': totalvalid}">提交订单</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  /**
   *  下原材料订单模态框
   *
   * @params {Boolean} show - 控制模态框的隐藏或显示
   *
   * @event order-raw-modal-close - 关闭模态框时触发父组件事件
   * */
  export default {
    data() {
      return {
        r1: 0,
        r2: 0,
        r3: 0,
        r4: 0
      };
    },
    props: {
      show: {
        type: Boolean
      }
    },
    methods: {
      initOrder() {
        for(let i = 1; i < 5; i++) {
          this['r' + i] = 0;
        }
      },
      closeModal() {
        this.initOrder();
        this.$emit('order-raw-modal-close');
      }
    },
    watch: {
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
      }
    },
    computed: {
      totalvalid() {
        let total = 0;
        for(let i = 1; i < 5; i++) {
          total += parseInt(this['r' + 1]);
        }
        return total > 0;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"

  .order-raw-wrapper
    modal-style()
    fade-animate('order-raw-fade',0,1)
    .order-raw-dialog
      dialog-style()
      width: 320px
      height: 400px
      margin-top: -200px
      margin-left: -160px
      background-color: #fff
      border-radius: 5px
      overflow: hidden
      .order-raw-close-btn-wrap
        line-height: 35px
        text-align: right
        .close-btn
          close-btn-style()
      .order-raw-dialog-title
        margin-top: 20px
        text-align: center
      .raw-liset
        width: 90%
        margin: 20px auto 0 auto
        border: 1px solid #999999
        tr
          height: 38px
          line-height: 38px
          border-bottom: 1px solid #999
          td
            border-right: 1px solid #999
            text-align: center
            font-size: 14px
            &:last-child
              border-right: 0
            input
              vertical-align: middle
              height: 30px
              line-height: 30px
              text-align: center
              border-bottom: 1px solid #666
              &:focus
                outline: none
          th
            border-right: 1px solid #999
            text-align: center
            font-size: 14px
            &:last-child
              border-right: 0
      .confirm-order-btn
        &.enable
          confirm-btn-enable()
        &.disable
          confitm-btn-disable()
</style>
