import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import {
  CreateWrapper,
  CreateItem,
  CreateInput,
  CreateTextarea,
  CreateButton
} from "./style";
import Footer from "./../../common/footer";
import TopNav from "./../../common/topnav";
import { T } from "react-toast-mobile";

function Create({ handleConfirm }) {
  const postType = useFormInput("default");
  const postTitle = useFormInput("");
  const postContent = useFormInput("");

  return (
    <CreateWrapper>
      <TopNav title={"创建主题"} />
      <form>
        <CreateItem className="item">
          <label>
            <select {...postType}>
              <option value="default">请选择发表类型</option>
              <option value="dev">客户端测试</option>
              <option value="ask">问答</option>
              <option value="share">分享</option>
              <option value="job">招聘</option>
            </select>
          </label>
        </CreateItem>
        <CreateItem className="item">
          <CreateInput {...postTitle} placeholder="标题字数 10 字以上" />
        </CreateItem>
        <CreateItem className="item">
          <CreateTextarea {...postContent} placeholder="内容字数 30 字以上" />
        </CreateItem>
        <CreateButton
          type="button"
          onClick={() => {
            handleConfirm(
              postType.value,
              postTitle.value,
              postContent.value
            );
          }}
        >
          提交
        </CreateButton>
      </form>
      <Footer />
    </CreateWrapper>
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

const mapState = state => {
  return {
    createState: state.getIn(["create", "createState"])
  };
};

const mapDispatch = dispatch => {
  return {
    handleConfirm(type, title, content) {
      if (type === "") {
        T.notify("请选择发表类型");
      } else if (title.length < 10) {
        T.notify("标题字数必须10字以上");
      } else if (content.length < 30) {
        T.notify("内容字数必须30字以上");
      } else {
        dispatch(
          actionCreators.handleConfirm(type, title.value, content.value)
        );
        type = "";
        title.value = "";
        content.value = "";
      }
    }
  };
};

export default connect(mapState, mapDispatch)(Create);
