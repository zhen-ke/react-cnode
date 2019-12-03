import React, { useState } from "react";
import { connect } from "react-redux";
import { HeaderWrapper, NavList, NavItem } from "./style";
import { actionCreators } from "./store";
import { actionCreators as topicActionCreators } from "./../topic/store";
import { Link } from "react-router-dom";

function Header({ changeTab }) {
  const [toplist, setTopList] = useState([
    {
      type: "all",
      text: "全部"
    },
    {
      type: "good",
      text: "精华"
    },
    {
      type: "share",
      text: "分享"
    },
    {
      type: "ask",
      text: "问答"
    },
    {
      type: "job",
      text: "招聘"
    }
  ]);

  return (
    <HeaderWrapper>
      <NavList>
        {toplist.map(it => {
          return (
            <NavItem key={it.type} onClick={() => changeTab(it.type)}>
              <Link to={"/?tab=" + it.type}>{it.text}</Link>
            </NavItem>
          );
        })}
      </NavList>
    </HeaderWrapper>
  );
}

const mapDispatch = dispatch => {
  return {
    changeTab(type) {
      // let page = 1, limit = 15
      dispatch(topicActionCreators.clearTopicList([]));
      dispatch(topicActionCreators.changePage(1));
      dispatch(actionCreators.changeTab(type));
      // dispatch(topicActionCreators.getTopic(page, limit, type))
    }
  };
};

export default connect(null, mapDispatch)(Header);
