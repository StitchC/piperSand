<template>
  <div id="app">
    <v-header></v-header>
    <side-bar></side-bar>
    <btn-group></btn-group>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header.vue';
  import sideBar from 'components/sideBar/sideBar.vue';
  import btnGroup from 'components/btnGroup/btnGroup.vue';

  export default {
    data() {
      return {};
    },
    components: {
      'v-header': header,
      'side-bar': sideBar,
      'btn-group': btnGroup
    },
    methods: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    padding: 100px 30px 0 280px
    background-color: #f9f9f9
</style>
