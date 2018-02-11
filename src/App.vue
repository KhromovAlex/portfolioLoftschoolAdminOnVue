<template lang="pug">
  #app
    .header
        add-header 
    .tabs
        tabs
    .content
        .wrap-components
            router-view
</template>

<script>


  export default {
    name: 'app',
    components: {
        addHeader: require('./components/header.vue'),
        tabs: require('./components/tabs.vue'),
        about: require('./components/about.vue')
    }
  }
</script>

<style lang="scss" scoped>
  #app{
    display: flex;
    flex-direction: column;
    min-height:100%;
  }

  .content{
    position: relative;
    flex:1;
    background-image:url("~img/bg.jpg");
    background-repeat:no-repeat;
    background-size: cover;
    padding:50px 30px;



    &:before{
      content: '';
      display: block;
      background-color:  rgba(#fff,.85);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  .wrap-components{
      position: relative;
  }

</style>
