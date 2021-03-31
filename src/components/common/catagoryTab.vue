<style>
  @import url('../../assets/maoyan/iconfont');
  .movies-tab {
    height: .48rem;
    display: flex;
    font-size: .18rem;
    justify-content: space-around;
    align-items: center;
    border: 1px solid rgb(238, 237, 237);

  }
  .catatab {
    text-align: center;
    font-size: .16rem;
    font-weight: 800;
    color: #666666;
  }
  .catatab:first-child{
    font-weight: 400;

  }

</style>
<template>
    <div class="movies-tab">
      <div class='catatab'><slot name="area">1</slot></div>
      <div class='catatab'><slot name="m1">2</slot></div>
      <div class='catatab'><slot name="m2">3</slot></div>
      <div class='catatab'><slot name="m3">4</slot></div>
      <div class='catatab'><slot name="m4">4</slot></div>
      <div class='catatab'><slot name="search">5</slot></div>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   
}
</script>
