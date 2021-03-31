<style>
/* @import url("../../assets/css/normalize"); */
html,
body {
  width: 100%;
  height: 100%;
}

.movieList {
  height: calc(100% - 1.6rem);
  padding: 0.1rem;
  box-sizing: border-box;
  overflow-y: auto;
  width: 100%;

}

.movieList::-webkit-scrollbar {
  display: none;
}

.hotmovies {
  height: 2rem;
  font-size: 0.16rem;
  box-sizing: border-box;

}

.hotlist {
  display: flex;
  margin-top: 0.1rem;
  overflow-x: auto;
  border-bottom: .05rem solid #F5F5F5;
}

.hotlist::-webkit-scrollbar {
  display: none;
}

.hotlist li {
  position: relative;
  float: left;
  margin-right: 0.1rem;
  flex-shrink: 0;
  display: block;
  width: 0.85rem;
  height: 1.4rem;
  /* border: 1px solid #ccc; */
}

.hotlist img {
  width: 0.85rem;
  height: 1.15rem;
}

.hotlist .score, .wish-num {
  display: block;
  position: absolute;
  margin-bottom: 0.28rem;
  font-size: 0.12rem;
  font-weight: 800;
  padding: 0.02rem;
  color: yellow;
  background-color: rgba(31, 31, 31, 0.438);
  bottom: 0;
}

.line-ellipsis {
  text-align: center;
  margin-top: 0.05rem;
  height: 0.18rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.13rem;
  overflow: hidden;
}
</style>
<template>
  <div class="movieList" ref="cpnlist">
    <div class="hotmovies">
      <div>最受好评电影</div>
      <div class="hotlist">
        <ul class="hotlist">
          <li>
            <a href="">
              <img
                src=https://p0.meituan.net/170.230/movie/48774506dc0e68805bc25d2cd087d1024316392.jpg
                onerror="this.style.visibility='hidden'">
              <span class="wish-bg"></span>
              <span class="score"
              >观众评分&nbsp;&nbsp;<span class="rated-score">9.5</span></span
              >
            </a>
            <h5 class="name line-ellipsis">你好,李焕银</h5>
          </li>
          <li>
            <a href="">
              <img
                src=https://p1.meituan.net/170.230/movie/ece9ff81e6f0af2c859aa151e42a33312706648.jpg
                onerror="this.style.visibility='hidden'">
              <span class="wish-bg"></span>
              <span class="score"
              >观众评分&nbsp;&nbsp;<span class="rated-score">8.8</span></span
              >
            </a>
            <h5 class="name line-ellipsis">唐人街探案</h5>
          </li>
          <li>
            <a href="">
              <img
                src=https://p0.meituan.net/170.230/moviemachine/6766681dc599e1964e9acbf86391207377187.jpg
                onerror="this.style.visibility='hidden'">
              <span class="wish-bg"></span>
              <span class="score"
              >观众评分&nbsp;&nbsp;<span class="rated-score">8.7</span></span
              >
            </a>
            <h5 class="name line-ellipsis">新神榜：哪吒重生</h5>
          </li>
          <li>
            <a href="">
              <img
                src=https://p0.meituan.net/170.230/movie/9ef2f7d8d6f11c55723d7be5fa77218d1022103.jpg
                onerror="this.style.visibility='hidden'">
              <span class="wish-bg"></span>
              <span class="score"
              >观众评分&nbsp;&nbsp;<span class="rated-score">8.6</span></span
              >
            </a>
            <h5 class="name line-ellipsis">刺杀小说家</h5>
          </li>
          <li>
            <a href="">
              <img
                src=https://p1.meituan.net/170.230/moviemachine/f9bca652f009514b35433ef1da527d621561265.jpg
                onerror="this.style.visibility='hidden'">
              <span class="wish-bg"></span>
              <span class="score"
              >观众评分&nbsp;&nbsp;<span class="rated-score">3.2</span></span
              >
            </a>
            <h5 class="name line-ellipsis">日不落酒店</h5>
          </li>
          <li>
            <a href="">
              <img src=https://p0.meituan.net/170.230/moviemachine/58732574fbc2f64c04c3e825c058da7f16742753.jpg
                   onerror="this.style.visibility='hidden'">
              <span class="wish-bg"></span>
              <span class="wish"><span class="wish-num">505342 人想看</span></span>
            </a>
            <h5 class="name line-ellipsis">哥斯拉大战金刚</h5>
          </li>
          <li>
            <a href="">
              <img
                src=https://p0.meituan.net/170.230/movie/48774506dc0e68805bc25d2cd087d1024316392.jpg
                onerror="this.style.visibility='hidden'">
              <span class="wish-bg"></span>
              <span class="score"
              >观众评分&nbsp;&nbsp;<span class="rated-score">9.5</span></span
              >
            </a>
            <h5 class="name line-ellipsis">你好,李焕银</h5>
          </li>
        </ul>
      </div>
    </div>

    <!-- 这里是购买电影的组件 -->
    <buy-titck :movieList='movieList'></buy-titck>
  </div>
</template>
<script>
import axios from 'axios'
import buyTitck from './buyTitck'

export default {
  data() {
    return {
      movieList: [],
      moreList: []
    }
  },
  components: {
    buyTitck
  },
  created() {
    document.title = this.$route.meta.title
  },
  mounted() {
    this.$refs.cpnlist.addEventListener('scroll', this.handleScroll)
    this.getBuyTickit()
    // // 在这里发送网络请求
    // axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=3C42BFB091CE11EB92D3ABD2B1EFDF1B2F84484AAAE1493AA3EDF6C511473A2E&optimus_risk_level=71&optimus_code=10').then((res) => {
    //
    //   console.log(res);
    //   this.movieList = res.data.movieList
    //   // 把后面需要加载的电影的id存起来
    //   var len = res.data.data.movieIds.length
    //
    //   console.log(res.data.movieIds)
    //   for (let i = 12; i < len; i+=10) {
    //
    //     this.moreList.push(res.data.data.movieIds.splice(i, i+10).join(','))
    //   }
    //   console.log(this.moreList)
    // })

  },
  methods: {
    handleScroll() {
      var scrollTop = this.$refs.cpnlist.pageYOffset || this.$refs.cpnlist.scrollTop || this.$refs.cpnlist.scrollTop
      // console.log(scrollTop)
      // 获取可视的高度
      var itemHeight = this.$refs.cpnlist.clientHeight
      // 文档总高度
      var sumHeight = this.$refs.cpnlist.scrollHeight
      // console.log(itemHeight,sumHeight)
      // 判断是否滚动到底了
      if (scrollTop + itemHeight >= sumHeight) {
        console.log('到底了')
        // 在这里发送ajax请求
      }
    },
    async getBuyTickit() {
      var res = await axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=3C42BFB091CE11EB92D3ABD2B1EFDF1B2F84484AAAE1493AA3EDF6C511473A2E&optimus_risk_level=71&optimus_code=10')
      this.movieList = res.data.movieList

      console.log(res.data.movieIds)
      console.log(res.data.movieIds.length)
      for (var i = 12; i < 17; i += 10) {
        this.moreList.push(res.data.movieIds.splice(i, i + 10).join(','))
      }
      console.log(this.moreList)

    }

  }
};
</script>
