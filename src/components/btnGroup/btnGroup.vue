<template>
  <div class="btn-group-wrapper">
    <div class="btn-list">
      <div class="btn-row">
        <div class="btn-item" v-for="(btn, index) in btnGroupState" v-if="index < 4" @click="showBtnModal($event, index)">
          <span class="item-icon" :class="btn.icon"></span>
          <p class="item-title">{{btn.btnName}}</p>
        </div>
      </div>
      <div class="btn-row">
        <div class="btn-item" v-for="(btn, index) in btnGroupState" v-if="index > 3" @click="showBtnModal($event, index)">
          <span class="item-icon" :class="btn.icon"></span>
          <p class="item-title">{{btn.btnName}}</p>
        </div>
      </div>
    </div>
    <loan-modal :loan-type="loanType" :show="loanModalShow" @loan-modal-close="loanModalClose"></loan-modal>
    <order-raw-modal :show="orderRawShow" @order-raw-modal-close="orderRawClose"></order-raw-modal>
    <emergency-buy-or-sell-stock-modal :show="buyOrSellShow" :type="buyOrSellModalType" @buy-or-sell-modal-close="buyOrSellClose"></emergency-buy-or-sell-stock-modal>
    <product-dev-modal :show="productDevShow" @product-dev-modal-close="productDevClose"></product-dev-modal>
    <market-dev-modal :show="marketDevShow" @market-dev-modal-close="marketDevClose"></market-dev-modal>
    <adv-invest-modal :show="advInvestShow" @adv-invest-close="advInvestClose"></adv-invest-modal>
  </div>
</template>

<script type="text/ecmascript-6">
  // 导入按钮状态模型文件
  import btnGroupState from './btnGroupModel.js';

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
        loanModalShow: false,
        orderRawShow: false,
        buyOrSellShow: false,
        buyOrSellModalType: '',
        productDevShow: false,
        marketDevShow: false,
        advInvestShow: false
      };
    },
    methods: {
      showBtnModal(event, index) {
        // 按钮组点击事件委托
        switch(index) {
          case 0:
            this.showAdvInvestModal();
            break;
          case 1:
            this.showLoanModal(event, 1);
            break;
          case 2:
            this.showLoanModal(event, 0);
            break;
          case 3:
            this.showOrderRaw();
            break;
          case 4:
            this.showBuyOrSellModal(event, 'buy');
            break;
          case 5:
            this.showProductDev();
            break;
          case 6:
            this.showMarketDev();
            break;
          case 7:
            this.showBuyOrSellModal(event, 'sell');
            break;
        }
      },
      showLoanModal(event, type) {
        this.loanType = type;
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
      &:hover
        background-color: #2ecc71
        box-shadow: 0 5px 18px rgba(0,0,0,0.4)
        .item-title,
        .item-icon
          color: #fff
      .item-title
        margin-top: 10px
      .item-icon
        display: inline-block
        margin-top: 30px
        font-size: 30px
</style>
