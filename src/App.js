import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import Header from './common/header'
import store from './store/index'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      // react-redux 提供数据  供子选项里的所有组件可以访问数据
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <Header></Header>
          <BrowserRouter>
            <div>
              <Route path='/' exact render={() => <div>home</div>}></Route>
              <Route path='/detail' exact render={() => <div>detail</div>}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}
export default App;