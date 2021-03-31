<style>
@import url('../../assets/css/normalize');

.open {
  height: .6rem;
  width: 100%;
  padding: .1rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(211, 208, 208);
}
 .open .open_left {
   width: 0.94rem;
   height: 0.39rem;
  }
  .open_left a{
    display: block;
    width: 100%;
    height: 100%;
    background: url('../../assets/MYlogo.png') no-repeat;
    background-size: 100% 100%;
  }
    .open_right {
      font-size: .16rem;
      line-height: .4rem;
    }
   .open_right span{
    color: hsl(0, 0%, 40%);
    font-size: .14rem;
    font-weight: 800;
  }

  .open_right span:first-child::after{
    content: '|';
    font-size: .14rem;
    margin-left: .1rem;
    color: rgb(204, 176, 176);
    display: inline-block;
  }
  .open_right span:last-child a {
    color: #b37e7e;
    font-size: .18rem;
  }
</style>
<template>
    <div class="open">
      <div class="open_left">
        <a href=""></a>
      </div>
      <div class="open_right">
       <slot name="type1">
         <span>发现最新最热电影</span>
       </slot>
        <span>
          <a href="">打开App </a>
        </span>
      </div>

    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   activated() {
   }
}
</script>
