import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
import { RepliesWrapper, RepliesTextarea, RepliesButton } from './style'
import { T } from 'react-toast-mobile';

class Replies extends PureComponent {
  render() {
    let { handleConfirm, id, replyId, author } = this.props
    return (
      <RepliesWrapper>
        {
          localStorage.user ? (
            <Fragment>
              <RepliesTextarea
                ref={(textarea) => { this.content = textarea }}
                placeholder={author ? '@' + author : '请输入回复内容'}>
              </RepliesTextarea>
              <RepliesButton onClick={() => { handleConfirm(id, replyId, author, this.content) }}>回复</RepliesButton>
            </Fragment>
          ) : (<div className="login">你的丫先<Link to={'/login'} > 登录</Link> 才能发评论
          </div>)
        }
      </RepliesWrapper>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleConfirm(id, replyId, author, content) {
      if (content.value.length) {
        if (replyId !== '') {
          dispatch(actionCreators.sendReplies(id, replyId, `[@${author}](/user/${author}) ${content.value}`))
        } else {
          dispatch(actionCreators.sendReplies(id, replyId, content.value))
        }
        content.value = ''
      } else {
        T.notify('回复内容不能为空')
      }
    }
  }
}

export default connect(null, mapDispatch)(Replies)