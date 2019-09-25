import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import Header from './common/header'
import store from './store/index'

class App extends Component {
  render() {
    return (
      // react-redux 提供数据  供子选项里的所有组件可以访问数据
      <Provider store={store}>
        <GlobalStyle/>
        <Header></Header>
      </Provider>
    )
  }
}
export default App;