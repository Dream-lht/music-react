import react, {memo, useEffect} from "react";

import {RecommendHeader,RecommendStyle} from "./style";

import Banner from "./components/banner"

function Recommend(props){
  // useEffect(() => {
  // //  在hooks当中执行
  //   props.getBanner()
  //   return () => {};
  // },[])
  return(
      <RecommendStyle>
        <RecommendHeader>
          <Banner></Banner>
        </RecommendHeader>
      </RecommendStyle>
  )
}
//对props进行映射
// const mapStateToProps = state => {
//   return {
//     topBanner:state.recommend.topBanner,
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     getBanner:() => {
//       //在这里进行action派发
//       dispatch(getTopBannerActions());
//     }
//   }
//
// }

export default memo(Recommend);