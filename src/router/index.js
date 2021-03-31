// 导入路由
import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../components/home/Home';
import Profile from '../components/profile/Profile';
import Video from '../components/video/Video';
import smallVideo from '../components/smallvideo/smallVideo';
import Show from '../components/show/Show';
import yingYuan from "../components/home/yingYuan";
import moviesList from "../components/home/moviesList";
import jinDian from "../components/home/jinDian";
import daiYing from "../components/home/daiYing";
import videoRY from "../components/video/videoRY";
import videoYG from "../components/video/videoYG";
import detail from "../components/detail/detail";
import * as path from "path";


// 通过Vue.use(插件) 来安装插件 只要是vue的插件都要安装,vue-router就是一个插件
Vue.use(VueRouter); //安装插件

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [    // 必须需要routes,用来配置映射关系
  {
    // 路由的重定向
    path: '/',
    component: Home,

  },
  {
    path: '/home',
    component: Home,
    // 路由独享守卫
    // beforeEnter:(to,from,next) =>{
    //   console.log('home的路由独享守卫执行了')
    //   next()
    // },
    children:[
      {
        path:'/home/reying',
        component:moviesList,
        meta:{
          title:'热映'
        }
      },{
        path:'/home/yingyuan',
        component:yingYuan,
        meta:{
          title:'影院'
        }

      },{
        path:'/home/daiying',
        component:daiYing,
        meta:{
          title:'待映'
        }
      },{
        path:'/home/jindian',
        component:jinDian,
        meta:{
          title:'经典电影'
        }

      }
    ]
  },
  {
    path:'/detail/:id',
    component: detail

  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/svideo',
    component: smallVideo,
  },
  {
    path: '/video',
    component: Video,
    children: [
      {
        path:'/video/videoreying',
        component: videoRY,

      },
      {
        path:'/video/videoyugao',
        component: videoYG,

      }

    ]
  },
  {
    path: '/show',
    component: Show,
  }

]

// 创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
});

// router.beforeEach(((to, from, next) => {
//   // console.log('to',to)
//   // console.log('from',from)
//   next()
// }))


// 将router对象挂载到vue实例上
export default router
