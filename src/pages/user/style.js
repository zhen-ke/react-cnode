import styled from 'styled-components'

export const UserInfo = styled.div`
  background: #0096ff;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
  padding: 1rem .5rem;
  color:#fff;
  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    border: .06rem solid #fff;
  }
  p {
    margin-top: .3rem;
  }
  .more {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: stretch;
    align-content: stretch;
    span {
      &:last-child {
        margin-left: .4rem;
      }
    }
  }
`

export const UserWrapper = styled.div`
  margin: .1rem .1rem .3rem;
  border-radius: .1rem;
  background: #fff;
`
export const UserTitle = styled.div`
  padding: .3rem .2rem;
  background: #f6f6f6;
  border-radius: .1rem .1rem 0 0;
`
export const UserContent = styled.div`

`
export const UserContentList = styled.div`
  font-size: .28rem;
  line-height: 1;
`
export const UserContentItem = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding: .3rem .2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &:last-child {
    border-bottom: 0;
  }

`