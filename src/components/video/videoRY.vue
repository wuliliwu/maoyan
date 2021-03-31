<template>
  <div class="p">
    <div class="video-list">
      <!-- 推荐部分 -->
      <open-app></open-app>
      <header-tab>
        <div slot="h_middle">猫眼电影</div>
        <div slot="h_right">
          <span class="iconfont icon-fenlei" style="font-size: 0.2rem"></span>
        </div>
      </header-tab>
      <!-- 分类 -->

      <!-- 经典电影 -->
      <catagory-tab>
        <div slot="area"><router-link to="/video/videoreying">热映</router-link></div>
        <div slot="m1"><router-link to="/video/videoyugao">预告</router-link></div>
        <div slot="m2">说电影</div>
        <div slot="m3">佳片</div>
        <div slot="m4">热播剧</div>
        <div slot="search">盘点</div>
      </catagory-tab>
      <div class="video-item">
        <video-player
          class="vjs-custom-skin video-player"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions">
        </video-player>
        <div class="video-info">
          <div>
            <img src="//p0.meituan.net/moviemachine/b37cf2d035816a3a079d4db24d72fe01178775.png@80q" alt="">

            <div class="user-nickname">国产电影凌凌漆</div>
          </div>
          <div class="video-praise iconfont">
            <span class="iconfont icon-dianzan"></span>
            653</div>
          <a href="">
            <div class="video-comment iconfont">
              <span class="iconfont icon-pinglun"></span>

              6</div>
          </a>
          <a href="">
            <div class="video-share ">
              <span class="iconfont icon-fenxiang"></span>
            </div>
          </a>
        </div>

      </div>
    </div>
  </div>



</template>

<script>
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import catagoryTab from "../common/catagoryTab";
import HeaderTab from "../common/HeaderTab";
import openApp from "../common/openApp";

export default {
  name: "videoList",
  components: {
    catagoryTab,
    HeaderTab,
    openApp,
  },
  data() {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: "auto",
        language: "zh-CN",
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: "16:9",
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [
          {
            //类型
            type: "video/mp4",
            //url地址
            src:
              "https://vod.pipi.cn/fec9203cvodtransbj1251246104/9a48e0a45285890815420916114/v.f42905.mp4",
          },
        ],
        //你的封面地址
        poster:
          "//p0.meituan.net/moviemachine/b37cf2d035816a3a079d4db24d72fe01178775.png@80q",
        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          //全屏按钮
          fullscreenToggle: true,
        },
      },
    };
  },
  // 组件内守卫
  beforeRouteEnter:(to,from,next)=>{
    console.log('进去了')
    next()
  },

  beforeRouteLeave(to,from,next){
    console.log('离开了')
    next()
  },


  mounted() {

  },
  methods: {},
};
</script>

<style scoped>

.video-list::-webkit-scrollbar {
  display: none;
}
.video-item {
  font-size: .16rem;
  margin-top: 0.1rem;
  width: 100%;
}
.video-info {
  /*line-height: .5rem;*/
  padding: .2rem;
  height: .5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  /*background-color: deeppink;*/
}
.video-info img {
  width: .22rem;
  height: .22rem;
  border-radius: 50%;
}
.video-info span {
  font-size: .2rem;
  color: #666;
}
.user-nickname {
  display: inline-block;
  color: #333;
}
.video-item video-player {
  width: 110%;
  height: 110%;
  height: 2.2rem;
}
.video-js .vjs-big-play-button{
  border-radius: 50%;
}

</style>
