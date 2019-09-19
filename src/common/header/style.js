import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  height: 56px;
  border: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display:inline-block;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
  // background: #f5f5f5;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`
export const NavSeach = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  padding: 0 40px 0 20px;
  height: 38px;
  margin-top: 9px;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 40px;
  background: #eee;
  color: #777;
  &::placeholder{
    color: #999;
  }
  &.focused{
    width: 240px;
  }
  &.slide-enter{
    width: 160px;
    transition: all .4s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    width: 240;
    transition: all .4s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 240px;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 3px;
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
`
export const SearchInfoList = styled.a`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  dispaly: block;
  float: left;
  font-size: 12px;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 15px;
`
export const SiderBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  margin: 8px 12px 0;;
  height: 38px;
  line-height: 38px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  background-color: transparent;
  width: 80px;
  text-align: center;
  &.reg{
    color: #ea6f5a
  }
  &.writting{
    width: 100px;
    color: #fff;
    background: #ea6f5a
  }
`
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height:30px;
    border-radius:50%;
    text-align: center;
    &.focused{
      background: #777;
      color: #fff;
    }
  }
`