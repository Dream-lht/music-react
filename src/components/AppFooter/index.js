import react,{memo} from "react";

import {Footer,FooterRight,FooterLeft} from "./style";
import {linkList,iconList} from "@/common/footerList";

export default memo( function AppHeader(props){
  //处理当点击a标签，进制a标签默认事件
  const handleClick = (item,e) => {
    if(item.href == "#"){
      e.preventDefault();
    }

  }
  return (
      <Footer>
        <div className="content">
          <FooterLeft>
              {
                linkList.map( (item) => {
                  return( <a
                      href={item.href}
                      target="_blank"
                      key={item.id}
                      onClick={ (e) => handleClick(item,e)}
                      className="link_item">{item.title}</a> )
                })
              }
              <p className="company_info">
                <span className="sep">网易公司版权所有©1997-2021   </span>
                <span className="sep">杭州乐读科技有限公司运营：</span>
                <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png"
                   target="_blank">浙网文[2021] 1186-054号</a>
              </p>
            <p className="company_info">
              <span className="sep">违法和不良信息举报电话： 0571-89853516 </span>
              <span> 举报邮箱：<a href="ncm5990@163.com">ncm5990@163.com</a></span>
            </p>
            <p className="company_info">
              <a href="https://beian.miit.gov.cn/#/Integrated/index" className="sep">粤B2-20090191-18  工业和信息化部备案管理系统网站</a>
              <span>
                <i></i>
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">浙公网安备 33010902002564号</a>
              </span>
            </p>
          </FooterLeft>
          <FooterRight>
            <ul>
              {
                iconList.map( (item) => {
                  return (
                      <li key={item.id}>
                        <a href={item.href} className="foot_icon"></a>
                        <span className="foot_title"></span>
                      </li>
                  )
                })
              }
            </ul>
          </FooterRight>
        </div>
      </Footer>
  )
})