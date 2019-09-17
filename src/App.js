import React, {Component, Fragment} from 'react'
import { GlobalStyle } from './style'
import Header from './common/header'
import  './statics/iconfont/iconfontApp'
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <Header></Header>
      </Fragment>
    )
  }
}
export default App;