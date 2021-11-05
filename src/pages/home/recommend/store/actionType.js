import {CHANGE_BANNER,GET_BANNER} from "./constType";

//获取banner的接口
import {getBanner} from "@/http/home/recommend";

export const changeBannerAction = (data) => (
    {
      type:CHANGE_BANNER,
      data:data
    }
)
//发送网络请求，获取banner资源
export const getTopBannerActions = (data) => {
  return async dispatch => {
    let {data} = await getBanner();
    //开始派送
    dispatch(changeBannerAction(data.banners))
  }
}