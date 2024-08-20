import React from 'react'
type ButtonProps = {
    hanndleClick : (event:React.MouseEvent<HTMLButtonElement>,id:number)=> void
}
const Button = (props:ButtonProps) => {
  return (
    <div>
        <button onClick={event =>props.hanndleClick(event,1)}>Click</button>
    </div>
  )
}

export default Button
