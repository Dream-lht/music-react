import react, {memo, useEffect} from "react";
import {connect} from "react-redux";
import {getTopBannerActions} from "./store/actionType";

function Recommend(props){
  useEffect(() => {
  //  在hooks当中执行
    props.getBanner()
    return () => {};
  },[])
  console.log(props.topBanner);
  return(
      <div>
        Recommend
      </div>
  )
}
//对props进行映射
const mapStateToProps = state => {
  return {
    topBanner:state.recommend.topBanner,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getBanner:() => {
      //在这里进行action派发
      dispatch(getTopBannerActions());
    }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend));