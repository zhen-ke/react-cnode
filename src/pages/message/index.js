import React, { useEffect } from "react";
import { connect } from "react-redux";
import Footer from "./../../common/footer";
import TopNav from "./../../common/topnav";
import {
  MessageWrapper,
  MessageList,
  MessageItem,
  MessageItemLeft,
  MessageItemRight,
  MessageNothing
} from "./style";
import { actionCreators } from "./store";
import { formatDate } from "./../../utils";
import { Link } from "react-router-dom";

function Message({ messageList, isLogined, getMessage }) {
  let loginState = localStorage.user;
  let newMessageList = messageList.toJS();

  useEffect(() => {
    if (isLogined || loginState) {
      getMessage();
    }
  }, [isLogined, loginState]);

  return (
    <MessageWrapper>
      <TopNav title={"消息"} />
      {(newMessageList &&
        newMessageList.has_read_messages &&
        newMessageList.has_read_messages.length) ||
      (newMessageList &&
        newMessageList.has_read_messages &&
        newMessageList.hasnot_read_messages.length) ? (
        <MessageList>
          {newMessageList.hasnot_read_messages.map((it, index) => {
            return (
              <MessageItem key={index}>
                <MessageItemLeft>
                  <Link to={"/user/" + it.author.loginname}>
                    <img src={it.author.avatar_url} alt="" />
                  </Link>
                </MessageItemLeft>
                <MessageItemRight>
                  <div className="item-hd">
                    <span className="name">
                      <Link to={"/user/" + it.author.loginname}>
                        {it.author.loginname}
                      </Link>
                    </span>
                    <span className="time">
                      {formatDate(it.reply.create_at)}
                    </span>
                  </div>
                  <div className="item-bd">
                    在话题{" "}
                    <Link to={"/detail/" + it.topic.id}>{it.topic.title}</Link>
                    回复了你
                  </div>
                </MessageItemRight>
              </MessageItem>
            );
          })}
          {newMessageList.has_read_messages.map((it, index) => {
            return (
              <MessageItem key={index}>
                <MessageItemLeft>
                  <Link to={"/user/" + it.author.loginname}>
                    <img src={it.author.avatar_url} alt="" />
                  </Link>
                </MessageItemLeft>
                <MessageItemRight>
                  <div className="item-hd">
                    <span className="name">
                      <Link to={"/user/" + it.author.loginname}>
                        {it.author.loginname}
                      </Link>
                    </span>
                    <span className="time">
                      {formatDate(it.reply.create_at)}
                    </span>
                  </div>
                  <div className="item-bd">
                    回复了你的话题{" "}
                    <Link to={"/detail/" + it.topic.id}>{it.topic.title}</Link>
                  </div>
                </MessageItemRight>
              </MessageItem>
            );
          })}
        </MessageList>
      ) : (
        <MessageNothing>暂无消息</MessageNothing>
      )}
      <Footer />
    </MessageWrapper>
  );
}

const mapState = state => {
  return {
    messageList: state.getIn(["message", "messageList"]),
    isLogined: state.getIn(["login", "isLogined"])
  };
};

const mapDispatch = dispatch => {
  return {
    getMessage() {
      dispatch(actionCreators.getMessageCount());
    }
  };
};

export default connect(mapState, mapDispatch)(Message);
