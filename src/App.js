import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import Header from './common/header'
import store from './store/index'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Wirte from './pages/write'

class App extends Component {
  render() {
    return (
      // react-redux 提供数据  供子选项里的所有组件可以访问数据
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <BrowserRouter>
            <div>
              <Header></Header>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={ Login }></Route>
              <Route path='/write' exact component={ Wirte }></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}
export default App;