import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { ListItem, ListInfo,LoadMore } from '../styled';
import  {actionCreators} from '../store'
import { Link } from 'react-router-dom'
class Lsit extends PureComponent {
  render() {
    const { list , changeMoreList,page } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to='/detail'>
              <ListItem key={index}>
                <img className="pic" src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{ item.get('desc') }</p>
                </ListInfo>
              </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => changeMoreList(page)}>加载更多</LoadMore>
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})
const mapDispatch = (dispatch) => ({
  changeMoreList(page){
    const  action = actionCreators.getMoreList(page)
    dispatch(action)
  }
})
export default connect(mapState, mapDispatch)(Lsit);