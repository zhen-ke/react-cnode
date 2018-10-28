import styled from 'styled-components'

export const TopNavWarpper = styled.div`
  background: #0096ff;
  padding: .2rem .15rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  box-shadow: 0.4rem 0 0.8rem rgba(0,0,0,.08);
  color: #fff;
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
  align-content: stretch;
  line-height: 1;
  z-index: 999;
  span {
    flex: 1;
    text-align: center;
    &:first-child {
      text-align: left;
    }
    &:last-child {
      text-align: right;
    }
  }
`

export const Back = styled.span`
  .iconfont {
    font-size: .4rem;
  }
`