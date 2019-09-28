import React, { Component } from 'react';
import { DetailWrapper,Header,Content } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Deatil extends Component {
  render(){
    let { title, content } = this.props
    return (
        <DetailWrapper>
        <Header>{title}</Header>
        {/* dangerouslySetInnerHTML 不转译一个字符 */}
        <Content dangerouslySetInnerHTML={{__html: content}}>
        </Content>
       </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetailData()
  }
}
const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})
const mapDispatch = (dispatch) => ({
  getDetailData() {
    const action = actionCreators.getDetail()
    dispatch(action)
  }
})
export default connect(mapState, mapDispatch)(Deatil);