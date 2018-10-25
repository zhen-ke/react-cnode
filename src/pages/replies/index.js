import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { RepliesWrapper, RepliesTextarea, RepliesButton } from './style'

class Replies extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    let { handleConfirm, id, replyId, author } = this.props
    return (
      <RepliesWrapper>
        <RepliesTextarea
          ref={(textarea) => { this.content = textarea }}
          placeholder={author ? '@' + author : '请输入回复内容'}></RepliesTextarea>
        <RepliesButton onClick={() => { handleConfirm(id, replyId, author, this.content) }}>回复</RepliesButton>
      </RepliesWrapper>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleConfirm(id, replyId, author, content) {
      if (content.value.length) {
        if (replyId != '') {
          dispatch(actionCreators.sendReplies(id, replyId, `[@${author}](/user/${author}) ${content.value}`))
        } else {
          dispatch(actionCreators.sendReplies(id, replyId, content.value))
        }
        content.value = ''
      } else {
        alert('回复内容不能为空')
      }
    }
  }
}

export default connect(null, mapDispatch)(Replies)