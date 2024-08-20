import React from 'react'
type GreetProps = {
  name:string
  messageCounnt?:number  // WITH ? MARK IT WILL MAKE VARIABLE OPTIONAL
  isLoggedIn:boolean
}
const Greet = (props:GreetProps) => {
  const {messageCounnt = 0} = props
  return (
    <div>
      <h2>Welcome {props.name} you have {messageCounnt} messages</h2>
    </div>
  )
}

export default Greet
