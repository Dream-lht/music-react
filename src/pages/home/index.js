import react,{memo} from "react";

import {renderRoutes} from "react-router-config";
import Navigation from "@/pages/home/navigation/index";
export default memo(function Home (props){
  const routes = props.route.routes
  return (
      <div>
        <Navigation></Navigation>
        {renderRoutes(routes)}
      </div>
  )
})