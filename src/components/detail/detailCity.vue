<template>
  <div class="content">
    <a href="/shows/18" v-for="item in cinemas" :key="item.id">
      <div class="item mb-line-b" data-id="18" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>{{item.nm}}</span>
            <span class="price-block">
                <span class="price">{{item.sellPrice}}</span><span class="q">元起</span>
              </span>
          </div>
          <div class="location-block box-flex">
            <div class="flex line-ellipsis">{{item.addr}}</div>
            <div class="distance">{{item.distance}}</div>
          </div>
          <div class="flex"></div>
          <div class="label-block">
            <div class="endorse">改签</div>
            <div class="snack">小吃</div>
            <div class="vipTag">折扣卡</div>
          </div>

          <div class="discount-block">
            <div>
              <div class="discount-label normal card">
                <img src="//p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png">
              </div>
              <div class="discount-label-text">{{item.promotion.cardPromotionTag}}</div>
            </div>
          </div>
          <div class="lastest">
            近期场次:7:00
          </div>
        </div>

      </div>
    </a>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "detailCity",
  data() {
    return {
      cinemas:[]
    }
  },
  created() {

  },
  mounted() {
    var currentDate = new Date()
    axios.post('/ajax/movie?forceUpdate='+currentDate.getTime(),{

        movieId: 1298359,
        day: '2021-03-31',
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
      // console.log(res)
      this.cinemas = res.data.cinemas
    })

  }
}
</script>

<style scoped>
.content {
  font-size: .16rem;
  height: calc(100% - 1.6rem);
  padding: 0.1rem;
  box-sizing: border-box;
  overflow-y: auto;
  width: 100%;
}

.content::-webkit-scrollbar {
  display: none;
}

.item.mb-line-b {
  border-bottom: 1px dashed #ccc;
}

.title.line-ellipsis {
  margin-top: .2rem;
  font-size: .18rem;
  text-align: left;
  display: block;
  height: auto;
}

.title .price-block {
  font-size: .18rem;
  color: #ff0000;

}

.location-block.box-flex {
  margin-top: .05rem;
  display: flex;
  justify-content: left;
}

.flex.line-ellipsis {
  font-size: .13rem;
  width: 3rem;
  color: #4c4c4c;
  height: .2rem;
  margin-right: 0rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  text-align: left;
}

.flex.line-ellipsis span {
  color: #000;
}

.distance {
  width: .5rem;
  height: auto;
  font-size: .15rem;
  color: #585858;
  text-align: center;
  margin-left: 0rem;
  display: inline-block;

}

.label-block {
  display: flex;
  justify-content: left;
  margin: .05rem 0rem;
  height: .2rem;

}

.label-block div {
  font-size: .12rem;
  margin-right: .05rem;
  padding: 0 .02rem;
  line-height: .18rem;
}

.allowRefund {
  border-radius: .04rem;
  color: #2aabd2;
  border: 1px solid #2aabd2;
}

.endorse {
  border-radius: .04rem;
  color: #2aabd2;
  border: 1px solid #2aabd2;
}

.snack {
  border-radius: .04rem;
  color: orange;
  border: 1px solid orange;
}

.vipTag {
  width: auto;
  color: orange;
  border-radius: .04rem;
  border: 1px solid orange;
}

.hallType {
  width: auto;
  border-radius: .04rem;
  color: #2aabd2;
  border: 1px solid #2aabd2;
}

.discount-label.normal.card {
  display: inline-block;
}

.discount-label.normal.card img {
  width: .15rem;
  height: .15rem;
  display: inline-block;
}

.discount-label-text {
  display: inline-block;
  font-size: .12rem;
  color: #999;
  margin-bottom: .15rem;
}
.lastest {
  font-size: .12rem;
  color: #999;
}


</style>
