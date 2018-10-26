import styled from 'styled-components'

export const MianWrapper = styled.div`
  margin: 1rem .1rem .1rem;
  border-radius: .1rem;
  background: #fff;
`
export const MianTitle = styled.h4`
  padding: .3rem .15rem;
  font-weight: bold;
  line-height: 1.4
`
export const MianInfo = styled.div`
  font-size: .26rem;
  color: #838383;
  line-heihgt: 1;
  padding: 0 .15rem .3rem .15rem;
  font-weight: normal;
  span {
    &:before {
      content: '';
      background: #999;
      width: 4px;
      height: 4px;
      display: inline-block;
      border-radius: 100%;
      vertical-align: middle;
      margin: 0 .15rem;
    }
    &:first-child {
      &:before {
        display: none;
      }
    }
  }
`

export const MianContent = styled.div`
  padding: .15rem;
  border-top: 1px solid #e5e5e5;
`

export const ReplyWrapper = styled.div`
  margin: .1rem;
  border-radius: .1rem;
  background: #fff;
  .noReply {
    text-align: center;
    padding: .3rem .15rem;
  }
`
export const ReplyContent = styled.div`
  border-bottom: 1px solid #e5e5e5;
  font-weight: bold;
  padding: .3rem .15rem;
`
export const ReplyList = styled.div`
`
export const ReplyItem = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding: .3rem .15rem;
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: stretch;
  align-content: stretch;
  .replyAvuthor {
    margin-right: .2rem;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
    }
  }
  .replyContent {
    font-size: .26rem;
    width: 100%;
    overflow: hidden;
    .content-hd {
      display: flex;
      justify-content: space-between;
      margin-bottom: .2rem;
      span.name {
        color: #0096ff;
        margin-right: .1rem;
        a {
          color: #0096ff;
        }
      }
      .replies {
        margin-right: .2rem;
      }
    }
  }
`