<template>
<div class="changeTime">
  <ul class="time">
    <li>今天03月31日</li>
    <li>明天04月01日</li>
    <li>后天04月02日</li>
    <li>今天03月31日</li>
    <li>明天04月01日</li>
    <li>后天04月02日</li>
  </ul>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "changeTime",
  data() {
    return{
      timeList:[]
    }
  },
  props:['currentId'],
  mounted() {
    // 获取id
    // console.log(this.$route.params.id)
    // var id = this.$route.params.id
    // 获取时间
    // var id = this.$parent.currentId
    // console.log(id)
    // var today = this.getTime()
    // var currentDate = new Date()
    // axios.post('/ajax/movie?forceUpdate='+currentDate.getTime(),{
    //     movieId: id,
    //     day: today,
    //     offset: 0,
    //     limit: 20,
    //     districtId: -1,
    //     lineId: -1,
    //     hallType: -1,
    //     brandId: -1,
    //     serviceId: -1,
    //     areaId: -1,
    //     stationId: -1,
    //     item:'',
    //     updateShowDay: true,
    //     reqId: 1617176974032,
    //     cityId: 30,
    //     optimus_uuid: '3C42BFB091CE11EB92D3ABD2B1EFDF1B2F84484AAAE1493AA3EDF6C511473A2E',
    //     optimus_risk_level: 71,
    //     optimus_code: 10,
    //
    // }).then((res)=>{
    //   console.log('获取数据完成')
    //   console.log(res)
    // })

  },
  methods:{
    // getTime() {
    //   var currentDate = new Date()
    //   var year = currentDate.getFullYear()
    //   var month= currentDate.getMonth()+1
    //   var day = (new Date(currentDate.getFullYear(), parseInt(currentDate.getMonth() + 1), 0)).getDate();
    //   var today= String(year)+'-'+String(month>9?month:'0'+month)+'-'+String(day>9?day:'0'+day)
    //   return today
    // }
  }
}
</script>

<style scoped>
.changeTime {
  color: #8e8b8b;
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
