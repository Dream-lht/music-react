//导入类型常量
import {CHANGE_BANNER} from "./constType";

const defaultState = {
  topBanner:[],
}

function reducer(state = defaultState,action){
  switch (action.type){
    case CHANGE_BANNER:
      return{...state,topBanner:[...action.data]}
    default:
      return state;
  }
}

export default reducer;