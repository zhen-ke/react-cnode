import styled from 'styled-components'

export const FooterWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0096ff;
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: stretch;
  align-content: stretch;
  .active {
    background: #0080ff;
  }
`

export const FooterItem = styled.div`
  font-size: .22rem;
  text-align: center;
  flex :1;
  img {
    width: .3rem;
    height: .3rem;
  }
  p {
    margin-top: .05rem;
  }
  a {
    padding: .1rem .2rem;
    display: block;
    color: #fff;
  }
`