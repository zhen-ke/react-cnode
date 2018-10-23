import React from 'react'
import { Spinner,Bounce_Top,Bounce_Bottom} from './style'

const Loading = () => {
  return (
    <Spinner>
      <Bounce_Top></Bounce_Top>
      <Bounce_Bottom></Bounce_Bottom>
    </Spinner>
  )
}
export default Loading