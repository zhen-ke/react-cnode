import styled from 'styled-components'

export const CreateWrapper = styled.div`
  background: #fff;
  margin-top: .8rem;
`
export const CreateItem = styled.div`
  padding: .2rem;
  border-bottom: 1px solid #e5e5e5;
  select {
    width: 100%;
  }
`
export const CreateInput = styled.input`
  width: 100%;
  border: 0;
`
export const CreateTextarea = styled.textarea`
  width: 100%;
  resize: none;
  height: 5rem;
  border: 0;
`

export const CreateButton = styled.button`
  text-align: center;
  background: #fff;
  padding: .2rem .4rem;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
  display: block;
  width: 100%;
  box-sizing: border-box;
  color: #333;
`