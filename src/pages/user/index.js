import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {
  UserWrapper,
  UserTitle,
  UserContent,
  UserContentList,
  UserContentItem,
  UserInfo,
  UserContentNone
} from "./style";
import { actionCreators } from "./store";
import { formatDate } from "./../../utils";
import { Link, withRouter } from "react-router-dom";
import TopNav from "./../../common/topnav";

function User({ userInfo, getUserInfo, match, mine }) {
  let newUserInfo = userInfo.toJS();

  useEffect(() => {
    getUserInfo(match.params.id || mine);
  }, [match.params.id]);

  return (
    <Fragment>
      <TopNav title={"用户详情"} />
      <UserInfo>
        <img src={newUserInfo && newUserInfo.avatar_url} alt="avatar_url" />
        <p className="user-name">{newUserInfo && newUserInfo.loginname}</p>
        <p className="more">
          <span>积分：{newUserInfo && newUserInfo.score}</span>
          <span>
            注册于：{formatDate(newUserInfo && newUserInfo.create_at)}
          </span>
        </p>
      </UserInfo>
      <UserWrapper>
        <UserTitle>最近创建的话题</UserTitle>
        <UserContent>
          {newUserInfo &&
          newUserInfo.recent_topics &&
          newUserInfo.recent_topics.length ? (
            <UserContentList>
              {newUserInfo &&
                newUserInfo.recent_topics.map((it, index) => {
                  return (
                    <UserContentItem key={index}>
                      <Link to={"/detail/" + it.id}>{it.title}</Link>
                    </UserContentItem>
                  );
                })}
            </UserContentList>
          ) : (
            <UserContentNone>暂无话题</UserContentNone>
          )}
        </UserContent>
      </UserWrapper>
      <UserWrapper>
        <UserTitle>最近参与的话题</UserTitle>
        {newUserInfo &&
        newUserInfo.recent_topics &&
        newUserInfo.recent_replies.length ? (
          <UserContentList>
            {newUserInfo &&
              newUserInfo.recent_replies.map((it, index) => {
                return (
                  <UserContentItem key={index}>
                    <Link to={"/detail/" + it.id}>{it.title}</Link>
                  </UserContentItem>
                );
              })}
          </UserContentList>
        ) : (
          <UserContentNone>暂无话题</UserContentNone>
        )}
      </UserWrapper>
    </Fragment>
  );
}
const mapState = state => {
  return {
    userInfo: state.getIn(["user", "userInfo"])
  };
};

const mapDispatch = dispatch => {
  return {
    getUserInfo(id) {
      dispatch(actionCreators.getUserInfo(id));
    }
  };
};

export default connect(mapState, mapDispatch)(withRouter(User));
