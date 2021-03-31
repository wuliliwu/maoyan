<style scoped>
.video {
  width: 100%;
  overflow-y: scroll;
  height: calc(100% - 0.5rem);
  /*background-color: pink;*/
}
.video::-webkit-scrollbar {
  display: none;
}
</style>
<template>
    <div class="video">
<!--       <video-r-y/>-->
<!--      <keep-alive>-->
        <router-view></router-view>
<!--      </keep-alive>-->

      <tab-control>
      <div slot="dianyin">
       <router-link to='/home'>
        <span class="iconfont icon-dianying" style="font-size: .24rem;"></span>
        <div>电影/影院</div>
        </router-link>
      </div>
      <div slot="video">
       <router-link to='/video'>
         <span class="iconfont icon-shipin1" style="font-size: .24rem;"></span><div>视频</div>
          </router-link>
      </div>
      <div slot="svideo">
       <router-link to='/svideo'>
         <span class="iconfont icon-shipin" style="font-size: .24rem;"></span><div>小视频</div>
       </router-link>

      </div>
      <div slot="show">
       <router-link to='/show'>
         <span class="iconfont icon-piaoquan" style="font-size: .24rem;"></span><div>演出</div>
       </router-link>
      </div>
      <div slot="profile">
        <router-link to='/profile'>
        <span class="iconfont icon-tubiaolunkuo-" style="font-size: .24rem;"></span>
        <div>我的</div>
        </router-link>
      </div>
    </tab-control>
    </div>
</template>
<script>
import tabControl from '../common/tabControl'
import videoRY from './videoRY'
export default {
   data() {
      return {
      }
   },
   components:{
      tabControl,
      videoRY

   },
  mounted() {

  },
  activated() {
     this.$router.push({path:'/video/videoreying'})
   }
}
</script>
