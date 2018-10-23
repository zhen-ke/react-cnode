import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicList, TopicItem, TopicIMedia, TopicIContent, TopicIContentFooter, TopicIContentFooterLeft, TopicIContentFooterRight } from './style'
import { actionCreators as headerActionCreators } from './../header/store'
import { formatDate } from './../../utils'
import InfiniteScroll from 'react-infinite-scroller';
import Loading from './../../common/loading'
import Header from './../header'
import { Link } from 'react-router-dom'

class Topic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: {
        good: '精华',
        share: '分享',
        ask: '问答',
        job: '招聘',
      },
    }
  }
  render() {
    let { topicList, loadMore, page, hasMoreItems, tab } = this.props
    let newTopicList = topicList.toJS()
    return (
      <Fragment>
        <Header></Header>
        <TopicWrapper>
          <InfiniteScroll
            pageStart={1}
            loadMore={() => loadMore(hasMoreItems, page, tab)}
            hasMore={hasMoreItems}
            loader={<Loading key={0}></Loading>}>
            <TopicList>
              {newTopicList.map((it, index) => {
                return (
                  <Link to={'/detail/' + it.id} key={index}>
                    <TopicItem>
                      <TopicIMedia>
                        <img className="author" src={it.author.avatar_url} alt="author" />
                      </TopicIMedia>
                      <TopicIContent>
                        <h4 className="title">
                          {it.top || tab === 'good' ? (<span className="top">置顶</span>) : <span>{this.state.tab[it.tab]}</span>}
                          {it.title}</h4>
                        <TopicIContentFooter>
                          <TopicIContentFooterLeft>
                            <span className="loginname">{it.author.loginname}</span>
                            <span className="time">创建于{formatDate(it.create_at)}</span>
                          </TopicIContentFooterLeft>
                          <TopicIContentFooterRight>
                            <span className="time">{formatDate(it.last_reply_at)}</span>
                            <span className="reply-count">{it.reply_count} / {it.visit_count}</span>
                          </TopicIContentFooterRight>
                        </TopicIContentFooter>
                      </TopicIContent>
                    </TopicItem>
                  </Link>)
              })}
            </TopicList>
          </InfiniteScroll>
        </TopicWrapper>
      </Fragment>
    )
  }
}

const mapState = (state) => {
  return {
    topicList: state.getIn(['header', 'topic']),
    page: state.getIn(['header', 'page']),
    hasMoreItems: state.getIn(['header', 'hasMoreItems']),
    tab: state.getIn(['header', 'tab']),
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadMore(hasMoreItems, page, tab) {
      if (hasMoreItems) {
        dispatch(headerActionCreators.loadMore(tab, page))
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Topic)