import React from 'react'
type HeadinngProps={
    children :string
}
const Heading = (props:HeadinngProps) => {
  return (
    <div>
    <h2> {props.children} </h2>
     <p>This is for passing children props</p>
    </div>
  )
}

export default Heading
