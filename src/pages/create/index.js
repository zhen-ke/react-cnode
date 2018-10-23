import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { CreateWrapper, CreateItem, CreateInput, CreateTextarea } from './style'

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    let loginState = localStorage.user
    let { handleConfirm } = this.props
    if (loginState) {
      return (
        <CreateWrapper>
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
                ref={(input) => { this.title = input }}
                placeholder="标题字数 10 字以上"></CreateInput>
            </CreateItem>
            <CreateItem className="item">
              <CreateTextarea
                ref={(textarea) => { this.content = textarea }}
                placeholder="内容字数 30 字以上"></CreateTextarea>
            </CreateItem>
            <CreateInput type="button" value="提交" className="confirm" onClick={() => { handleConfirm(this.state.value, this.title, this.content) }}></CreateInput>
          </form>
        </CreateWrapper>
      )
    } else {
      return <Redirect to='/login' />
    }
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
}

const mapState = (state) => {
  return {
    createState: state.getIn(['create', 'createState'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleConfirm(type, title, content) {
      if (type === '') {
        alert('请选择发表类型')
      } else if (title.value.length < 10) {
        alert('标题字数必须10字以上')
      } else if (content.value.length < 30) {
        alert('内容字数必须30字以上')
      } else {
        dispatch(actionCreators.handleConfirm(type, title.value, content.value))
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Create)