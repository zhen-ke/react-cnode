import styled from 'styled-components'

export const MianWrapper = styled.div`
  margin: .1rem;
  border-radius: .1rem;
  background: #fff;
`
export const MianTitle = styled.h4`
  padding: .3rem .15rem;
  font-weight: bold;
  line-height: 1.4
`
export const MianInfo = styled.div`
  color: #838383;
  font-size: .24rem;
  line-heihgt: 1;
  padding: 0 .15rem .3rem .15rem;
  font-weight: normal;
  span {
    margin-right: .6em;
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
    width: 100%;
    overflow: hidden;
    .content-hd {
      display: flex;
      justify-content: space-between;
      font-size: .22rem;
      margin-bottom: .2rem;
      span.name {
        color: #0096ff;
        margin-right: .2rem;
        a {
          color: #0096ff;
        }
      }
    }
  }
`