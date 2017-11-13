<template>
  <div class="btn-group-wrapper">
    <div class="btn-list">
      <div class="btn-row">
        <div class="btn-item">
          <span class="item-icon icon-advertisement"></span>
          <p class="item-title">广告投放</p>
        </div>
        <div class="btn-item" @click="showLoanModa($event, 1)">
          <span class="item-icon icon-long-loan"></span>
          <p class="item-title">长期贷款</p>
        </div>
        <div class="btn-item" @click="showLoanModa($event, 0)">
          <span class="item-icon icon-short-loan"></span>
          <p class="item-title">短期贷款</p>
        </div>
        <div class="btn-item" @click="showOrderRaw">
          <span class="item-icon icon-place-an-order"></span>
          <p class="item-title">下原料订单</p>
        </div>
      </div>
      <div class="btn-row">
        <div class="btn-item" @click="showBuyOrSellModal($event, 'buy')">
          <span class="item-icon icon-emergency-buy"></span>
          <p class="item-title">紧急采购</p>
        </div>
        <div class="btn-item" @click="showProductDev">
          <span class="item-icon icon-product-dev"></span>
          <p class="item-title">产品研发</p>
        </div>
        <div class="btn-item" @click="showMarketDev">
          <span class="item-icon icon-market-dev"></span>
          <p class="item-title">新市场开拓</p>
        </div>
        <div class="btn-item" @click="showBuyOrSellModal($event, 'sell')">
          <span class="item-icon icon-sell-stock"></span>
          <p class="item-title">出售库存</p>
        </div>
      </div>
    </div>
    <loan-modal :loan-type="loanType" :show="loanModalShow" @loan-modal-close="loanModalClose"></loan-modal>
    <order-raw-modal :show="orderRawShow" @order-raw-modal-close="orderRawClose"></order-raw-modal>
    <emergency-buy-or-sell-stock-modal :show="buyOrSellShow" :type="buyOrSellModalType" @buy-or-sell-modal-close="buyOrSellClose"></emergency-buy-or-sell-stock-modal>
    <product-dev-modal :show="productDevShow" @product-dev-modal-close="productDevClose"></product-dev-modal>
    <market-dev-modal :show="marketDevShow" @market-dev-modal-close="marketDevClose"></market-dev-modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import loanModal from 'components/loanModal/loanModal.vue';
  import orderRawModal from 'components/orderRawModal/orderRawModal.vue';
  import emergencyBuyOrSellStockModal from 'components/emergencyBuyOrSellStockModal/emergencyBuyOrSellStockModal.vue';
  import productDevModal from 'components/productDevModal/productDevModal.vue';
  import marketDevModal from 'components/marketDevModal/marketDevModal.vue';

  export default {
    data() {
      return {
        loanType: -1,
        loanModalShow: false,
        orderRawShow: false,
        buyOrSellShow: false,
        buyOrSellModalType: '',
        productDevShow: false,
        marketDevShow: false
      };
    },
    methods: {
      showLoanModa(event, type) {
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
      }
    },
    components: {
      'loan-modal': loanModal,
      'order-raw-modal': orderRawModal,
      'emergency-buy-or-sell-stock-modal': emergencyBuyOrSellStockModal,
      'product-dev-modal': productDevModal,
      'market-dev-modal': marketDevModal
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .btn-group-wrapper
    margin: 100px 0 0 280px
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
