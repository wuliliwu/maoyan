<template>
    <div class="introduc" :style="
     {backgroundImage:'url('+imgUrl+')'}">
      <div class="poster">
<!--        {{detailData.img}}-->
        <img :src="imgUrl" alt="">
      </div>
      <div class="content">
        <div class="title">{{detailData.nm}}</div>
        <div class="title-en-name">{{detailData.enm}}</div>
        <div class="score"><span>{{detailData.sc}}</span>  分</div>
        <div class="want"><span>{{detailData.wish}}</span>  想看</div>
        <div class="type">{{detailData.cat}}</div>
        <div class="area-time">{{detailData.src}} / {{detailData.dur}} 分钟</div>
        <div class="showtime">{{detailData.pubDesc}}</div>
      </div>
      <div class="arrow-g">
        <span></span>
      </div>
    </div>
</template>

<script>
export default {
  name: "introduc",
  data() {
    return{
    }
  },
  props:{
    detailData:{
      type:Object,
      default(){
        return {}
      }
    },
    imgUrl:{
      type:String
    }
  },

}
</script>

<style scoped>
.introduc {
  position: relative;
  display: flex;
  justify-content: left;
  font-size: .14rem;
  height: 1.88rem;
  width: 100%;
  box-sizing: border-box;
  padding: .15rem;
  overflow: hidden;
  background-size: cover;
  box-sizing: border-box;
}
.introduc::after{
  content: "";
  width:100%;
  height:100%;
  position: absolute;
  left:0;
  top:0;
  background: inherit;
  filter: blur(5px);
  transform: scale(1.5);
  z-index: 2;
}
.poster {
  position: relative;
  z-index: 1000;
}
.content {
  color: #e9e9e9;
  padding-top: .05rem;
  font-size: .12rem;
  line-height: .22rem;
  position: relative;
  z-index: 999;
  margin-left: .2rem;
}
.content .title {
  font-size: .22rem;
  color: #ffffff;
}
.content span {
  color: orange;
  font-size: .14rem;

}
.arrow-g span {
  position: absolute;
  right: 0.3rem;
  top: 40%;
  color: #b0afaf;
  border: 2px solid #eeeeee;
  display: block;
  width: .15rem;
  height: .15rem;
  z-index: 99;
  transform: rotate(-45deg);
  border-top: none;
  border-left: none;
}
</style>
