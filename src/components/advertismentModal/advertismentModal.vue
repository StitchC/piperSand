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
              <input type="text" v-model="L1">
            </td>
            <td>
              <input type="text" v-model="L2">
            </td>
            <td>
              <input type="text" v-model="L3">
            </td>
            <td>
              <input type="text" v-model="L4">
            </td>
          </tr>
          <tr>
            <td>
              <span class="icon icon-district-market"></span>区域市场
            </td>
            <td>
              <input type="text" v-model="di1">
            </td>
            <td>
              <input type="text" v-model="di2">
            </td>
            <td>
              <input type="text" v-model="di3">
            </td>
            <td>
              <input type="text" v-model="di4">
            </td>
          </tr>
          <tr>
            <td>
              <span class="icon icon-domestic-market"></span>国内市场
            </td>
            <td>
              <input type="text" v-model="do1">
            </td>
            <td>
              <input type="text" v-model="do2">
            </td>
            <td>
              <input type="text" v-model="do3">
            </td>
            <td>
              <input type="text" v-model="do4">
            </td>
          </tr>
          <tr>
            <td>
              <span class="icon icon-asia-market"></span>亚洲市场
            </td>
            <td>
              <input type="text" v-model="as1">
            </td>
            <td>
              <input type="text" v-model="as2">
            </td>
            <td>
              <input type="text" v-model="as3">
            </td>
            <td>
              <input type="text" v-model="as4">
            </td>
          </tr>
          <tr>
            <td>
              <span class="icon icon-international-market"></span>国际市场
            </td>
            <td>
              <input type="text" v-model="inte1">
            </td>
            <td>
              <input type="text" v-model="inte2">
            </td>
            <td>
              <input type="text" v-model="inte3">
            </td>
            <td>
              <input type="text" v-model="inte4">
            </td>
          </tr>
          </tbody>
        </table>
        <div class="adv-invest-confirm-btn" @click="confirm">确认投放资金</div>
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
   *  @params {Integer} index - 表示这个模态框属于哪一个按钮 当点击确认的时候触发事件将对应按钮设置为disabled
   *
   *  @event on-confirm - 请求成功后触发父组件事件
   *  @event adv-invest-close - 触发父组件关闭模态框
   * */

  export default{
    data() {
      return {
        L1: 0,
        L2: 0,
        L3: 0,
        L4: 0,
        di1: 0,
        di2: 0,
        di3: 0,
        di4: 0,
        do1: 0,
        do2: 0,
        do3: 0,
        do4: 0,
        as1: 0,
        as2: 0,
        as3: 0,
        as4: 0,
        inte1: 0,
        inte2: 0,
        inte3: 0,
        inte4: 0,
        dataList: this.getAdValue
      };
    },
    props: {
      show: {
        type: Boolean
      },
      index: {
        type: Number
      }
    },
    created() {
      let resultObj = {};
      let local = [];
      let dis = [];
      let dome = [];
      let asia = [];
      let inte = [];
      for(let i = 1; i < 5; i++) {
        local.push(this['L' + i]);
        dis.push(this['di' + i]);
        dome.push(this['do' + i]);
        asia.push(this['as' + i]);
        inte.push(this['inte' + i]);
      }

      resultObj.local = local;
      resultObj.district = dis;
      resultObj.domestic = dome;
      resultObj.asia = asia;
      resultObj.international = inte;
    },
    methods: {
      getAdValue() {
        let resultObj = {};
        let local = [];
        let dis = [];
        let dome = [];
        let asia = [];
        let inte = [];
        for(let i = 1; i < 5; i++) {
          local.push(this['L' + i]);
          dis.push(this['di' + i]);
          dome.push(this['do' + i]);
          asia.push(this['as' + i]);
          inte.push(this['inte' + i]);
        }

        resultObj.local = local;
        resultObj.district = dis;
        resultObj.domestic = dome;
        resultObj.asia = asia;
        resultObj.international = inte;

        return resultObj;
      },
      close() {
        this.$emit('adv-invest-close');
      },
      confirm() {
        this.$emit('on-confirm', this.index);
        this.$emit('adv-invest-close');
      }
    },
    watch: {
      L1(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.L1 = parseInt(result);
        // console.log(this.dataList);
      },
      L2(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.L2 = parseInt(result);
      },
      L3(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.L3 = parseInt(result);
      },
      L4(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.L4 = parseInt(result);
      },
      di1(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.di1 = parseInt(result);
      },
      di2(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.di2 = parseInt(result);
      },
      di3(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.di3 = parseInt(result);
      },
      di4(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.di4 = parseInt(result);
      },
      do1(val) {
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
        this.do1 = parseInt(result);
      },
      do2(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.do2 = parseInt(result);
      },
      do3(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.do3 = parseInt(result);
      },
      do4(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.do4 = parseInt(result);
      },
      as1(val) {
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
        this.as1 = parseInt(result);
      },
      as2(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.as2 = parseInt(result);
      },
      as3(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.as3 = parseInt(result);
      },
      as4(val) {
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
        this.as4 = parseInt(result);
      },
      inte1(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.inte1 = parseInt(result);
      },
      inte2(val) {
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
        this.inte2 = parseInt(result);
      },
      inte3(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.inte3 = parseInt(result);
      },
      inte4(val) {
        let result = val + '';

        // 如果改变的值中有非数字字符 替换掉
        if(/\D/g.test(result)) {
          result = result.replace(/\D/g, '');
        }

        // 如果改变的值为空 重设为0
        if(result === '') {
          result = 0;
        }

        // 如果以上判断都不符合直接设置
        this.inte4 = parseInt(result);
        console.log(this.getAdValue);
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
