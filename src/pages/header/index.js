import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, NavList, NavItem } from './style'
import { actionCreators } from './store'
import { actionCreators as topicActionCreators } from './../topic/store'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    let { navList, changeTab } = this.props
    let newNavList = navList.toJS()
    return (
      <HeaderWrapper>
        <NavList>
          {newNavList.map((it) => {
            return (
              <NavItem
                key={it.type}
                onClick={() => changeTab(it.type)}>
                <Link to={'/?tab=' + it.type}>{it.text}</Link>
              </NavItem>
            )
          })}
        </NavList>
      </HeaderWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    navList: state.getIn(['header', 'navList']),
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeTab(type) {
      let page = 1, limit = 15
      dispatch(topicActionCreators.clearTopicList([]))
      dispatch(topicActionCreators.changePage(page))
      dispatch(actionCreators.changeTab(type))
      dispatch(topicActionCreators.getTopic(page, limit, type))
    }
  }
}

export default connect(mapState, mapDispatch)(Header)