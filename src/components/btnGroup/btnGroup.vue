<template>
  <div class="btn-group-wrapper">
    <div class="btn-list">
      <div class="btn-row">
        <div class="btn-item" v-for="(btn, index) in btnGroupState" v-if="index < 4" @click="showBtnModal($event, index)" :class="{'enabled': btn.status === true, 'disabled': btn.status === false}">
          <span class="item-icon" :class="btn.icon"></span>
          <p class="item-title">{{btn.btnName}}</p>
        </div>
      </div>
      <div class="btn-row">
        <div class="btn-item" v-for="(btn, index) in btnGroupState" v-if="index > 3" @click="showBtnModal($event, index)" :class="{'enabled': btn.status === true, 'disabled': btn.status === false}">
          <span class="item-icon" :class="btn.icon"></span>
          <p class="item-title">{{btn.btnName}}</p>
        </div>
      </div>
      <div class="btn-row">
        <div class="complete-year">
          <span class="icon icon-success"></span>
          结束本年
        </div>
        <div class="complete-season">
          <span class="icon icon-success"></span>
          结束本季
        </div>
        <div class="complete-month">
          <span class="icon icon-success"></span>
          结束本月
        </div>
      </div>
    </div>
    <loan-modal :index="loanBtnIndex" :loan-type="loanType" :show="loanModalShow" @loan-modal-close="loanModalClose" @on-confirm="modalConfirm"></loan-modal>

    <order-raw-modal :index="3" :show="orderRawShow" @order-raw-modal-close="orderRawClose" @on-confirm="modalConfirm"></order-raw-modal>

    <emergency-buy-or-sell-stock-modal :index="buyOrSellBtnIndex" :show="buyOrSellShow" :type="buyOrSellModalType" @buy-or-sell-modal-close="buyOrSellClose" @on-confirm="modalConfirm"></emergency-buy-or-sell-stock-modal>

    <product-dev-modal :index="5" :show="productDevShow" @product-dev-modal-close="productDevClose" @on-confirm="modalConfirm"></product-dev-modal>

    <market-dev-modal :index="6" :show="marketDevShow" @market-dev-modal-close="marketDevClose" @on-confirm="modalConfirm"></market-dev-modal>

    <adv-invest-modal :index="0" :show="advInvestShow" @adv-invest-close="advInvestClose" @on-confirm="modalConfirm"></adv-invest-modal>
  </div>
</template>

<script type="text/ecmascript-6">
  // 导入按钮状态模型文件
  import btnGroupState from './btnGroupModel.js';
  import {setSessionStorage, getSessionStorage} from 'common/js/sessionStorage.js';

  import loanModal from 'components/loanModal/loanModal.vue';
  import orderRawModal from 'components/orderRawModal/orderRawModal.vue';
  import emergencyBuyOrSellStockModal from 'components/emergencyBuyOrSellStockModal/emergencyBuyOrSellStockModal.vue';
  import productDevModal from 'components/productDevModal/productDevModal.vue';
  import marketDevModal from 'components/marketDevModal/marketDevModal.vue';
  import advertismentModal from 'components/advertismentModal/advertismentModal.vue';

  export default {
    data() {
      return {
        btnGroupState: btnGroupState,
        loanType: -1,
        loanBtnIndex: -1,
        buyOrSellBtnIndex: -1,
        loanModalShow: false,
        orderRawShow: false,
        buyOrSellShow: false,
        buyOrSellModalType: '',
        productDevShow: false,
        marketDevShow: false,
        advInvestShow: false
      };
    },
    created() {
      // 页面加载的时候获取 / 设置session 里面保存的信息
      if(!window.sessionStorage.getItem('piperSand')) {
        // 如果浏览器还没有设置session 为其设置一个
        let value = {};
        value.btnStatus = this.btnGroupState;
        setSessionStorage('piperSand', value);
      }else {
        // 如果浏览器已经存在 piperSand 的session 获取它
        let result = getSessionStorage('piperSand');
        this.btnGroupState = result.btnStatus;
      }
    },
    methods: {
      showBtnModal(event, index) {
        // 按钮组点击事件委托
        switch(index) {
          case 0:
            if(this.btnGroupState[index].status === false) {
              return;
            }
            this.showAdvInvestModal();
            break;
          case 1:
            if(this.btnGroupState[index].status === false) {
              return;
            }
            this.showLoanModal(event, 1);
            break;
          case 2:
            if(this.btnGroupState[index].status === false) {
              return;
            }
            this.showLoanModal(event, 0);
            break;
          case 3:
            if(this.btnGroupState[index].status === false) {
              return;
            }
            this.showOrderRaw();
            break;
          case 4:
            if(this.btnGroupState[index].status === false) {
              return;
            }
            this.showBuyOrSellModal(event, 'buy');
            break;
          case 5:
            if(this.btnGroupState[index].status === false) {
              return;
            }
            this.showProductDev();
            break;
          case 6:
            if(this.btnGroupState[index].status === false) {
              return;
            }
            this.showMarketDev();
            break;
          case 7:
            if(this.btnGroupState[index].status === false) {
              return;
            }
            this.showBuyOrSellModal(event, 'sell');
            break;
        }
      },
      modalConfirm(index) {
        this.btnGroupState[index].status = false;
        // 每次发生变更 更新一次sessionStorage 的内容
        let value = {};
        value.btnStatus = this.btnGroupState;
        setSessionStorage('piperSand', value);
      },
      showLoanModal(event, type) {
        this.loanType = type;
        if(type === 0) {
          this.loanBtnIndex = 2;
        }else {
          this.loanBtnIndex = 1;
        }
        this.loanModalShow = true;
      },
      loanModalClose() {
        this.loanModalShow = !this.loanModalShow;
      },
      showOrderRaw() {
        this.orderRawShow = !this.orderRawShow;
      },
      orderRawClose() {
        this.orderRawShow = false;
      },
      showBuyOrSellModal(event, type) {
        this.buyOrSellModalType = type;
        if(type === 'buy') {
          this.buyOrSellBtnIndex = 4;
        }else {
          this.buyOrSellBtnIndex = 7;
        }
        this.buyOrSellShow = !this.buyOrSellShow;
      },
      buyOrSellClose() {
        this.buyOrSellShow = false;
      },
      showProductDev() {
        this.productDevShow = !this.productDevShow;
      },
      productDevClose() {
        this.productDevShow = false;
      },
      showMarketDev() {
        this.marketDevShow = true;
      },
      marketDevClose() {
        this.marketDevShow = !this.marketDevShow;
      },
      showAdvInvestModal() {
        this.advInvestShow = true;
      },
      advInvestClose() {
        this.advInvestShow = false;
      }
    },
    components: {
      'loan-modal': loanModal,
      'order-raw-modal': orderRawModal,
      'emergency-buy-or-sell-stock-modal': emergencyBuyOrSellStockModal,
      'product-dev-modal': productDevModal,
      'market-dev-modal': marketDevModal,
      'adv-invest-modal': advertismentModal
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .btn-group-wrapper
    margin: 100px 0 0 220px
  .btn-row
    margin-top: 30px
    text-align: center
    .complete-year,
    .complete-season,
    .complete-month
      display: inline-block
      vertical-align: middle
      width: 150px
      height: 38px
      line-height: 38px
      border-radius: 5px
      background-color: #cacaca
      margin-left: 15px
      font-size: 14px
      cursor: pointer
    .btn-item
      display: inline-block
      width: 120px
      height: 120px
      background-color: #cacaca
      border-radius: 5px
      margin-left: 15px
      cursor: pointer
      &:fitst-child
        margin-left: 0px
      &.enabled
        &:hover
          background-color: #2ecc71
          box-shadow: 0 5px 18px rgba(0,0,0,0.4)
          .item-title,
          .item-icon
            color: #fff
      &.disabled
        opacity: 0.5
      .item-title
        margin-top: 10px
      .item-icon
        display: inline-block
        margin-top: 30px
        font-size: 30px
</style>
