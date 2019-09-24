import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../styled'
class Topic extends Component {
  render() {
    const { list } = this.props
    return (
      <TopicWrapper>
        {
          list.map((item) => (
            <TopicItem key={item.get('id')}>
              <img className="img_item" src={item.get('imgUrl')} />
              <span className="span">手绘</span>
            </TopicItem>
          ))
        }

      </TopicWrapper>
    )
  }
}
const mapState = (state) => ({
  // 拿数据赋值到 this.props 里面的list上
  list: state.get('home').get('topicList')
})

// 要想有使用  全局中  store的能力  需要使用react-redux   conten做链接
export default connect(mapState, null)(Topic);