import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight,BackTop } from './styled';
import { connect } from 'react-redux';
import List from './components/List';
import Recommed from './components/Recommed';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreators} from './store'


class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="" className="banner-img" src="//upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommed></Recommed>
          <Writer></Writer>
        </HomeRight>
        { this.props.showScroll? <BackTop onClick={this.handleScrllTop}>返回<br></br>顶部</BackTop>: null }
        
      </HomeWrapper>
    )
  }

  componentDidMount(){
    this.props.changeHomeData()
    this.bindEvents()
  }
  handleScrllTop() {
    window.scrollTo(0,0)
  }
  bindEvents(){
    window.addEventListener('scroll', this.props.changeScrollShow)
  }
  componentWillUnmount() { //  组件将销毁时
    window.removeEventListener('scroll', this.props.changeScrollShow)
  }
}
const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
  changeHomeData(){
    const action = actionCreators.getHomeInfo();
    dispatch(action)
  },
  changeScrollShow(e){
    if(document.documentElement.scrollTop > 400){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})
export default connect(mapState, mapDispatch)(Home);