import styled from 'styled-components'

export const MessageWrapper = styled.div`
  margin-top: .8rem;
  font-size: .28rem;
  background: #fff;
`

export const MessageList = styled.ul`
  
`

export const MessageItem = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  border-bottom: 1px solid #e5e5e5;
  padding: .15rem;
`

export const MessageItemLeft = styled.div`
  img {
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
  }
`

export const MessageItemRight = styled.div`
  padding-left: .2rem;
  width: 100%;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: stretch;
  align-content: stretch;
  overflow: hidden;
  .item-hd {
    font-size: .26rem;
    .name {
      color: #0096ff;
    }
    .time {
      color: #999;
      float: right;
    }
    a {
      color: #0096ff;
    }
  }
  .item-bd {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    a {
      color: #0096ff;
    }
  }
`

export const MessageNothing = styled.div`
  text-align: center;
  padding: 1rem;
`