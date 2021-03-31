<template>
<div class="changeTime">
  <ul class="time">
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
  </ul>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "changeTime",
  data() {
    return{

  }
  },
  mounted() {
    var currentDate = new Date()

    axios.get('/ajax/movie?forceUpdate='+currentDate.getTime()).then((res)=>{
      console.log(res)
    })

  }
}
</script>

<style scoped>
.changeTime {
  font-size: .14rem;
  height: .45rem;
  width: 100%;
  overflow-x: scroll;
  border-bottom: 1px solid #e5e5e5;

}
.changeTime .time {
  display: flex;
}
.changeTime::-webkit-scrollbar {
  display: none;
}
.changeTime .time li{
  width:33%;
  flex-shrink: 0;
  height: 100%;
  box-sizing:border-box;
  padding: 0 .1rem;
  text-align: center;
  line-height: .45rem;
}
</style>
