import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSeach, SiderBar, Button, SearchWrapper } from './style'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }
  render() {
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
              in={this.state.focused}
              timeout={400}
              classNames='slide'
              >
              <NavSeach
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              ></NavSeach>
            </CSSTransition>
            <span className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe60a;</span>
          </SearchWrapper>
        </Nav>
        <SiderBar>
          <Button className={'writting'}><span className="iconfont">&#xe615;</span>写文章</Button>
          <Button className={'reg'}>注册</Button>
        </SiderBar>
      </HeaderWrapper>
    )
  }
  handleInputFocus() {
    this.setState({
      focused: true
    })
  }
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}
export default Header;