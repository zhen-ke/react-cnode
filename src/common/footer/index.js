import React from 'react'
import { NavLink as Link} from 'react-router-dom'
import { FooterWrapper, FooterItem } from './style'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterItem>
        <Link to={'/'} exact><i className="iconfont">&#xe651;</i><p>首页</p></Link>
      </FooterItem>
      <FooterItem>
        <Link to={'/create'}><i className="iconfont">&#xe67b;</i><p>发表</p></Link>
      </FooterItem>
      <FooterItem>
        <Link to={'/message'}><i className="iconfont">&#xe60c;</i><p>消息</p></Link>
      </FooterItem>
      <FooterItem>
        <Link to={'/mine'}><i className="iconfont">&#xe608;</i><p>我的</p></Link>
      </FooterItem>
    </FooterWrapper>
  )
}
export default Footer