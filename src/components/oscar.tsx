import React from 'react'
type OscarProsp={
    children : React.ReactNode
}
const Oscar = (props:OscarProsp) => {
  return (
    <div>
       {props.children}
    </div>
  )
}

export default Oscar
