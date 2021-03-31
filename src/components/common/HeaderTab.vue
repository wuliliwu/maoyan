<style>
@import url('../../assets/css/normalize');
.header {
  height: .5rem;
  width: 100%;
  color: #fff;
  display: flex;
  background-color: #e54847;
}
.h_left {
  font-size: .2rem;
  text-align: center;
  line-height: .5rem;
  width: 20%;
 
}
.h_middle {
  width: 80%;
  font-size: .2rem;
  text-align: center;
  line-height: .5rem;
}
.h_right {
  width: 20%;
  font-size: .2rem;
  text-align: center;
  line-height: .5rem;
  
}
</style>
<template>
  <div>
    <div class="header">
      <div class="h_left"><slot name="h_left"></slot></div>
      <div class="h_middle"><slot name="h_middle"></slot></div>
      <div class="h_right"><slot name="h_right"></slot></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
