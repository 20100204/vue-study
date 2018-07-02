import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/hoem'
import About from '@/components/about'
import User from '@/components/user'
import Ta from '@/components/tt'
import Nofound from '@/components/404'
import Study from '@/views/study'
import Work from '@/views/work'
import Hobby from '@/views/hobby'
import Slider from '@/views/slider'
import Bb from '@/views/bbbb'

Vue.use(Router)
const routes = [
    {
        path:'/user/:userId?',  //统配符
        component:User
    },
                {
                    path:'*',
                   // component:Nofound,
                 //重定向   redirect:'/about'
                 //   redirect:{path:'/about'},
                    redirect:(to)=>{
                        //console.log(to);
                        return '/'
                    }


                },
                {
                path: '/',
                name: 'HelloWorld',
                component: Home,
                    alias:'/index'
                    //别名
                },
                {
                    path: '/about',

                    component: About,
                    children:[
                        {path:'',component:Study, name: 'about'},//默认子路由
                        {path:'work',component:Work,name:'work'},
                        {path:'hobby',component:Hobby,name:'hobby'},
                    ]

                },
                {
                    path:'/ts',
                    components:{
                        default:Ta,
                        ccc:Slider,
                        bb:Bb

                    }
                }
    ];
export default new Router({
    routes: routes,
    mode:'history',
    linkActiveClass:'is_active',
    scrollBehavior(to,from,savePosition){//滚动行为，前进后退或切换导航时触发
      //  console.log(to);
      //  console.log(from);
       // console.log(savePosition);//这个参数只有在前进后退时才有，导航切换时没有
    }

})
