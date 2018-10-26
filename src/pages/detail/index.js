import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { MianWrapper, MianContent, MianTitle, MianInfo, ReplyWrapper, ReplyContent, ReplyList, ReplyItem } from './style'
import { actionCreators } from './store'
import { formatDate } from './../../utils'
import { Link } from 'react-router-dom'
import TopNav from './../../common/topnav'
import Replies from './../replies'

class Detail extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      currIndex: -1
    }
  }
  render() {
    let { topicDetailList } = this.props
    let newList = topicDetailList.toJS()
    if (JSON.stringify(newList) === '{}') return null
    return (
      <Fragment>
        <TopNav title={'详情'}></TopNav>
        <MianWrapper >
          <MianTitle>
            {newList.title}
          </MianTitle>
          <MianInfo>
            <span>发布于 {formatDate(newList.create_at)}</span>
            <span>作者 {newList.author.loginname}</span>
            <span>阅读 {newList.visit_count}</span>
            <span>来自 {newList.tab}</span>
          </MianInfo>
          <MianContent
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: newList.content }}></MianContent>
        </MianWrapper>
        <ReplyWrapper>
          <ReplyContent>全部回复（{newList.replies.length}）</ReplyContent>
          {newList.replies.length ? (<ReplyList>
            {newList.replies.map((it, index) => {
              return (
                <ReplyItem key={index}>
                  <div className="replyAvuthor">
                    <Link to={'/user/' + it.author.loginname} >
                      <img src={it.author.avatar_url} alt="avatar_url" />
                    </Link>
                  </div>
                  <div className="replyContent">
                    <div className="content-hd">
                      <p>
                        <span className="name">
                          <Link to={'/user/' + it.author.loginname} >{it.author.loginname}</Link></span>
                        {formatDate(it.create_at)}
                      </p>
                      <p className="r">
                        <span className="replies" onClick={() => this.openReplies(index)}>回复</span>
                        <span className="num"># {index + 1}</span>
                      </p>
                    </div>
                    <p className="markdown-body" dangerouslySetInnerHTML={{ __html: it.content }}></p>
                    {this.state.currIndex == index ? (
                      <Replies
                        author={it.author.loginname}
                        id={newList.id}
                        replyId={it.id}>
                      </Replies>) : null}
                  </div>
                </ReplyItem>
              )
            })}
          </ReplyList>) : <p className="noReply">暂无回复</p>}
        </ReplyWrapper>
        <Replies id={newList.id} replyId={''}></Replies>
      </Fragment>
    )
  }
  componentDidMount() {
    this.props.getTopicDetail(this.props.match.params.id)
  }

  openReplies(index) {
    this.setState(() => {
      return {
        currIndex: index
      }
    })
  }
}

const mapState = (state) => {
  return {
    topicDetailList: state.getIn(['detail', 'topicDetailList'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getTopicDetail(id) {
      dispatch(actionCreators.getTopicDetail(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Detail)