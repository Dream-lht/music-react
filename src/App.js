import React, {PureComponent} from 'react';
import {renderRoutes} from 'react-router-config'
import {Provider} from 'react-redux'
import store from "./store";
//导入一些配置文件
import routers from "@/router/router";

//导入一些组件
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import {BrowserRouter} from "react-router-dom";

class App extends PureComponent {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <AppHeader></AppHeader>
            {renderRoutes(routers)}
            <AppFooter></AppFooter>
          </BrowserRouter>
        </Provider>
    );
  }
}


export default App;