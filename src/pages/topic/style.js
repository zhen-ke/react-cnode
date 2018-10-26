import styled from 'styled-components'

export const TopicWrapper = styled.div`
  margin-top: 1rem;
`
export const TopicList = styled.ul`
  background: #eee;
`
export const TopicItem = styled.li`
  margin: 0 0 .1rem;
  padding: .15rem;
  background-color: #fff;
  a {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
    overflow: hidden;
  }
`
export const TopicIMedia = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  .author {
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
  }
`
export const TopicIContent = styled.div`
  padding-left: .2rem;
  width: 100%;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: stretch;
  align-content: stretch;
  .title {
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 6rem;
    span {
      background-color: #e5e5e5;
      color: #999;
      display: inline-block;
      margin-right: .2rem;
      padding: .05rem 0.2rem;
      border-radius: .05rem;
      font-size: .22rem;
    }
    .top {
      background: #ff4d41;
      color: #fff;
    }
  }
`
export const TopicIContentFooter = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  color: #888;
  font-size: .26rem;
`
export const TopicIContentFooterLeft = styled.div`
  .time {
    padding-left: .13rem;
    margin-left: .13rem;
    border-left: 1px solid #888;
  }
`
export const TopicIContentFooterRight = styled.div`
  .reply-count {
    padding-left: .1rem;
    margin-left: .1rem;
  }
`