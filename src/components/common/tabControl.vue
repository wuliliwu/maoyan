<style>
  /* @import url('../../assets/maoyan/iconfont'); */
  .bottom-tab {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: .48rem;
    border-top: 1px solid #ccc;
    font-size: .16rem;
    background-color: #fff;
   

  }
  .movietab {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    text-align: center;
    margin-top: .02rem;
    font-size: .14rem;
    color: rgb(104, 104, 104);
  }
  .active {
    color: #E54847;
  }
</style>
<template>
    <div class="bottom-tab">
      <div class="movietab">
        <slot name="dianyin">1</slot> 
        <slot name="video">2</slot>   
        <slot name="svideo">3</slot>  
        <slot name="show">4</slot>    
        <slot name="profile">5</slot> 
      </div>
    </div>
</template>
<script>
export default {
   data() {
      return {
        currentIndex:0
      }
   },
   methods: {
     tabClick(i) {
       console.log(i);
     }
   },
   
}
</script>
