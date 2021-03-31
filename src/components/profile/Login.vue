<template>
    <div>
        <div class="login-samfix">
            <div class="loginnum">
                <ul >
                    <li v-for='(item,index) in loginMethods'
                     :key='index' @click="liClick(index)"
                     :class="{active:currentIndex === index,animated:true}">{{item}}</li>
                </ul>
                <!-- 账号密码登陆 -->
                <ol class="kv-line-r" v-if="isShow === 0">
                    <li>
                        <input type="text" name="" id="username" placeholder="账户名/手机号/Email">
                    </li>
                    <li>
                        <input type="password" name="" id="password" placeholder="请输入密码">
                    </li>
                </ol>
                <!-- 手机号登陆 -->
                <ol class="kv-line-r" v-else>
                    <li>
                        <input type="text" name="" id="username" placeholder="请输入手机号">
                    </li>
                    <li>
                        <input type="text" name="" id="text" placeholder="请输入验证码">
                    </li>
                </ol>
            </div>
            <div class="loginbtn">
                <button type="submit" class="btn1">登陆</button>
            </div>
            <div class="register">
                <a href="">立即注册</a>
                <a href="">忘记密码</a>

            </div>
            <div class="footer">
                <p>© 猫眼电影 客服电话：<span>400-670-5335</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    components: { 

     },
    data() {
        return {
            loginMethods:['账户名登陆','手机号登陆'],
            currentIndex:0,
            isShow:0
        };
    },
    mounted() {
        
    },
    methods: {
        liClick(index) {
            // console.log(index);
            this.currentIndex = index
            this.isShow = index
        }
    },
};
</script>

<style scoped>
    .active{
        border-bottom: 0.05rem solid orange;
        
    }
    
    .loginnum ul {
        height: .5rem;
        width: 100%;
        display: flex;
        line-height: .5rem;
        box-sizing: border-box;
        justify-content: space-around;
        border-bottom: 0.05rem solid#ccc;
    }
    .loginnum ul li {
        padding: 0 .5rem;
        height: 100%;
    }
    .kv-line-r li{
        width:100%;
        height:.5rem;
        padding: .1rem;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(218, 216, 216);
    }
    .kv-line-r li input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: .16rem;
        text-indent: .05rem;
        background-color: rgb(240, 240, 240);

        /* background-color: rgba(0, 0, 0, 0.07); */
        border-radius: .1rem;
    }
    .kv-line-r li input:focus{
        background-color: rgba(0, 0, 0, 0.07);

    }
    .loginbtn {
        width: 100%;
        height: 0.5rem;
        padding: .1rem;
        box-sizing: border-box;
    }
     .loginbtn .btn1 {
         width:100%;
         height:100%;
         border:none;
         color: #fff;
         outline: none;
         background-color: #f40040;

     }
     .register {
         display: flex;
         justify-content: space-between;
         width: 100%;
        height: 0.5rem;
        padding: .1rem;
        box-sizing: border-box;

     }
     .register a {
         color: rgb(225, 148, 5);
     }
     .footer {
         text-align: center;
     }
     .footer span {
         color: #f40040;
     }
</style>