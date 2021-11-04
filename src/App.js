import React, {PureComponent} from 'react';
import {renderRoutes} from 'react-router-config'

//导入一些配置文件
import routers from "@/router/router";

//导入一些组件
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import {BrowserRouter} from "react-router-dom";

class App extends PureComponent {
  render() {
    return (
        <div>
          <BrowserRouter>
            <AppHeader></AppHeader>
            {renderRoutes(routers)}
            <AppFooter></AppFooter>
          </BrowserRouter>
        </div>
    );
  }
}


export default App;