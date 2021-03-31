<template>
    <div class="content" v-html="pagedata">

    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "yinYuan",
    data() {
      return{
        pagedata:''
      }
    },
    created() {
      document.title = this.$route.meta.title
    },
    mounted() {
      axios.get('/ajax/moreCinemas?day=2021-03-29&offset=10&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1617005961912&cityId=30&optimus_uuid=DAC31DB08D3711EBBC59C9408250F5BC454861C23FCE47008134E41D44C40CC4&optimus_risk_level=71&optimus_code=10').then((res)=> {
        // console.log(res.data)
        this.pagedata = res.data
      })
    }
  }
</script>

<style>
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
  .title .price-block{
    font-size: .18rem;
    color: #ff0000;

  }
  .location-block.box-flex {
    margin-top: .05rem;
    display: flex;


    justify-content: left;
  }
  .flex.line-ellipsis {
    font-size: .16rem;
    width: 2.6rem;
    margin-right: .2rem;
    display: inline-block;
  }
  .flex.line-ellipsis span {
    color: #000;
  }
  .distance {
    width: 1rem;
    height: auto;
    font-size: .15rem;
    color: #666;
    text-align: center;
    margin-left: .2rem;
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
    padding:0 .02rem;
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
    margin-bottom: .15rem;
  }



</style>
