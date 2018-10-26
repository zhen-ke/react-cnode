import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Footer from './../../common/footer'
import TopNav from './../../common/topnav'
import { MessageWrapper, MessageList, MessageItem, MessageItemLeft, MessageItemRight, MessageNothing } from './style'
import { actionCreators } from './store'
import { formatDate } from './../../utils'
import { Link } from 'react-router-dom'

class Message extends PureComponent {
  render() {
    let loginState = localStorage.user
    let { messageList } = this.props
    let newMessageList = messageList.toJS()
    if (JSON.stringify(newMessageList) === '{}') return null
    if (loginState) {
      return (
        <MessageWrapper>
          <TopNav title={'消息'}></TopNav>
          {newMessageList.has_read_messages.length || newMessageList.hasnot_read_messages.length ? (
            <MessageList>
              {newMessageList.hasnot_read_messages.map((it, index) => {
                return (
                  <MessageItem key={index}>
                    <MessageItemLeft>
                      <Link to={'/user/' + it.author.loginname}>
                        <img src={it.author.avatar_url} alt="" />
                      </Link>
                    </MessageItemLeft>
                    <MessageItemRight>
                      <div className="item-hd">
                        <span className="name">
                          <Link to={'/user/' + it.author.loginname}>
                            {it.author.loginname}</Link>
                        </span>
                        <span className="time">{formatDate(it.reply.create_at)}</span>
                      </div>
                      <div className="item-bd">在话题 <Link to={'/detail/' + it.topic.id}>{it.topic.title}</Link>回复了你</div>
                    </MessageItemRight>
                  </MessageItem>
                )
              })}
              {(newMessageList && newMessageList.has_read_messages || []).map((it, index) => {
                return (
                  <MessageItem key={index}>
                    <MessageItemLeft>
                      <Link to={'/user/' + it.author.loginname}>
                        <img src={it.author.avatar_url} alt="" />
                      </Link>
                    </MessageItemLeft>
                    <MessageItemRight>
                      <div className="item-hd">
                        <span className="name">
                          <Link to={'/user/' + it.author.loginname}>
                            {it.author.loginname}</Link>
                        </span>
                        <span className="time">{formatDate(it.reply.create_at)}</span>
                      </div>
                      <div className="item-bd">回复了你的话题 <Link to={'/detail/' + it.topic.id}>{it.topic.title}</Link></div>
                    </MessageItemRight>
                  </MessageItem>
                )
              })}
            </MessageList>
          ) : (<MessageNothing>暂无消息</MessageNothing>)}
          <Footer></Footer>
        </MessageWrapper>
      )
    } else {
      return <Redirect to='/login' />
    }
  }
  componentDidMount() {
    let loginState = localStorage.user
    if (loginState) {
      this.props.getMessage()
    }
  }
}

const mapState = (state) => {
  return {
    messageList: state.getIn(['message', 'messageList'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getMessage() {
      dispatch(actionCreators.getMessageCount())
    }
  }
}

export default connect(mapState, mapDispatch)(Message)