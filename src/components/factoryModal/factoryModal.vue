<template>
  <transition name="factory-detail-modal-fade">
    <div class="factory-detail-modal-wrapper" v-show="show">
      <div class="factory-detail-dialog">
        <div class="factory-detail-dialog-close-btn-wrap">
          <span class="factory-detail-close-btn" @click="close">✖</span>
        </div>
        <h2 class="factory-dialog-title">工厂详情</h2>
        <div class="factory-lines-wrap">
          <div class="lines-list-wrap">
            <div class="lines-color-hint" v-show="detail.factoryDetail.lines.length">
              <div class="hint constructing">建设中</div>
              <div class="hint producing">生产中</div>
              <div class="hint newcreate">新创建</div>
              <div class="hint free">闲置中</div>
            </div>
            <div class="lines"
                 v-for="(line, index) in detail.factoryDetail.lines"
                 :class="{
                  'constructing': line.constructing === true,
                  'newcreate': line.newcreate === true,
                  'producting': line.producting === true,
                  'free': !line.constructing && !line.newcreate && !line.producting
          }"
                 @click="lineClick($event, line, index + 1)" >
              生产线{{index + 1}}
            </div>
          </div>
          <div class="lines-operate" v-show="detail.factoryDetail.lines.length">
            <h2 class="operate-title">
              <span class="txt">生产线详情</span>
            </h2>
            <transition name="operate-content-slide">
              <div class="operate-content" v-show="curLinesState.curLineIndex">
                <p class="operate-txt">生产线：{{curLinesState.curLineIndex}}</p>
                <p class="operate-txt">账面价值：{{curLinesState.value}}</p>
                <p class="operate-txt">转产状态：{{curLinesState.producingState}}</p>
                <h2 class="operate-title second">
                  <span class="txt">可进行的操作</span>
                </h2>
                  <div class="operate-btn do-product-btn" v-show="doProductOrTransState" key="1">
                    <span class="icon-next-round-produce"></span>
                    开始下一批生产
                  </div>
                  <div class="operate-btn do-trans-product-btn" v-show="doProductOrTransState" key="2" @click="showTransProd">
                    <span class="icon-beltline-trans"></span>
                    生产线转产
                  </div>
                  <div class="operate-btn continue-construct" v-show="continueConstructBtnStatus" key="3">
                    <span class="icon-continue-construct"></span>
                    继续建设
                  </div>
                  <div class="operate-btn do-sell-line-btn" v-show="doSellLineBtnStatus" key="4">
                    <span class="icon-sell"></span>
                    变卖生产线
                  </div>
              </div>
            </transition>
            <div class="no-selected-line" v-show="!curLinesState.curLineIndex">请点击右侧生产线查看详情</div>
          </div>
        </div>
        <div class="no-lines" v-show="!detail.factoryDetail.lines.length">当前没有生产线</div>
        <div class="buy-lines-btn"
             :class="{'enable': detail.factoryDetail.lines.length < detail.factoryDetail.limit}"
             v-show="detail.factoryDetail.lines.length < detail.factoryDetail.limit"
             @click="showBuyLineModal">{{statusHint}}</div>
      </div>
      <buy-line-modal :show="buyLineModalShow" @buy-line-modal-close="closeBuyLineModal"></buy-line-modal>
      <trans-prod-modal :show="transProdShow" @close-trans-prod="transProdClose"></trans-prod-modal>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  /**
   * 厂房细节模态框
   *
   * @param {Boolean} show - 控制模态框显示或隐藏
   *
   * @param {Object} detail - 厂房的相关信息包括：所在地块 - lotId 厂房的详情 - factoryDetail
   *
   * */

  import buyLineModal from 'components/buyLineModal/buyLineModal.vue';
  import transProdModal from 'components/transProdModal/transProdModal.vue';

  export default {
    data() {
      return {
        curLinesState: {},
        buyLineModalShow: false,
        transProdShow: false
      };
    },
    props: {
      show: {
        type: Boolean
      },
      detail: {
        type: Object
      }
    },
    components: {
      'buy-line-modal': buyLineModal,
      'trans-prod-modal': transProdModal
    },
    computed: {
      doProductOrTransState() {
        return this.curLinesState.value && !this.curLinesState.producting && !this.curLinesState.constructing && !this.curLinesState.newcreate;
      },
      continueConstructBtnStatus() {
        return this.curLinesState.value && this.curLinesState.constructing;
      },
      doSellLineBtnStatus() {
        return this.curLinesState.value && !this.curLinesState.producting && !this.curLinesState.constructing && !this.curLinesState.newcreate;
      },
      statusHint() {
        if(this.detail.factoryDetail.lines.length < this.detail.factoryDetail.limit) {
          return '增设生产线';
        }else if(!this.detail.factoryDetail.lines.length) {
          return '添加生产线';
        }
      }
    },
    methods: {
      init() {
        this.curLinesState = {};
      },
      lineClick(event, obj, lineIndex) {
        obj.curLineIndex = lineIndex;
        this.curLinesState = obj;
        console.log(this.curLinesState);
      },
      close() {
        this.init();
        this.$emit('factory-detail-close');
      },
      closeBuyLineModal() {
        this.buyLineModalShow = false;
      },
      showBuyLineModal() {
        this.buyLineModalShow = true;
      },
      transProdClose() {
        this.transProdShow = false;
      },
      showTransProd() {
        this.transProdShow = true;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"

  .factory-detail-modal-wrapper
    modal-style()
    fade-animate('factory-detail-modal-fade',0,1)
    .factory-detail-dialog
      dialog-style()
      width: 800px
      height: 560px
      margin-top: -280px
      margin-left: -400px
      background-color: #fff
      border-radius: 10px
      overflow: hidden
      .factory-detail-dialog-close-btn-wrap
        text-align: right
        .factory-detail-close-btn
          close-btn-style()
          color: #999
      .factory-dialog-title
        font-size: 15px
        text-align: center
      .factory-lines-wrap
        margin-top: 25px
        text-align: center
        .lines-list-wrap
          position: relative
          display: inline-block
          vertical-align: middle
          width: 70%
          height: 375px
          .lines-color-hint
            position: absolute
            top: 25px
            left: 18px
            .hint
              font-size: 12px
              &:before
                content: ''
                display: inline-block
                vertical-align: middle
                width: 15px
                height: 15px
              &.constructing:before
                background-color: #358ea6
              &.producing:before
                background-color: #e34030
              &.newcreate:before
                background-color: #2b9e4f
              &.free:before
                background-color: #c2c2c2
          .lines
            width: 60%
            height: 50px
            line-height: 50px
            margin: 25px auto 0 auto
            cursor: pointer
            &.constructing
              background-color: #69b2c1
            &.newcreate
              background-color: #2b9e4f
            &.producting
              background-color: #c1382a
            &.free
              background-color: #c2c2c2
        .lines-operate
          position: relative
          display: inline-block
          vertical-align: middle
          width: 25%
          height: 375px
          margin-left: 15px
          padding-left: 15px
          border-left: 1px solid #7e8c8d
          text-align: left
          .no-selected-line
            position: absolute
            top: 50%
            left: 0
            width: 100%
            height: 38px
            line-height: 38px
            margin-top: -19px
            font-size: 20px
            text-align: center
            color: #ccc
          .operate-title
            width: 120px
            height: 1px
            line-height: 1px
            margin: 10px auto 0 auto
            border-top: 1px solid #666
            text-align: center
            &.second
              width: 130px
              margin-top: 30px
            .txt
              vertical-align: top
              padding: 0 15px
              background-color: #fff
              font-size: 14px
          .operate-content
            &.operate-content-slide-enter
              opacity: 0
              transform: translate3d(-15px, 0, 0)
            &.operate-content-slide-enter-active
              transition: all .4s ease
            &.operate-content-slide-enter-to
              opacity: 1
              transform: translate3d(0,0,0)
            .operate-txt
              margin-top: 15px
              font-size: 14px
            .operate-btn
              width: 150px
              height: 38px
              line-height: 38px
              margin: 15px auto 0 auto
              text-align: center
              font-size: 14px
              cursor: pointer
              &.do-product-btn
                background-color: #2ecc71
              &.do-trans-product-btn
                background-color: #358ea6
              &.continue-construct
                background-color: #9a9a9a
              &.do-sell-line-btn
                background-color: #e34030
      .buy-lines-btn
        width: 180px
        height: 38px
        line-height: 38px
        margin: 25px auto 0 auto
        text-align: center
        font-size: 14px
        cursor: pointer
        &.enable
          background-color: #2ab361
          color: #fff
        &.disable
          background-color: #a6a6a6
      .no-lines
        position: absolute
        top: 50%
        left: 0
        width: 100%
        height: 30px
        line-height: 30px
        margin-top: -15px
        text-align: center
        font-size: 28px
        color: #666
</style>
