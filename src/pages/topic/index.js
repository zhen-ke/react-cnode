import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicList, TopicItem, TopicIMedia, TopicIContent, TopicIContentFooter, TopicIContentFooterLeft, TopicIContentFooterRight } from './style'
import { actionCreators } from './../topic/store'
import { formatDate } from './../../utils'
import InfiniteScroll from 'react-infinite-scroller';
import Loading from './../../common/loading'
import Header from './../header'
import Footer from './../../common/footer'
import { Link } from 'react-router-dom'

class Topic extends PureComponent {
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
    let { getTopic, topicList, page, limit, tab, hasMore } = this.props
    let newTopicList = topicList.toJS()
    return (
      <Fragment>
        <Header></Header>
        <TopicWrapper>
          <InfiniteScroll
            pageStart={1}
            loadMore={() => getTopic(hasMore, page, limit, tab)}
            hasMore={hasMore}
            loader={<Loading key={0}></Loading>}>
            <TopicList>
              {newTopicList.map((it, index) => {
                return (
                  <TopicItem key={index}>
                    <Link to={'/detail/' + it.id}>
                      <TopicIMedia>
                        <img className="author" src={it.author.avatar_url} alt="author" />
                      </TopicIMedia>
                      <TopicIContent>
                        <h4 className="title">
                          {/* {it.top ? (<span className="top">置顶</span>) : } */}
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

                    </Link>
                  </TopicItem>)
              })}
            </TopicList>
          </InfiniteScroll>
        </TopicWrapper>
        <Footer></Footer>
      </Fragment>
    )
  }
}

const mapState = (state) => {
  return {
    topicList: state.getIn(['topic', 'topicList']),
    page: state.getIn(['topic', 'page']),
    hasMore: state.getIn(['topic', 'hasMore']),
    tab: state.getIn(['header', 'tab']),
    limit: state.getIn(['topic', 'limit'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getTopic(hasMore, page, limit, tab) {
      if (hasMore) {
        dispatch(actionCreators.getTopic(page, limit, tab))
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Topic)