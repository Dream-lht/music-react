import react, {memo} from "react";

import {NavStyle} from "./style";
import {NavLink} from "react-router-dom";
import {navList} from "@/common/home/navigation";

export default memo(function Navigation(props){
  return(
      <NavStyle>
        <div className="content">
          {
            navList.map( (item) => {
              return (<NavLink to={item.to} exact={item.exact} key={item.id}>{item.title}</NavLink>)
            })
          }
        </div>
      </NavStyle>
  )
})