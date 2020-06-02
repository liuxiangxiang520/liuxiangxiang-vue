import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/views/Home'
import About from '@/views/About'
import Message from '@/views/Message'
import News from '@/views/News'
import MessageDetail from '@/views/MessageDetail'
import NewsDetail from '@/views/NewsDetail'
 export default new VueRouter({
      //定义路由
      routes:[
        //每个路由是一个对象
        {
            path:'/home',//点击链接后，路径就会变为它
            component:Home,//代表路径变为Home后，要显示的组件是哪个组件
            children:[
                {
                    path:'/home/message',
                    component:Message,
                    children:[
                        {
                            path:'/home/message/info:msgId',
                            component:MessageDetail,
                            props(route){
                                return {
                                    msgId:route.params.msgId,
                                    msgContent:route.query.msgContent
                                }
                            },
                            name:'msgInfo'
                        }
                    ]
                    
                },
                {
                    path:'/home/news',
                    component:News,
                    children:[
                        {
                            path:'/home/news/info:newsId',
                            component:NewsDetail,
                            props(route){
                                return {
                                    newId:route.params.newsId,
                                    newsContent:route.query.newsContent
                                }
                            },
                            name:'newInfo'
                        }
                    ]
                },
                {
                    path:'/home',
                    redirect:'/home/message'
                }
            ]
        },
        {
            path:'/about',
            component:About
        },{
            path:'/',
            redirect:'/home'//重定向的意思。可以让它重定向到另外一个路径
            //如果访问的是/，那么就转给/home
        }
     ]
 })