<template>
  <transition name="factory-modal-fade">
    <div class="factory-modal-wrapper" v-show="show">
      <span class="close-btn icon-close" @click="close">✖</span>
      <div class="lot-wrapper">
        <ul class="factory-intro">
          <li class="intro-item small-factory"><i class="icon icon-factory"></i>小型工厂</li>
          <li class="intro-item middle-factory"><i class="icon icon-factory"></i>中型工厂</li>
          <li class="intro-item large-factory"><i class="icon icon-factory"></i>大型工厂</li>
        </ul>
        <div class="lot-item" :data-id="lot.index" v-for="(lot, lotIndex) in lots" v-tooltip="{content: '点击地块购置工厂', classes: 'tooltip-style'}" @click="showBuyFactory($event, lot.index)">
          <span class="lot-title">地块{{lot.index}}</span>
          <div class="factory-model-wrapper">
            <div class="factory-item icon-factory"
                 v-for="(factory, factoryIndex) in lot.factories"
                 :class="{'large': factory.size === 3,
                 'middle': factory.size === 2,
                 'small': factory.size === 1}"
                 @click.stop="enterFactory($event, {
                    lotId: lot.index,
                    factoryDetail: factory
                 })"></div>
          </div>
        </div>
      </div>
      <buy-factory-modal :show="buyFactoryShow" :lot-index="curLotIndex" @buy-factory-modal-close="closeBuyFactoryModal"></buy-factory-modal>
      <factory-modal :show="factoryModalShow" :detail="factoryDetail" @factory-detail-close="closeFactoryDetail"></factory-modal>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import buyFactoryModal from 'components/buyFactoryModal/buyFactoryModal.vue';
  import factoryModal from 'components/factoryModal/factoryModal.vue';

  /**
   * 工厂选项模态框
   * 参数:
   * show:
   *  类型: boolean
   *
   * 事件:
   * close  触发父元素关闭模态框
   *
   *
   * */
  export default {
    data() {
      return {
        lots: [
          {
            index: 1,
            factories: [
              {
                size: 3,
                lines: [
                  {
                    producting: true,
                    constructing: false,
                    newcreate: false,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 15000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: true,
                    newcreate: false,
                    value: 9000,
                    transState: 1,
                    producingState: 1
                  }
                ],
                limit: 5
              },
              {
                size: 2,
                lines: [
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  }
                ],
                limit: 4
              },
              {
                size: 1,
                lines: [
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: true,
                    newcreate: false,
                    value: 8000,
                    transState: 1,
                    producingState: 1
                  }
                ],
                limit: 3
              }
            ]
          },
          {
            index: 2,
            factories: [
              {
                size: 2,
                lines: [
                  {
                    producting: true,
                    constructing: false,
                    newcreate: false,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  }
                ],
                limit: 4
              },
              {
                size: 2,
                lines: [
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  }
                ],
                limit: 4
              },
              {
                size: 1,
                lines: [
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  }
                ],
                limit: 3
              }
            ]
          },
          {
            index: 3,
            factories: [
              {
                size: 2,
                lines: [
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  }
                ],
                limit: 4
              },
              {
                size: 3,
                lines: [
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  }
                ],
                limit: 5
              }
            ]
          },
          {
            index: 4,
            factories: [
              {
                size: 1,
                lines: [
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  }
                ],
                limit: 3
              },
              {
                size: 3,
                lines: [
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  },
                  {
                    producting: false,
                    constructing: false,
                    newcreate: true,
                    value: 10000,
                    transState: 1,
                    producingState: 1
                  }
                ],
                limit: 5
              }
            ]
          },
          {
            index: 5,
            factories: [
              {
                size: 3,
                lines: [],
                limit: 5
              }
            ]
          }
        ],
        buyFactoryShow: false,
        factoryModalShow: false,
        factoryDetail: {},
        curLotIndex: -1
      };
    },
    props: {
      show: {
        type: Boolean
      }
    },
    components: {
      'buy-factory-modal': buyFactoryModal,
      'factory-modal': factoryModal
    },
    methods: {
      close() {
        this.$emit('close');
      },
      showBuyFactory(event, index) {
        this.curLotIndex = index;
        this.buyFactoryShow = true;
      },
      closeBuyFactoryModal() {
        this.buyFactoryShow = false;
      },
      enterFactory(event, obj) {
        this.factoryDetail = obj;
        this.factoryModalShow = true;
        console.log(obj);
      },
      closeFactoryDetail() {
        this.factoryModalShow = false;
        console.log('fk');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"

  .factory-modal-wrapper
    modal-style()
    fade-animate('factory-modal-fade',0,1)
    .close-btn
      position: absolute
      top: 25px
      right: 20px
      color: #fff
      font-size: 30px
      cursor: pointer
      transition: all .5s ease
      &:hover
        transform: rotate(90deg)
    .lot-wrapper
      position: absolute
      top: 70px
      bottom: 30px
      left: 20px
      right: 20px
      padding: 20px 10px
      background-color: #fff
      border-radius: 15px
      text-align: center
      .factory-intro
        position: absolute
        top: 20px
        left: 20px
        .intro-item
          font-size: 15px
          .icon
            font-weight: bold
          &.small-factory > .icon
            color: #2dae55
          &.middle-factory > .icon
            color: #0080a9
          &.large-factory > .icon
            color: #d21a22
      .lot-item
        position: relative
        display: inline-block
        width: 15%
        height: 100%
        margin-right: 10px
        background-color: #cacaca
        cursor: pointer
        transition: all .4s ease
        &:last-child
          margin: auto
        &:hover
          background-color: #2ecc71
          box-shadow: 0 10px 20px rgba(0,0,0,0.4)
          transform: scale(1.05)
        .lot-title
          position: absolute
          top: 50%
          left: 0
          width: 100%
          height: 38px
          line-height: 38px
          margin-top: -19px
          font-size: 20px
          text-align: center

        .factory-model-wrapper
          width: 90%
          margin: 10px auto 0 auto
          text-align: center
          .factory-item
            position: relative
            display: inline-block
            width: 40px
            height: 40px
            line-height: 40px
            margin-left: 10px
            background-color: #fff
            border-radius: 5px
            text-align: center

            &:first-child
              margin: 0
            &.large
              color: #d21a22
            &.middle
              color: #0080a9
            &.small
              color: #2dae55
  .tooltip-style
    padding: 5px
    font-size: 14px
    background-color: #333333
    border-radius: 5px
    .tooltip-inner
      color: #fff
</style>
