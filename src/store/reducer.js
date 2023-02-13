//导入合成reducerApi
// import {combineReducers} from "redux";
import {combineReducers} from "redux-immutable";

//导入模块reducer
import {reducer as recommendReducer} from "@/pages/home/recommend/store/index"

const rootReducer = combineReducers({
  recommend:recommendReducer
});

//导出
export default rootReducer;
