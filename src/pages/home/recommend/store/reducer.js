//导入类型常量
import {CHANGE_BANNER} from "./constType";
import {Map} from "immutable";

//使用immutable对数据的存储进行优化
const defaultState = Map({
  topBanner:[],
})

function reducer(state = defaultState,action){
  switch (action.type){
    case CHANGE_BANNER:
      return state.set("topBanner",action.data);
    default:
      return state;
  }
}

export default reducer;