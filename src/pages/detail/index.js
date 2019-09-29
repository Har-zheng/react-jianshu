import React, { PureComponent } from 'react';
import { DetailWrapper,Header,Content } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'

class Deatil extends PureComponent {
  render(){
    let { title, content } = this.props
    console.log(this.props)
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
    this.props.getDetailData(this.props.match.params.id)
  }
}
const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})
const mapDispatch = (dispatch) => ({
  getDetailData(id) {
    const action = actionCreators.getDetail(id)
    dispatch(action)
  }
})
// withRouter 让detail 有能力获取route的所有数据
export default connect(mapState, mapDispatch)(withRouter(Deatil));