import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ListItem, ListInfo,LoadMore } from '../styled';

class Lsit extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <img className="pic" src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{ item.get('desc') }</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore>加载更多</LoadMore>
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'articleList'])
})
export default connect(mapState, null)(Lsit);