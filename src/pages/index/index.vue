<template>
  <div id="app">
    <div class="side-bar">
      <p class="title">资金</p>
      <h3 class="total-cash">￥10000000</h3>
      <div class="tool-list-wrapper" ref="toolListScroll">
        <ul class="tool-list-content">
          <li class="tool-list-item" @click="factoryModalShow">
            <i class="icon icon-factory"></i>
            <span class="txt">厂房</span>
            <i class="arrow icon-arrow-right"></i>
          </li>
          <li class="tool-list-item">
            <i class="icon icon-sheet"></i>
            <span class="txt">报表</span>
            <i class="arrow icon-arrow-right"></i>
          </li>
          <li class="tool-list-item">
            <i class="icon icon-warehouse"></i>
            <span class="txt">仓库</span>
            <i class="arrow icon-arrow-right"></i>
          </li>
          <li class="tool-list-item">
            <i class="icon icon-logistics"></i>
            <span class="txt">物流</span>
            <i class="arrow icon-arrow-right"></i>
          </li>
          <li class="tool-list-item">
            <i class="icon icon-order"></i>
            <span class="txt">订单</span>
            <i class="arrow icon-arrow-right"></i>
          </li>
          <li class="tool-list-item">
            <i class="icon icon-qualifications"></i>
            <span class="txt">生产资格</span>
            <i class="arrow icon-arrow-right"></i>
          </li>
        </ul>
      </div>
    </div>
    <factory :show="factoryModalShowStatus" @close="factoryModalClose"></factory>
  </div>
</template>

<script type="text/ecmascript-6">
  import factory from 'components/factory/factory.vue';

  export default {
    data() {
      return {
        factoryModalShowStatus: false,
        alertDialogShowStatus: false
      };
    },
    components: {
      factory
    },
    methods: {
      factoryModalClose() {
        this.factoryModalShowStatus = false;
      },
      factoryModalShow() {
        this.factoryModalShowStatus = true;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    padding-left: 280px
    background-color: #f9f9f9
  .side-bar
    position: fixed
    top: 0
    left: 0
    width: 250px
    height: 100%
    background-color: #2C3E50
    .title
      padding: 10px 0
      text-align: center
      color #2ecc71
    .total-cash
      height: 60px
      line-height: 60px
      text-align: center
      color #2ecc71
      font-size: 40px
    .tool-list-wrapper
      position: absolute
      top: 80px
      bottom: 0
      left: 0
      width: 100%
      .tool-list-content
        padding-top: 20px
        .tool-list-item
          display: flex
          justify-content: space-between
          align-items: center
          height: 38px
          line-height: 38px
          padding: 5px 20px
          border-bottom: 1px solid #293749
          color: #fff
          cursor: pointer
          .icon
            flex: 1
            color: #fff
          .txt
            flex: 8
            padding: 20px
            color: #fff
          .arrow
            flex: 1
            color: #fff
          &:hover
            background-color: #2ecc71
            border-bottom-color: #2ecc71
</style>
