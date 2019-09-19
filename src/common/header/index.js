import React from 'react'
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
const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
              <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}

const Header = (props) => {
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
            in={props.focused}
            timeout={400}
            classNames='slide'
          >
            <NavSeach
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSeach>
          </CSSTransition>
          <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60a;</span>
          {getListArea(props.focused)}
        </SearchWrapper>
      </Nav>
      <SiderBar>
        <Button className={'writting'}><span className="iconfont">&#xe615;</span>写文章</Button>
        <Button className={'reg'}>注册</Button>
      </SiderBar>
    </HeaderWrapper>
  )
}

// class Header extends Component {
//   render() {
//     return (
// )
//   }
// }
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}
const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus() {
      dispath(actionCreators.searchFoucs())
    },
    handleInputBlur() {
      dispath(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);