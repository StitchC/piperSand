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
            <div class="lines"
                 v-for="(line, index) in detail.factoryDetail.lines"
                 :class="{
                  'constructing': line.constructing === true,
                  'newcreate': line.newcreate === true,
                  'producting': line.producting === true
          }"
                 @click="lineClick($event, line, index + 1)" >
              生产线{{index + 1}}
            </div>
          </div>
          <div class="lines-operate" v-show="detail.factoryDetail.lines.length">
            <div class="operate-content">
              <p class="operate-txt">生产线：{{curLinesState.curLineIndex}}</p>
              <p class="operate-txt">账面价值：{{curLinesState.value}}</p>
              <p class="operate-txt">转产状态：{{curLinesState.producingState}}</p>
            </div>
          </div>
        </div>
        <div class="no-lines" v-show="!detail.factoryDetail.lines.length">当前没有生产线</div>
        <div class="buy-lines-btn"
             :class="{'enable': detail.factoryDetail.lines.length < detail.factoryDetail.limit,
             'disable': detail.factoryDetail.lines.length === detail.factoryDetail.limit}">{{statusHint}}</div>
      </div>
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

  export default {
    data() {
      return {
        curLinesState: {}
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
    methods: {
      lineClick(event, obj, lineIndex) {
        obj.curLineIndex = lineIndex;
        this.curLinesState = obj;
      },
      close() {
        this.curLinesState = {};
        this.$emit('factory-detail-close');
      }
    },
    computed: {
      statusHint() {
        if(this.detail.factoryDetail.lines.length < this.detail.factoryDetail.limit) {
          return '增设生产线';
        }else if(!this.detail.factoryDetail.lines.length) {
          return '添加生产线';
        }else {
          return '生产线已满';
        }
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
          display: inline-block
          vertical-align: middle
          width: 70%
          height: 375px
          .lines
            width: 60%
            height: 50px
            line-height: 50px
            margin: 25px auto 0 auto
            cursor: pointer
            &.constructing
              background-color: #BEBEBE
            &.newcreate
              background-color: #d09415
            &.producting
              background-color: #2b9e4f
        .lines-operate
          display: inline-block
          vertical-align: middle
          width: 25%
          height: 375px
          margin-left: 15px
          padding-left: 15px
          border-left: 1px solid #666
          text-align: left
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
