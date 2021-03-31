<template>
    <div class="content">

      我是待映的页面
      我是待映的页面
      我是待映的页面
      我是待映的页面


    </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "daiYing",
    data() {
      return{

      }
    },
    created() {
      document.title = this.$route.meta.title
    },
    mounted() {
      axios.get('/ajax/moreCinemas?day=2021-03-29&offset=10&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1617005961912&cityId=30&optimus_uuid=DAC31DB08D3711EBBC59C9408250F5BC454861C23FCE47008134E41D44C40CC4&optimus_risk_level=71&optimus_code=10').then((res)=> {

        this.pagedata = res.data
      })
    }
  }
</script>

<style scoped>
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
</style>
