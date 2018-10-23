import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, NavList, NavItem } from './style'
import { actionCreators } from './store'

class Header extends Component {
  render() {
    let { navList, getTopic, page, limit } = this.props
    let newNavList = navList.toJS()
    return (
      <HeaderWrapper>
        <NavList>
          {newNavList.map((it) => {
            return <NavItem
              key={it.type}
              onClick={() => getTopic(it.type, page, limit)}
            >{it.text}</NavItem>
          })}
        </NavList>
      </HeaderWrapper>
    )
  }
  componentDidMount() {
    //this.props.getTopic() // 获取首页数据
  }
}

const mapState = (state) => {
  return {
    navList: state.getIn(['header', 'navList']),
    page: state.getIn(['header', 'page']),
    limit: state.getIn(['header', 'limit']),
  }
}

const mapDispatch = (dispatch) => {
  return {
    getTopic(type, page, limit) {
      dispatch(actionCreators.changeTab(type))
      dispatch(actionCreators.getTopic(type, 1,limit)) 
    }
  }
}

export default connect(mapState, mapDispatch)(Header)