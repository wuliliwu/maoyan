<template>
  <div class="detail">
    <header-tab>
      <div slot="h_left" @click="backPrev"> <span class="arrow"> </span> </div>
      <div slot="h_middle">{{currentMovie.nm}}</div>
      <div slot="h_right"><span class="iconfont icon-fenlei" style="font-size:.2rem;"></span></div>
    </header-tab>
    <open-app>
      <span name="type1">19.9元购票</span>
    </open-app>
      <introduc :detailData="currentMovie" :imgUrl="imgUrl"></introduc>
    <change-time :current-id="currentId"></change-time>
    <detail-city></detail-city>
  </div>
</template>

<script>
import HeaderTab from "../common/HeaderTab";
import openApp from "../common/openApp";
import introduc from './introduc'
import changeTime from "./changeTime";
import detailCity from "./detailCity";
import axios from "axios";

export default {
  name: "detail",
  components:{HeaderTab,openApp,introduc,changeTime,detailCity},
  data() {
    return{
      currentMovie:{},
      imgUrl:'',
      currentId:0
    }
  },
  methods: {
    backPrev() {
      this.$router.go(-1)
    },
    getTime() {
      var currentDate = new Date()
      var year = currentDate.getFullYear()
      var month= currentDate.getMonth()+1
      var day = (new Date(currentDate.getFullYear(), parseInt(currentDate.getMonth() + 1), 0)).getDate();
      var today= String(year)+'-'+String(month>9?month:'0'+month)+'-'+String(day>9?day:'0'+day)
      return today
    },
    getData() {
      this.$nextTick(() =>{
        var id = this.$route.params.id
        console.log(id)
        var today = this.getTime()
        var currentDate = new Date()
        axios.post('/ajax/movie?forceUpdate='+currentDate.getTime(),{
          movieId: id,
          day: today,
          offset: 0,
          limit: 20,
          districtId: -1,
          lineId: -1,
          hallType: -1,
          brandId: -1,
          serviceId: -1,
          areaId: -1,
          stationId: -1,
          item:'',
          updateShowDay: true,
          reqId: 1617176974032,
          cityId: 30,
          optimus_uuid: '3C42BFB091CE11EB92D3ABD2B1EFDF1B2F84484AAAE1493AA3EDF6C511473A2E',
          optimus_risk_level: 71,
          optimus_code: 10,

        }).then((res)=>{
          console.log('获取数据完成')
          console.log(res)
        })
      })

    }
  },
  created() {
    console.log('进来了')
  },
  mounted() {
    console.log('进入了mouted')
    this.getData()
  },


  beforeRouteEnter(to,from,next){
    next(vm => {
      axios.get('/ajax/detailmovie?movieId='+vm.$route.params.id+'&optimus_uuid=2FD5D9C08E3F11EBBF0ABF7788DA83013D2C2C4888284FB4AA7' +
        '304AD7593198B&optimus_risk_level=71&optimus_code=10').then((res)=>{
        vm.currentMovie = res.data.detailMovie
        vm.imgUrl = res.data.detailMovie.img.replace('w.h','110.150')

        })
    })
  },

}
</script>

<style scoped>
.arrow {
  display:inline-block;
  width: 12px;
  height: 12px;
  transform: rotate(-45deg);
  border: 2px solid #fff;
  border-right:none;
  border-bottom:none;

}
.detail{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.detail::-webkit-scrollbar {
  display: none;
}
</style>
