<style>
/* @import url("../../assets/css/normalize"); */
.buyTitck {
  margin-top: 0.1rem;
}
.buyTitck-item {
  font-size: 0.18rem;
  padding: 0.1rem;
  color: #666;
  line-height: 0.24rem;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(231, 231, 231);
  /* background-color: rgb(235, 235, 235); */
  height: 1.15rem;
  width: 100%;
}
.buyTitck-item .left {
  float: left;
}
.buyTitck-item .left img {
  width: 0.64rem;
  height: 0.9rem;
}
.buyTitck-item .right {
  position: relative;
  float: left;
  width: 2rem;
  height: 95%;
  padding: 0 10px;
  box-sizing: border-box;
}
.buyTitck-item .right .title {
  font-size: 0.18rem;
  font-weight: 800;
  color: #000;
}
.buyTitck-item .right .like {
  font-size: 0.12rem;
  /* font-weight: 800; */
}
.buyTitck-item .right .like .num {
  color: orange;
  margin-right: 0.1rem;
  font-size: 0.16rem;
}
.buyTitck-item .right .msg span {
  display: block;
  font-size: 0.14rem;
  width: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.buyTitck-item .right .buyBtn {
  position: absolute;
  top: 50%;
  right: -0.7rem;
  width: 0.5rem;
  height: 0.3rem;
  border: none;
  color: #fff;
  background-color: #3c9fe6;
  border-radius: 5px;
}
</style>
<template>
<div>
  <div class="buyTitck" v-for="(item) in movieList" :key='item.id' >
    <div class="buyTitck-item" @click="itemClick(item.id)">
      <div class="left">
        <img
          :src="item.img.replace('w.h','64.90')"
          alt=""
        />
      </div>
      <div class="right">
        <div class="title">{{item.nm}}</div>
        <div class="like" v-if="!item.globalReleased"><span class="num" style="font-size:800;">{{item.wish}}</span>
         <span style="font-size:400;">想看</span>
         </div>
        <div class="like" v-else><span class="num">{{item.sc}}</span><span style="font-size:400;">评分</span></div>
        <div class="msg">
          <span>主演:{{item.star}}</span>
        </div>
        <div class="msg"><span>{{item.showInfo}}</span></div>
        <button class="buyBtn" v-if="!item.globalReleased">预售</button>
        <button class="buyBtn" v-else style="background-color:#E54847;">购票</button>
      </div>
    </div>

  </div>
</div>

</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods:{
    itemClick(id) {
      this.$router.push({path:'/detail/'+id})
    }
  },
  props: {
    movieList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
