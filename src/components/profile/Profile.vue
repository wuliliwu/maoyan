<style scoped>

@import url("../../assets/css/normalize");

    .profile-cnt {
        font-size: .14rem;
        /* height: calc(100% - .5rem); */
        height: 100%;
        width: 100%;
        overflow-y: scroll;
        background-color: rgb(240, 240, 240);
    }
    .profile-cnt::-webkit-scrollbar {
        display: none;
    }
    .arrow {
        display:inline-block;
        width: 12px;
        height: 12px;
        transform: rotate(-45deg);
        border: 2px solid #fff;
        border-right:none;
        border-bottom:none;

    }
</style>
<template>
    <div class="profile-cnt">
        <header-tab>
            <div slot="h_left" @click="backPrev"> <span class="arrow"> </span> </div>
            <div slot="h_middle">猫眼电影</div>
        </header-tab>
        <login></login>
    </div>
       
</template>

<script>
import HeaderTab from '../common/HeaderTab'
import Login from './Login'

export default {
    name: 'Profile',
    components: {  
        HeaderTab,
        Login
    },
    
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        backPrev() {
            console.log('点击了返回');
            this.$router.go(-1)
        }
    },
};
</script>
