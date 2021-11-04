import react, {memo} from "react";
import {NavLink} from "react-router-dom";
import {Input,Button} from "antd";
import {SearchOutlined} from '@ant-design/icons'

import headList from "@/common/headerList";
import {
  HeaderStyle,
  HeaderRight,
  HeaderCenter,
  HeaderLeft
} from "./style";

export default memo(function AppFooter(props) {

  //渲染列标
  const renderSelect = (item) => {
    if (item.type == "link") {
      return (
          <>
            <NavLink to={item.to}
                     className="select_item"
                     activeClassName="active_item"
                     exact={item.exact}
                      key={item.id}>
              {item.title}
            </NavLink>
            {
              item.isHot ?(<sup className="hot sprite_01"></sup>):''
            }
          </>

      )
    } else {
      return (
          <a href={item.to} className="select_item" key={item.id}>{item.title}</a>
      )
    }
  }
  return (
      <HeaderStyle>
        <div className="wrap-v1 content">
          <HeaderRight>
            <NavLink to="/" className="sprite_01 logo"></NavLink>
          </HeaderRight>
          <HeaderCenter>
            {
              headList.map((item) => {
                return renderSelect(item);
              })
            }
          </HeaderCenter>
          <HeaderLeft>
            <Input
                placeholder="音乐/视频/电台/用户"
                prefix={<SearchOutlined />}></Input>
            <div className="creation_box">创作者中心</div>
            <div className="login">登录</div>
          </HeaderLeft>
        </div>
      </HeaderStyle>
  )
})