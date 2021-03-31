<template>
    <div class="content" v-html="dataList">


    </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "jinDian",
    data(){
      return{
        dataList:''
      }
    },
    created() {
      document.title = this.$route.meta.title
    },
    mounted() {
      // 在这里发送网络请求
      axios.get('/ajax/moreClassicList?sortId=1&show' +
        'Type=3&limit=10&offset=10&optimus_uuid=945A' +
        '4FF0906711EB9A2291DCBDC2F2DA604D8DC42C604A' +
        '7EA88BB870C6020118&optim' +
        'us_risk_level=71&optimus_code=11').then((res)=>{
        // console.log(res);
        this.dataList = res.data
      }).catch((err)=>{
        console.log(err);
      })
    }
  }
</script>

<style>
  .content {
    height: calc(100% - 1.6rem);
    padding: 0.1rem;
    box-sizing: border-box;
    overflow-y: auto;
    width: 100%;
  }
  .content::-webkit-scrollbar {
    display: none;
  }
  .classic-movie {
    position: relative;
    width: 100%;
    height: 1rem;
    justify-content: left;
    display: flex;
    overflow: hidden;
  }
  .classic-movie .avatar {
    width: .66rem;
    height: .94rem;
  }
  .movie-info{
    margin-left: .1rem;
    margin-top: -.1rem;
  }
  .classic-movie .avatar img {
    width: 100%;
    height: 100%;
    vertical-align:top ;
  }

  .title.line-ellipsis{
    color: black;
    font-size: .14rem;
    margin-top: 10px;

  }
  .movie-info div {
    text-align: left;
    font-size: .12rem;
    letter-spacing: -1px;
  }
  .movie-score {
    position: absolute;
    right: .2rem;
    top: 0;
  }
  .movie-score .grade{
    font-size: .16rem;
    color: orange;
  }
  .no-score{
    font-size: .12rem;
  }

</style>
