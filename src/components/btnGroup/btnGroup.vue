<template>
  <div class="btn-group-wrapper">
    <div class="btn-list">
      <div class="btn-row">
        <div class="btn-item">
          <span class="item-icon icon-advertisement"></span>
          <p class="item-title">广告投放</p>
        </div>
        <div class="btn-item">
          <span class="item-icon icon-long-loan"></span>
          <p class="item-title">长期贷款</p>
        </div>
        <div class="btn-item">
          <span class="item-icon icon-short-loan"></span>
          <p class="item-title">短期贷款</p>
        </div>
        <div class="btn-item">
          <span class="item-icon icon-place-an-order"></span>
          <p class="item-title">下原料订单</p>
        </div>
      </div>
      <div class="btn-row">
        <div class="btn-item">
          <span class="item-icon icon-emergency-buy"></span>
          <p class="item-title">紧急采购</p>
        </div>
        <div class="btn-item">
          <span class="item-icon icon-product-dev"></span>
          <p class="item-title">产品研发</p>
        </div>
        <div class="btn-item">
          <span class="item-icon icon-market-dev"></span>
          <p class="item-title">新市场开拓</p>
        </div>
        <div class="btn-item">
          <span class="item-icon icon-sell-stock"></span>
          <p class="item-title">出售库存</p>
        </div>
      </div>
    </div>
    <loan-modal></loan-modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import loanModal from 'components/loanModal/loanModal.vue';
  export default {
    components: {
      'loan-modal': loanModal
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
