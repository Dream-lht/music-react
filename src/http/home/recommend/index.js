import http from "@/servers";
/**
 * 获取轮播图的数据
 * @params
 * */
export function getBanner(params){
  return http({
    method:"get",
    url:"/banner",
  })
}