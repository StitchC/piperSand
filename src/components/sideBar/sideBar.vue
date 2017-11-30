<template>
  <div class="side-bar">
    <p class="title">资金</p>
    <h3 class="total-cash">￥10000000</h3>
    <div class="tool-list-wrapper" ref="toolListScroll">
      <ul class="tool-list-content">
        <li class="tool-list-item" @click="lotModalShow">
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
    <lot-map :show="lotModalShowStatus" @close="lotModalClose"></lot-map>
  </div>
</template>

<script type="text/ecmascript-6">
  import lotMap from 'components/lotMap/lotMap.vue';

  export default {
    data() {
      return {
        lotModalShowStatus: false
      };
    },
    components: {
      'lot-map': lotMap
    },
    methods: {
      lotModalClose() {
        this.lotModalShowStatus = false;
      },
      lotModalShow() {
        this.lotModalShowStatus = true;
      }
    }
  };
</script>

<style lang="stylus">
  @import "../../common/css/variable.styl"

  .side-bar
    position: fixed
    top: 55px
    left: 0
    width: 250px
    height: 100%
    background-color: #3a3a3a
    .title
      padding: 10px 0
      text-align: center
      color $theme-color
    .total-cash
      height: 60px
      line-height: 60px
      text-align: center
      color $theme-color
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
          border-bottom: 1px solid #292929
          color: #fff
          cursor: pointer
          &:last-child
            border-bottom: 0
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
            background-color: $theme-color
            border-bottom-color: $theme-color
</style>
