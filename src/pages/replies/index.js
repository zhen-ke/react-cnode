import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";
import { RepliesWrapper, RepliesTextarea, RepliesButton } from "./style";
import { T } from "react-toast-mobile";

function Replies({ handleConfirm, id, replyId, author }) {
  const textarea = useFormInput("");
  return (
    <RepliesWrapper>
      {localStorage.user ? (
        <Fragment>
          <RepliesTextarea
            {...textarea}
            placeholder={author ? "@" + author : "请输入回复内容"}
          />
          <RepliesButton
            onClick={() => {
              handleConfirm(id, replyId, author, textarea.value);
            }}
          >
            回复
          </RepliesButton>
        </Fragment>
      ) : (
        <div className="login">
          你丫的先<Link to={"/login"}> 登录</Link> 才能发评论
        </div>
      )}
    </RepliesWrapper>
  );
}

function useFormInput(initValue) {
  const [value, setValue] = useState(initValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  };
}
const mapDispatch = dispatch => {
  return {
    handleConfirm(id, replyId, author, content) {
      if (content.length) {
        if (replyId !== "") {
          dispatch(
            actionCreators.sendReplies(
              id,
              replyId,
              `[@${author}](/user/${author}) ${content}`
            )
          );
        } else {
          dispatch(actionCreators.sendReplies(id, replyId, content));
        }
      } else {
        T.notify("回复内容不能为空");
      }
    }
  };
};

export default connect(null, mapDispatch)(Replies);
