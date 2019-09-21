import React,{Component} from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HeaderWrapper, Logo, Nav, NavItem, NavSeach,
  SiderBar,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  SearchInfoTitle
} from './style'
import { Icon } from '_antd@3.23.2@antd'

class Header extends Component {
  getListArea() {
    const { focused, list, page ,handleMouseEnter,handleMouseLeave, moseIn, handleChangePage,totalPage} = this.props;
    const newList = list.toJS(); // toJS 方法是immutable js函数封装好的 把不可变对象复制一份并且转为可修改数据
    const pageList = []
    if(newList.length){
      for(let i=(page*10); i< ((page+1)*10); i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || moseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
<<<<<<< HEAD
                <SearchInfoSwitch onClick={()=> handleChangePage(page,totalPage )}>换一批</SearchInfoSwitch>
=======
                <SearchInfoSwitch onClick={()=> handleChangePage(page,totalPage, this.spinIcon)}>
                  <span ref={()=> {this.spinIcon = Icon}} className="iconfont spin">&#xe60e;</span>
                  换一批
                  </SearchInfoSwitch>
>>>>>>> header-search
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  
  render() {
    const { focused ,handleInputFocus,handleInputBlur } = this.props;
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className={'left active'}>首页</NavItem>
          <NavItem className={'left'}>下载App</NavItem>
          <NavItem className={'right'}>登录</NavItem>
          <NavItem className={'right'}><span className="iconfont">&#xe636;</span></NavItem>
          {/* <span className="iconfont">&#xe615;</span> */}
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={400}
              classNames='slide'
            >
              <NavSeach
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSeach>
            </CSSTransition>
<<<<<<< HEAD
            <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60a;</span>
=======
            <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60a;</span>
>>>>>>> header-search
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <SiderBar>
          <Button className={'writting'}><span className="iconfont">&#xe615;</span>写文章</Button>
          <Button className={'reg'}>注册</Button>
        </SiderBar>
      </HeaderWrapper>
    )
  }
}


// class Header extends Component {
//   render() {
//     return (
// )
//   }
// }
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    moseIn: state.getIn(['header', 'moseIn'])
  }
}
const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus() {
      dispath(actionCreators.getList());
      dispath(actionCreators.searchFoucs());
    },
    handleInputBlur() {
      dispath(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispath(actionCreators.searchMoseEnter())
    },
    handleMouseLeave() {
      dispath(actionCreators.searchMouseLeave())
    },
    handleChangePage(page,totalPage) {
      if(page< totalPage-1){
        dispath(actionCreators.changePage(page+1))
      }else{
        dispath(actionCreators.changePage(1))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);