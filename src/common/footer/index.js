import React from 'react'
import { NavLink as Link} from 'react-router-dom'
import { FooterWrapper, FooterItem } from './style'
import home from './../../statics/home.png'
import create from './../../statics/create.png'
import message from './../../statics/message.png'
import mine from './../../statics/mine.png'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterItem>
        <Link to={'/'} exact><img src={home} alt="home" /><p>首页</p></Link>
      </FooterItem>
      <FooterItem>
        <Link to={'/create'}><img src={create} alt="create" /><p>发表</p></Link>
      </FooterItem>
      <FooterItem>
        <Link to={'/message'}><img src={message} alt="message" /><p>消息</p></Link>
      </FooterItem>
      <FooterItem>
        <Link to={'/mine'}><img src={mine} alt="mine" /><p>我的</p></Link>
      </FooterItem>
    </FooterWrapper>
  )
}
export default Footer