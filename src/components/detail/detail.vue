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
    <change-time></change-time>
  </div>
</template>

<script>
import HeaderTab from "../common/HeaderTab";
import openApp from "../common/openApp";
import introduc from './introduc'
import changeTime from "./changeTime";
import axios from "axios";

export default {
  name: "detail",
  components:{HeaderTab,openApp,introduc,changeTime},
  data() {
    return{
      currentMovie:{},
      imgUrl:''
    }
  },
  methods: {
    backPrev() {
      console.log('点击了返回');
      this.$router.go(-1)
    }
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
  mounted() {


  }
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
