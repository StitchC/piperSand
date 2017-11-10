<template>
  <div id="app">
    <v-header></v-header>
    <side-bar></side-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header.vue';
  import sideBar from 'components/sideBar/sideBar.vue';

  export default {
    data() {
      return {};
    },
    components: {
      'v-header': header,
      'side-bar': sideBar
    },
    methods: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    padding-left: 280px
    background-color: #f9f9f9
</style>
