import styled from 'styled-components'

export const LoginBack = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
`
export const LoginWrapper = styled.div`
  width: 5rem;  
`
export const Input = styled.input`
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #eee;
  width: 100%;
  padding: .2rem;
  font-size: .28rem;
  line-height: 1;
  display: block;
  -webkit-appearance: none; 
`

export const Button = styled.button`
  display: block;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  background: #0096ff;
  margin-top: .2rem;
  padding: .2rem;
  border: 0;
  width: 100%;
  font-size: .28rem;
`