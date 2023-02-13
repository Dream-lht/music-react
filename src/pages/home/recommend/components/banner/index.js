import React, {memo, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {BannerMain,BannerContent,BannerRight,BannerLeft,BannerItem} from "./style";
import {getTopBannerActions} from "../../store/actionType";

import {Carousel} from "antd";


//轮播图
export default memo(function Banner(props){
    //使用hooks来调用dispatch
    const dispatch = useDispatch();

    //引入state
    const {topBanner} = useSelector((state) => {
        return {
            topBanner:state.getIn(["recommend","topBanner"])
        }
    },shallowEqual);

    //调用actions来获取数据
    useEffect( () => {
        dispatch(getTopBannerActions());
    },[dispatch]);
    return(
        <BannerMain>
            <BannerContent>
                <BannerLeft>
                    <Carousel
                        effect="fade"
                        autoplay={true}
                        dotPosition="bottom">
                        {
                            topBanner.map( (item) => {
                                return (
                                    <BannerItem key={item.imageUrl}>
                                        <img src={item.imageUrl}/>
                                    </BannerItem>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                    <div className="download"></div>
                    <div className="title">PC 安卓 iPhone WP iPad Mac 六大客户端</div>
                </BannerRight>
            </BannerContent>
        </BannerMain>

    )
})