//配置路由组件

//导入需要配置的组件
import Home from "@/pages/home";
import MyMusic from "@/pages/myMusic";
import MyFriends from "@/pages/myFriends";

const routers = [
  {
    path: "/",
    exact:true,
    component:Home,
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