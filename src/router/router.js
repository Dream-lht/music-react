//配置路由组件
import {Redirect} from "react-router-dom";
import react from 'react'
//导入需要配置的组件
import Home from "@/pages/home";
//首页的子路由组件
import Recommend from "@/pages/home/recommend/index";
import Album from "@/pages/home/album/index";
import TopList from "@/pages/home/toplist/index";
import Artist from "@/pages/home/artist/index";
import DjRadio from "@/pages/home/djradio/index";
import PlayList from "@/pages/home/playlist/index";

import MyMusic from "@/pages/myMusic";
import MyFriends from "@/pages/myFriends";

const routers = [
  {
    path: "/",
    exact:true,
    render:() => {
      return (<Redirect to="/discover"/>)
    }
  },
  {
    path: "/discover",
    component:Home,
    routes:[
      {
        path:"/discover",
        exact:true,
        component:Recommend,
      },
      {
        path:"/discover/toplist",
        exact:true,
        component:TopList,
      },
      {
        path:"/discover/playlist",
        exact:true,
        component:PlayList,
      },
      {
        path:"/discover/djradio",
        exact:true,
        component:DjRadio,
      },
      {
        path:"/discover/artist",
        exact:true,
        component:Artist,
      },
      {
        path:"/discover/album",
        exact:true,
        component:Album,
      },
    ]
  },
  {
    path:"/my",
    component: MyMusic,
  },
  {
    path:"/friend",
    component: MyFriends
  }
]

export default routers;