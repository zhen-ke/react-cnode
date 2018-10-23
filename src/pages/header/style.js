import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #e0e4e7;
  background: #fff;
  box-shadow: .4rem 0 .8rem rgba(0,0,0,.08);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;
`
export const NavItem = styled.li`
  font-size: .3rem;
  text-align: center;
  font-weight: bold;
  line-height: .8rem;
  margin: 0 .12rem;
`