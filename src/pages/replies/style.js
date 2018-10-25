import styled from 'styled-components'

export const RepliesWrapper = styled.div`
  margin: .1rem;
  .login {
    padding: .2rem;
    text-align: center;
    a {
      color: #0080ff;
    }
  }
`

export const RepliesTextarea = styled.textarea`
  width: 100%;
  resize: none;
  height: 2.6rem;
  box-sizing: border-box;
  border: .03rem solid #eee;
  border-radius: .1rem;
  padding: .2rem;
  font-size: .28rem;
`

export const RepliesButton = styled.button`
  border-radius: .06rem;
  text-align: center;
  color: #fff;
  background: #0096ff;
  margin-top: .2rem;
  padding: .14rem .4rem;
  border: 0;
  font-size: .26rem;
  display: inline-block;
  float: right;
`