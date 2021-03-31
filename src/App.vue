<template>
  <div id="app">
<!--    <keep-alive>-->
       <router-view></router-view>
<!--    </keep-alive>-->
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{

    }

  },
};
</script>

<style>
@import url('./assets/css/normalize');
@import url('./assets/css/animate.min');
/*@import url('./assets/maoyan/iconfont');*/
* {
  margin: 0;
  padding: 0;
}
#app{
    height: 100%;
    width: 100%;
  }
.router-link-active {
  color: #ff0000;
}

</style>
