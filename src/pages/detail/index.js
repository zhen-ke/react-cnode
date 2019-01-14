import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import {
  MianWrapper,
  MianContent,
  MianTitle,
  MianInfo,
  ReplyWrapper,
  ReplyContent,
  ReplyList,
  ReplyItem
} from "./style";
import { actionCreators } from "./store";
import { formatDate } from "./../../utils";
import { Link } from "react-router-dom";
import TopNav from "./../../common/topnav";
import Replies from "./../replies";

class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: -1,
      tab: {
        good: "精华",
        share: "分享",
        ask: "问答",
        job: "招聘"
      }
    };
  }
  render() {
    let { topicDetailList } = this.props;
    let newList = topicDetailList.toJS();
    // 导步加载数据时，newList转为空，render的时候去读一个空对象的属性时会报错，现提供如下解决方案
    // 方法一
    // let {title="",create_at = "" ,author = "",visit_count = 0 ,replies = [],tab='good',content=''} = newList
    // 方法二
    // if (JSON.stringify(newList) === "{}") return null;
    // 方法三
    // 用 && 操作符
    return (
      <Fragment>
        <TopNav title={"详情"} />
        <MianWrapper>
          <MianTitle>{newList && newList.title}</MianTitle>
          <MianInfo>
            <span>发布于 {formatDate(newList && newList.create_at)}</span>
            <span>
              作者 {newList && newList.author && newList.author.loginname}
            </span>
            <span>阅读 {newList && newList.visit_count}</span>
            <span>来自 {this.state.tab[newList && newList.tab]}</span>
          </MianInfo>
          <MianContent
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: newList && newList.content }}
          />
        </MianWrapper>
        <ReplyWrapper>
          <ReplyContent>
            全部回复（{newList && newList.replies && newList.replies.length}）
          </ReplyContent>
          {newList && newList.replies && newList.replies.length ? (
            <ReplyList>
              {newList &&
                newList.replies &&
                newList.replies.map((it, index) => {
                  return (
                    <ReplyItem key={index}>
                      <div className="replyAvuthor">
                        <Link to={"/user/" + it.author.loginname}>
                          <img src={it.author.avatar_url} alt="avatar_url" />
                        </Link>
                      </div>
                      <div className="replyContent">
                        <div className="content-hd">
                          <p>
                            <span className="name">
                              <Link to={"/user/" + it.author.loginname}>
                                {it.author.loginname}
                              </Link>
                            </span>
                            {formatDate(it.create_at)}
                          </p>
                          <p className="r">
                            <span
                              className="replies"
                              onClick={() => this.openReplies(index)}
                            >
                              {" "}
                              <i className="iconfont">&#xe609;</i>{" "}
                            </span>
                            <span className="num"># {index + 1}</span>
                          </p>
                        </div>
                        <p
                          className="markdown-body"
                          dangerouslySetInnerHTML={{ __html: it.content }}
                        />
                        {this.state.currIndex === index ? (
                          <Replies
                            author={it.author.loginname}
                            id={newList.id}
                            replyId={it.id}
                          />
                        ) : null}
                      </div>
                    </ReplyItem>
                  );
                })}
            </ReplyList>
          ) : (
            <p className="noReply">暂无回复</p>
          )}
        </ReplyWrapper>
        <Replies id={newList.id} replyId={""} />
      </Fragment>
    );
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getTopicDetail(this.props.match.params.id);
  }

  openReplies(index) {
    this.setState(() => {
      return {
        currIndex: index
      };
    });
  }
}

const mapState = state => {
  return {
    topicDetailList: state.getIn(["detail", "topicDetailList"])
  };
};

const mapDispatch = dispatch => {
  return {
    getTopicDetail(id) {
      dispatch(actionCreators.getTopicDetail(id));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Detail);
