import styled,{ keyframes } from 'styled-components'

// Create the keyframes
const bounce = keyframes`
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
`

export const Spinner = styled.div`
  width: 1rem;
  height: 1rem;
  position: relative;
  top: 50%;
  left: 50%;
  margin-top: -.5rem;
  margin-left: -.5rem;
`

export const Bounce_Top = styled.div`
width: 100%;
height: 100%;
border-radius: 50%;
background-color: #0096ff;
opacity: 0.6;
position: absolute;
top: 0;
left: 0;
-webkit-animation: ${bounce} 2s infinite ease-in-out;
animation: ${bounce} 2s infinite ease-in-out;
`

export const Bounce_Bottom = styled.div`
width: 100%;
height: 100%;
border-radius: 50%;
background-color: #0096ff;
opacity: 0.6;
position: absolute;
top: 0;
left: 0;
-webkit-animation: ${bounce} -1s infinite ease-in-out;
animation: ${bounce} -1s infinite ease-in-out;
`