<style>
/* @import url('../../assets/css/normalize'); */
html,
body {
  width: 100%;
  height: 100%;
}

.homecnt {
   height: calc(100% - .45rem);
   width: 100%;
   overflow-y: scroll;
}
.homecnt::-webkit-scrollbar {
  display: none;
}
.router-link-active {
  color: #ff0000;
}

</style>
<template>
       <div class="homecnt">
      <header-tab>
        <div slot="h_middle">猫眼电影</div>
        <div slot="h_right"><span class="iconfont icon-fenlei" style="font-size:.2rem;"></span></div>
    </header-tab>
         <!-- 推荐部分 -->
     <open-app></open-app>
        <!-- 经典电影 -->
    <catagory-tab>
       <div slot="area">深圳<span class="iconfont icon-sanjiaoxing"></span></div>
        <div slot="m1">  <router-link to="/home/reying">热映</router-link></div>


       <div slot="m2">
         <router-link to="/home/yingyuan">影院</router-link>
       </div>
       <div slot="m3">
         <router-link to="/home/daiying">待映</router-link>
       </div>
       <div slot="m4">
         <router-link to="/home/jindian">经典电影</router-link>
       </div>
       <div slot="search"><span class="iconfont icon-fangdajing" style="font-size:24px;color:red"></span></div>
    </catagory-tab>
    <!-- 电影列表 -->
         <keep-alive>
           <router-view></router-view>
         </keep-alive>
<!--    <movies-list></movies-list>-->
    <!-- 底部导航 -->
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
import HeaderTab from '../common/HeaderTab'
import openApp from '../common/openApp'
import tabControl from './tabControl'
import catagoryTab from '../common/catagoryTab'
import moviesList from './moviesList'
import bottom from "../common/bottom";

export default {
   data() {
      return {
      }
   },
   components: {
      HeaderTab,
      openApp,
      catagoryTab,
      tabControl,
      moviesList,
      bottom
    },
   activated() {
     this.$router.push({ path: '/home/reying' })

   }
}
</script>
