import React,{Component} from 'react'
import { HeaderWrapper,Logo,Nav,NavItem, NavSeach,SiderBar,Button,SearchWrapper } from './style'

class Header extends Component {
  render (){
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
            <NavSeach></NavSeach> 
            <span className="iconfont">&#xe60a;</span>
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
export default Header;