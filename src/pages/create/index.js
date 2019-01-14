import React, { PureComponent } from "react";
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

class Create extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    let { handleConfirm } = this.props;
    return (
      <CreateWrapper>
        <TopNav title={"创建主题"} />
        <form>
          <CreateItem className="item">
            <label>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">请选择发表类型</option>
                <option value="dev">客户端测试</option>
                <option value="ask">问答</option>
                <option value="share">分享</option>
                <option value="job">招聘</option>
              </select>
            </label>
          </CreateItem>
          <CreateItem className="item">
            <CreateInput
              ref={input => {
                this.title = input;
              }}
              placeholder="标题字数 10 字以上"
            />
          </CreateItem>
          <CreateItem className="item">
            <CreateTextarea
              ref={textarea => {
                this.content = textarea;
              }}
              placeholder="内容字数 30 字以上"
            />
          </CreateItem>
          <CreateButton
            type="button"
            onClick={() => {
              handleConfirm(this.state.value, this.title, this.content);
            }}
          >
            提交
          </CreateButton>
        </form>
        <Footer />
      </CreateWrapper>
    );
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
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
      } else if (title.value.length < 10) {
        T.notify("标题字数必须10字以上");
      } else if (content.value.length < 30) {
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

export default connect(
  mapState,
  mapDispatch
)(Create);
