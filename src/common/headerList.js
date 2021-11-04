//头部组件的路由跳转数据

const headList = [
  {
    id:0,
    exact:true,
    title:"发现音乐",
    to:"/",
    type:"link",
    isHot:false,
  },
  {
    id:1,
    title: "我的音乐",
    exact:false,
    to: "/my",
    type: "link",
    isHot:false,
  },
  {
    id:2,
    exact:false,
    title: "朋友",
    to: "/friend",
    type: "link",
    isHot:false,
  },
  {
    id:3,
    exact:false,
    title: "商城",
    to: "https://music.163.com/store/product",
    type: "href",
    isHot:false,
  },
  {
    id:4,
    exact:false,
    title: "音乐人",
    to: "https://music.163.com/st/musician",
    type: "href",
    isHot:false,
  },
  {
    id:5,
    exact:false,
    title: "下载客户端",
    to: "download",
    type: "link",
    isHot:true,
  }
];

export default headList;